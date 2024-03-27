const db = require('./db')

exports.createUser = async function (name, email, password, gender, dateOfBirth, diabetes, height, weight, profilePic) {
    try {
        const userRef = db.collection('users').doc(email);
        await userRef.set({
            name,
            email,
            password,
            gender,
            date_of_birth: dateOfBirth,
            diabete: diabetes,
            height,
            weight,
            // profile_pic: profilePic
        });
        console.log('User created with ID: ', userRef.id);
        return true; // Return true if user creation is successful
    } catch (error) {
        console.error('Error creating user: ', error);
        return false; // Return false if there's an error
    }
};