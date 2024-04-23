const {db,admin} = require('../models/db')
const firestore = admin.firestore();
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const AppError = require('.././utils/appError')
const catchAsync = require('.././utils/catchAsync')
const sendEmail = require('./../utils/Email')

function printBloodGlucoseValueForLoggedInUser() {
  const userId = userData.email; // Replace 'user_id' with the actual user ID
  const readingsRef = db.collection('readings');
  // Query for the reading document for the specified user ID
  readingsRef.where('user_id', '==', userId).get()
    .then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log(`No reading found for user ${userId}`);
        return;
      }
      
      querySnapshot.forEach((doc) => {
        const readingData = doc.data();
        console.log(`Blood Glucose Value for user ${userId}: ${readingData.blood_glucose_value}`);
      });
    })
    .catch((error) => {
      console.error('Error getting reading:', error);
    });

}
function signToken (...data){
  return jwt.sign({data}, process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRES_IN
})
}
const createSendToken = (user, statusCode, req, res) => {
    const token = signToken(user.email, user.firstName,user.lastName,user.phoneNumber,user.weight,user.height,user.age);

    user.password = undefined;
    console.log(user)
    res.status(statusCode).json({
      status: 'success',
      token,
    });
    return token;
  };

  exports.signup = catchAsync(async (req, res, next) => {
    try {
        const data= { email, password, passwordConfirm, phoneNumber} = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);

        if (!(email && password && phoneNumber && passwordConfirm)) {
            return res.status(400).json({
                error: 'All fields must be filled'
            })
        }
        if (password !== passwordConfirm) {
            return res.status(400).json({
                error: 'Passwords do not match'
            });
        }
        const userDoc = await db.collection('users').doc(email).get();
        if (userDoc.exists) {
            return res.status(400).json({
                error: 'Email already exists'
            });
        }
        await db.collection('users').doc(email).set({
            email,
            password: hashedPassword,
            phoneNumber,
        }); 
        await db.collection('readings').doc(email).set({
            user_id: email,
            blood_glucose_value: 0 
        });
        createSendToken(data, 200, req, res);
    } catch (error) {
        console.error('Error during signup:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
      return next(new AppError('Please provide email and password!', 400));
  }
  try {
      const user = await db.collection('users').where('email', '==', email).get();
      if (user.empty) {
          return next(new AppError('Incorrect email or password', 401));
      }
      const userDocument = user.docs[0];
      global.userData = userDocument.data();
      const hashedPassword = userData.password;
      const correctPassword = await bcrypt.compare(password, hashedPassword);

      if (!correctPassword) {
          return next(new AppError('Incorrect email or password', 401));
      }
      console.log("Login successfully")
      createSendToken(userData, 200, req, res);
      printBloodGlucoseValueForLoggedInUser();
      updateReading()
  } catch (err) {
      return next(new AppError('Authentication failed', 500));
  }
});

exports.logout = (req, res) => {
    res.cookie('jwt', 'loggedout', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true
    });
    res.status(200).json({ status: 'success' });
  }; 

  const findOne = db.collection('users');
  exports.forgotPassword = catchAsync(async (req, res, next) => {
      try {
          const user = await findOne.where('email', '==', req.body.email).get();
          if (user.empty) {
              return next(new AppError('There is no user with email address.', 404));
          }
          const userDoc = user.docs[0];

          const resetToken = createPasswordResetToken();
          await userDoc.ref.update({
              passwordResetToken: resetToken,
              passwordResetExpires: Date.now() + 10 * 60 * 1000
          });
          const resetURL = `${req.protocol}://${req.get('host')}/resetPassword/${resetToken}`;
          await sendEmail({
              email: req.body.email,
              subject: 'Your password reset token (valid for 10 min)',
              message: `Forgot your password? Submit a PATCH req with your new pass to: ${resetURL}. If you didn't forget, ignore this email.`
          });     
          res.status(200).json({
              status: 'success',
              message: 'Token sent to email!'
          });
      } catch (err) {
          return next(new AppError('There was an error sending the email. Try again later!', 500));
      }
  });
const createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');
    return resetToken;
};
exports.resetPassword = catchAsync(async (req, res, next) => {
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');
    const usersSnapshot = await db.collection('users')
    .where('passwordResetToken', '==', hashedToken)
    .where('passwordResetExpires', '>', Date.now())
    .get();
  const user = usersSnapshot.docs[0];
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }
  const newPassword = req.body.password;
  const newPasswordConfirm = req.body.passwordConfirm;
  await user.ref.update({
    password: newPassword,
    passwordConfirm: newPasswordConfirm,
    passwordResetToken: null,
    passwordResetExpires: null
  });
  createSendToken(user, 200, req, res);
});

const updateReading = (req,res)=>{
  const userId = userData.email;
  admin.database().ref('/test/int').on('value', (snapshot) => {
  
    const bloodGlucoseValue = snapshot.val();
    const readingDocRef = firestore.collection('readings').doc(userId);
    readingDocRef.update({
      blood_glucose_value: bloodGlucoseValue
    })
    .then(() => {
      console.log('Blood glucose value updated successfully in Firestore');
    })
    .catch((error) => {
      console.error('Error updating blood glucose value in Firestore:', error);
    });
  });
}

exports.userInfo = catchAsync(async (req, res, next) => {
    const { firstName, lastName, age, gender, weight, height,age } = req.body;
    const token = req.headers.authorization.split(' ')[1];

    if (!(firstName && lastName && age && gender && height && weight && age)) {
        return res.status(400).json({
            error: 'All fields must be filled'
        });
    }
    try {
        const decodedToken = jwt.verify(token,  process.env.JWT_SECRET);
        const userEmail = decodedToken.data[0]
        const allData = decodedToken.data
        await db.collection('users').doc(userEmail).update({
            firstName,
            lastName,
            age,
            gender,
            weight,
            height,
            age
        });
        res.send('User info updated successfully')
        createSendToken(allData, 200, req, res);   
    } catch (error) {
        console.error('Error updating user info:', error);
        return res.status(500).json({
            error: 'Internal Server Error'
        });
    }
});


