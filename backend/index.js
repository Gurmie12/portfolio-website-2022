const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require("path");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.use(express.static(path.join(__dirname, "build")));

app.get('/*', (req, res) =>{
    res.sendFile(path.join(__dirname, "build", 'index.html'));
})

app.listen(process.env.PORT);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

contactEmail.verify((error) =>{
    if(error){
        console.log(error)
    }
});

router.post("/contact", (req, res) =>{
    const name = req.body.firstName + " " + req.body.lastName;
    const {email, message, phone} = req.body;
    const mail = {
        from: name,
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission",
        html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>
        `
    };

    contactEmail.sendMail(mail, (error) =>{
        if(error){
            res.json(error);
        }else{
            res.json({code: 200, status: "Message successfully sent, I will get back shortly!"});
        }
    })

})
