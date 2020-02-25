const { Router }= require('express');
const router = Router();
const nodemailer = require('nodemailer');

router.post('/send-email', async(req, res)=>{
    const { name, email, phone, message } = req.body;
    contentHTML = `
        <h1>User information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>Phone : ${phone}</li>
        </ul>
        <p>${message}</p>
    
    `;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'anjanrobotics@gmail.com',
               pass: 'anjanKumar@socsoftech'
           }
       });

       const mailOptions = {
        from: 'anjanrobotics@gmial.com ', // sender address
        to: 'reddysisinder@gmail.com', // list of receivers
        subject:'subject', // Subject line
        html: contentHTML// plain text body
      };
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
    
    
    res.redirect('/success.html');
});

module.exports = router;
