const nodemailer = require('nodemailer');
const fs = require('fs');


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'priyatiwari23nov@gmail.com', 
        pass: 'rnew wazn keoq rtld' 
    }
});


const attachment = {
    filename: 'image.jpeg', 
    path: './image.jpeg', 
    cid: 'unique@nodemailer.com'
};


const mailOptions = {
    from: 'priyatiwari23nov@gmail.com', 
    to: 'hr@ignitershub.com',
    subject: 'Challenge 3 Completed',
    html: `
        <p><strong>Your Name:</strong> Priya Tiwari</p>
        <p><strong>Semester:</strong>8</p>
        <p><strong>Branch:</strong> Computer Science</p>
        <p><strong>Roll Number:</strong> 200050101043</p>
        <img src="cid:unique@nodemailer.com">
    `,
    attachments: [attachment]
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
