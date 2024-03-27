const nodemailer = require('nodemailer')

const sendEmail =async options =>{
    //1) create a transport
    let transporter=nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth:{
            user:process.env.EMAIL_USERNAME,
            pass:process.env.EMAIL_PASSWORD
        }
    })
    //2) define the email options
    const mailOptions={
        from: 'Amr Ismail <helloamr@gmail.com>',
        to: options.email,
        subject: options.subject,
        text: options.message,
        //html
    };
    //3) Actually send the email
    await transporter.sendMail(mailOptions)
}
module.exports = sendEmail;