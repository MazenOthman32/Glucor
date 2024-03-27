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
/////////////////////////////

// Listen for changes in the Realtime Database





// admin.database().ref().once('value')
//   .then(snapshot => {
//     var data = snapshot.val();
//     db.collection('readings').doc('UoUupvzcLUzcsCycQqoW').set(data)
//       .then(() => {
//         console.log('Data saved to Firestore successfully.');
//       })
//       .catch(error => {
//         console.error('Error saving data to Firestore:', error);
//       });
//   })
//   .catch(error => {
//     console.error('Error fetching data from Realtime Database:', error);
//   });


////////////////////////////
const signToken = id =>{
    return jwt.sign({id}, process.env.JWT_SECRET,{
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}
const createSendToken = (user, statusCode, req, res) => {
    const token = signToken(user._id);
  
    res.cookie('jwt', token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
      secure: req.secure || req.headers['x-forwarded-proto'] === 'https'
    });
    // Remove password from output
    user.password = undefined;
  
    res.status(statusCode).json({
      status: 'success',
      token,
      data: {
        user
      }
    });
    return token;
  };

exports.signup = catchAsync(async(req,res,next)=>{
  try{
      const { name, email, password, passwordConfirm, phoneNumber, gender, date_of_birth, diabete, height, weight, profile_pic } = req.body;
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
      // Check if email already exists in the database
      const userDoc = await db.collection('users').doc(email).get();
      if (userDoc.exists) {
          return res.status(400).json({
              error: 'Email already exists'
          });
      }
      // Create user document
      await db.collection('users').doc(email).set({
          email,
          password: hashedPassword,
          phoneNumber,
      });

      // Create reading document for the new user
      await db.collection('readings').doc(email).set({
          user_id: email,
          blood_glucose_value: 0 // Assuming initial value is 0
      });

      return res.status(200).json({
          message: 'User registered successfully'
      });
  } catch(error) { 
      console.error('Error during signup:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  // 1) Check if email and password exist
  if (!email || !password) {
      return next(new AppError('Please provide email and password!', 400));
  }
  // 2) Check if user exists && password is correct
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
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');
    const usersSnapshot = await db.collection('users')
    .where('passwordResetToken', '==', hashedToken)
    .where('passwordResetExpires', '>', Date.now())
    .get();
  const user = usersSnapshot.docs[0];
  // 2) If token has not expired, and there is a user, set the new password
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }
  const newPassword = req.body.password;
  const newPasswordConfirm = req.body.passwordConfirm;
  // Update user data
  await user.ref.update({
    password: newPassword,
    passwordConfirm: newPasswordConfirm,
    passwordResetToken: null,
    passwordResetExpires: null
  });
  // 4) Log the user in, send JWT
  createSendToken(user, 200, req, res);
});

const updateReading = (req,res)=>{
  const userId = userData.email;
  admin.database().ref('/test/int').on('value', (snapshot) => {
  
    const bloodGlucoseValue = snapshot.val();
  
    // Update the corresponding document in Firestore "readings" collection
    const readingDocRef = firestore.collection('readings').doc(userId); // Replace 'document_id' with the ID of the document
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
