const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port: 587,
    secure: false,
    auth:{
        user: "esmyrna.oliveira@gmail.com",
        pass: "Esmyrna2022*"

    }
});

transporter.sendMail({
    from: "Esmyrna Oliveira <esmyrna.oliveira@gmail.com>",
    to: "esmyrnaoliveira13@gmail.com",
    subject: "Oi, sou Esmyrna e estou usando nodemailer",
    text: "Olá, me chamo Esmyrna e isso é um teste.",
    
})