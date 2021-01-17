const nodemailer = require('nodemailer')
require('dotenv').config()

const sendmail=(email)=>{
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.NODEMAILER_EMAIL, //email id

            pass: process.env.NODEMAILER_PASSWORD, // gmail password
        },
    })
    var mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: `${email}`,
        subject: 'Vaccination Notice',
        html:
            'Hello,<br>Vaccination Notice<br>',
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log('Error at nodemailer', error)
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}