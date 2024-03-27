const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login)
router.get('/logout', authController.logout)
router.post('/forgotpassword', authController.forgotPassword)
router.patch('/resetpassword/:token', authController.resetPassword)
// router.patch('/updateMyPassword', authController.protect, authController.updatePassword)

// router
// .route('/')
// .get( userController.getAllUsers)
// .post(userController.createUser)

// router
// .route('/:id')
// .get(userController.getUser)
// .patch(userController.updateUser)
// .delete(userController.deleteUser)

module.exports = router;