'use strict';

const nodemailer = require('nodemailer');
const config = require('../../configs/config');
const path = require('path');
const moment=require('moment');

/**
 * This function is to send user email with confirmation code
 * @param data will be holding user email and confirmation code generated and sent from controller
 * @param response will return is email sent successfully or not
 */

const signUpEmail = (data, response) => {
    const transporter = nodemailer.createTransport({
        service: config.mailer.service,
        auth: config.mailer.auth
    });
    const mailOptions = {
        from: config.mailer.auth.user,
        to: data.email,
        subject: data.subject,
        html: `<html>
                            <head>
                                <title>Welcome to Neomeric Attendance App!</title>
                            </head>
                            <body style="margin:0; padding:0;">
                            <div style="max-width:600px; margin:20px auto 0; padding-right:5px; padding-left:5px; overflow:hidden;">
                                <div style=" border-bottom: 1px solid rgba(0, 0, 0, 0.15); height:120px; width:100%; text-align: center; padding-bottom: 15px">
                                    <img src="https://s3.us-east-2.amazonaws.com/neomericattendanceapp/abe843d4-ceea-4491-9636-2d76e079c559.png" style="margin:15px; width:185px; height: 100px;">
                                </div>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:30px; margin-bottom:20px; line-height:30px; font-family: Verdana; font-size:18px; color:#333C4E; font-weight:bold;">
                                    Hi,
                                </h2>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                    Thank you for signing up for Neomeric Attendance App!
                                </p>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                    Your confirmation code is <b>${data.code}</b>
                                </p>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:0; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37;">Sincerely,</h2>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:30px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">The Neomeric Attendance App Team</h2>
                            </div>
                            </body>
                        </html>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return response(error);
        if (info) return response(null, true);
    });
};


const forgotEmail = (data, response) => {
    const transporter = nodemailer.createTransport({
        service: config.mailer.service,
        auth: config.mailer.auth
    });
    const mailOptions = {
        from: config.mailer.auth.user,
        to: data.email,
        subject: data.subject,
        html: `<html>
                            <head>
                                <title>Welcome to Neomeric Attendance App!</title>
                            </head>
                            <body style="margin:0; padding:0;">
                            <div style="max-width:600px; margin:20px auto 0; padding-right:5px; padding-left:5px; overflow:hidden;">
                                <div style=" border-bottom: 1px solid rgba(0, 0, 0, 0.15); height:120px; width:100%; text-align: center; padding-bottom: 15px">
                                    <img src="https://s3.us-east-2.amazonaws.com/neomericattendanceapp/abe843d4-ceea-4491-9636-2d76e079c559.png" style="margin:15px; width:185px; height: 100px;">
                                </div>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:30px; margin-bottom:20px; line-height:30px; font-family: Verdana; font-size:18px; color:#333C4E; font-weight:bold;">
                                    Hi,
                                </h2>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                    Seems like you forgot your password for Neomeric Attendance App!,If this is true ,use below code for reset your password
                                </p>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                    Your confirmation code is <b>${data.code}</b>
                                </p>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:0; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37;">Sincerely,</h2>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:30px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">The Neomeric Attendance App Team</h2>
                            </div>
                            </body>
                        </html>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return response(error);
        if (info) return response(null, true);
    });
};

/**
 * This function is to sent employee send invitation email
 * @param data will be holding user email, subject, organization name and one time password generated and sent from controller
 * @param response will return is email sent successfully or not
 */
const employeeInviteEmail = (data, response) => {
    const transporter = nodemailer.createTransport({
        service: config.mailer.service,
        auth: config.mailer.auth
    });
    const mailOptions = {
        from: config.mailer.auth.user,
        to: data.emails,
        subject: data.subject,
        html: `<html>
                            <head>
                                <title>Welcome to Neomeric Attendance App!</title>
                            </head>
                            <body style="margin:0; padding:0;">
                            <div style="max-width:600px; margin:20px auto 0; padding-right:5px; padding-left:5px; overflow:hidden;">
                                <div style=" border-bottom: 1px solid rgba(0, 0, 0, 0.15); height:120px; width:100%; text-align: center; padding-bottom: 15px">
                                    <img src="https://s3.us-east-2.amazonaws.com/neomericattendanceapp/abe843d4-ceea-4491-9636-2d76e079c559.png" style="margin:15px; width:185px; height: 100px;">
                                </div>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:30px; margin-bottom:20px; line-height:30px; font-family: Verdana; font-size:18px; color:#333C4E; font-weight:bold;">
                                    Hi,
                                </h2>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                    Dear employee you are invited to <b>${data.organizationName}</b> organization
                                </p>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                    Your One Time Password is <b>${data.password}</b> to login for the first time.<br>
                                    please use following link to login:<br>
                                    <a href="http://67.209.127.138:5001/login">http://67.209.127.138:5001/login</a>
                                </p>
                               
                                
                               
                                
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:0; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37;">Sincerely,</h2>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:30px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">The Neomeric Attendance App Team</h2>
                          
                                </div>
                            </body>
                        </html>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) return response(error);
        if (info) return response(null, true);
    });
};


/**
 * This function is to send contact us email to our admin in case user entered organization not found in our database
 * @param data will be holding admin email, subject, and the information user provided to contact
 * @param response will return is email sent successfully or not
 */
const contactUsEmail = (data, response) => {
    const transporter = nodemailer.createTransport({
        service: config.mailer.service,
        auth: config.mailer.auth
    });
    const mailOptions = {
        from: config.mailer.auth.user,
        to: data.email,
        subject: data.subject,
        html: `<html>
                            <head>
                                <title>Attendance Contact Us Form!</title>
                            </head>
                            <body style="margin:0; padding:0;">
                            <div style="max-width:600px; margin:20px auto 0; padding-right:5px; padding-left:5px; overflow:hidden;">
                                <div style=" border-bottom: 1px solid rgba(0, 0, 0, 0.15); height:120px; width:100%; text-align: center; padding-bottom: 15px">
                                    <img src="https://s3.us-east-2.amazonaws.com/neomericattendanceapp/abe843d4-ceea-4491-9636-2d76e079c559.png" style="margin:15px; width:185px; height: 100px;">
                                </div>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:30px; margin-bottom:20px; line-height:30px; font-family: Verdana; font-size:18px; color:#333C4E; font-weight:bold;">
                                    Hi,
                                </h2>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                    Full Name: <b>${data.data.fullName}</b><br>
                                    Company Name: <b>${data.data.companyName}</b><br>
                                    Email Id: <b>${data.data.email}</b><br>
                                    Office Location: <b>${data.data.officeAddress}</b><br>
                                    Message: <b>${data.data.message}</b>
                                </p>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:0; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37;">Sincerely,</h2>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:30px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">The Neomeric Attendance App Team</h2>
                            </div>
                            </body>
                        </html>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) return response(error);
        if (info) return response(null, true);
    });
};


/**
 * This function is to send email to employee telling that your are added to an office
 * @param data will be holding employee email, subject, office name and one time password to login for the first time
 * @param response will return is email sent successfully or not
 */
const employeeAddedEmail = (data, response) => {
    console.log(data);
    let transporter = nodemailer.createTransport({
        service: config.mailer.service,
        auth: config.mailer.auth
    });
    
   
     
        const mailOptions = {
            from: config.mailer.auth.user,
             to: data.emails,
            subject: data.subject,
            
            html: `<html>
                                <head>
                                    <title>Welcome to Neomeric Attendance App!</title>
                                </head>
                                <body style="margin:0; padding:0;">
                                <div style="max-width:600px; margin:20px auto 0; padding-right:5px; padding-left:5px; overflow:hidden;">
                                    <div style=" border-bottom: 1px solid rgba(0, 0, 0, 0.15); height:120px; width:100%; text-align: center; padding-bottom: 15px">
                                        <img src="https://s3.us-east-2.amazonaws.com/neomericattendanceapp/abe843d4-ceea-4491-9636-2d76e079c559.png" style="margin:15px; width:185px; height: 100px;">
                                    </div>
                                    <h2 style="float:right; width:96%; margin-right:2%; margin-top:30px; margin-bottom:20px; line-height:30px; font-family: Verdana; font-size:18px; color:#333C4E; font-weight:bold;">
                                        Hi,
                                    </h2>
                                    <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                        Dear employee you have been added to <b>${data.officeName}</b> office.
                                    </p>
                                    <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                        Your One Time Password is <b>${data.password}</b> to login for the first time.<br>
                                        please use following link to login:<br>
                                        <a href="http://67.209.127.138:5001/login">http://67.209.127.138:5001/login</a>
                                        <br>
                                        <div style="margin-left: 148px; margin-top: 34px;">
                                        <a href="https://itunes.apple.com/us/app/neomeric-smart-attendance/id1395188964?ls=1&mt=8">
                                        <img src="https://s3.us-east-2.amazonaws.com/neomericattendanceapp/AppStore.png" width="125"></a>
                                        
                                        <a style="margin-left:9px;" href="https://play.google.com/store/apps/details?id=com.neomeric.attendence">
                                       <img src="https://s3.us-east-2.amazonaws.com/neomericattendanceapp/PlayStore.png" width="125" height="42"></a>
                                       </div>
                                    </p>
                                    <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:0; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37;">Sincerely,</h2>
                                    <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:30px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">The Neomeric Attendance App Team</h2>
                                </div>
                                </body>
                              
                            </html>`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) return response(error);
            if (info){
                 return response(null, true);
                }
        });
  
   
};



/**
 * This function is to send email to employee telling that your are added to an office
 * @param data will be holding employee email, subject
 * @param response will return is email sent successfully or not
 */
const employeeLateCheckInEmail = (data, response) => {
    const transporter = nodemailer.createTransport({
        service: config.mailer.service,
        auth: config.mailer.auth
    });
    const mailOptions = {
        from: config.mailer.auth.user,
        to: data.email,
        subject: data.subject,
        html: `<html>
                            <head>
                                <title>Welcome to Neomeric Attendance App!</title>
                            </head>
                            <body style="margin:0; padding:0;">
                            <div style="max-width:600px; margin:20px auto 0; padding-right:5px; padding-left:5px; overflow:hidden;">
                                <div style=" border-bottom: 1px solid rgba(0, 0, 0, 0.15); height:120px; width:100%; text-align: center; padding-bottom: 15px">
                                    <img src="https://s3.us-east-2.amazonaws.com/neomericattendanceapp/abe843d4-ceea-4491-9636-2d76e079c559.png" style="margin:15px; width:185px; height: 100px;">
                                </div>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:30px; margin-bottom:20px; line-height:30px; font-family: Verdana; font-size:18px; color:#333C4E; font-weight:bold;">
                                    Hi,
                                </h2>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                Dear ${data.name},
                                </p>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                You have arrived late to office (${data.officeName}), kindly inform HR.
                                </p>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:0; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37;">Sincerely,</h2>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:30px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">The Neomeric Attendance App Team</h2>
                            </div>
                            </body>
                        </html>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) return response(error);
        if (info){ 
            
            return response(null, true);}
    });
};


const attendanceReport = (data, response) => {

    let ABSPATH="static/report/";
   // let ABSPATH=" /tmp/";
   
    const transporter = nodemailer.createTransport({
        service: config.mailer.service,
        auth: config.mailer.auth
    });
    const mailOptions = {
        from: config.mailer.auth.user,
        to: data.email,
        subject: data.subject,
        attachments: [
            {
             path: ABSPATH + data.path
            }
         ],
        html: `<html>
                            <head>
                                <title>Welcome to Neomeric Attendance App!</title>
                            </head>
                            <body style="margin:0; padding:0;">
                            <div style="max-width:600px; margin:20px auto 0; padding-right:5px; padding-left:5px; overflow:hidden;">
                                <div style=" border-bottom: 1px solid rgba(0, 0, 0, 0.15); height:120px; width:100%; text-align: center; padding-bottom: 15px">
                                    <img src="https://s3.us-east-2.amazonaws.com/neomericattendanceapp/abe843d4-ceea-4491-9636-2d76e079c559.png" style="margin:15px; width:185px; height: 100px;">
                                </div>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:30px; margin-bottom:20px; line-height:30px; font-family: Verdana; font-size:18px; color:#333C4E; font-weight:bold;">
                                    Hi,
                                </h2>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                Dear ${data.name},
                                </p>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                Your attendance report from <b>${data.dateStart}</b> to <b>${data.DateEnd}</b> is attached in email.
                                <br/>Please check ur attachment.
                                </p>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:0; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37;">Sincerely,</h2>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:30px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">The Neomeric Attendance App Team</h2>
                            </div>
                            </body>
                        </html>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) return response(error);
        if (info){ 
            
            return response(null, true);}
    });
};

const LeaveStatusEmail = (data, response) => {
    const transporter = nodemailer.createTransport({
        service: config.mailer.service,
        auth: config.mailer.auth
    });
    const mailOptions = {
        from: config.mailer.auth.user,
        to: data.email,
        subject: data.subject,
        html: `<html>
                            <head>
                                <title>Welcome to Neomeric Attendance App!</title>
                            </head>
                            <body style="margin:0; padding:0;">
                            <div style="max-width:600px; margin:20px auto 0; padding-right:5px; padding-left:5px; overflow:hidden;">
                                <div style=" border-bottom: 1px solid rgba(0, 0, 0, 0.15); height:120px; width:100%; text-align: center; padding-bottom: 15px">
                                    <img src="https://s3.us-east-2.amazonaws.com/neomericattendanceapp/abe843d4-ceea-4491-9636-2d76e079c559.png" style="margin:15px; width:185px; height: 100px;">
                                </div>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:30px; margin-bottom:20px; line-height:30px; font-family: Verdana; font-size:18px; color:#333C4E; font-weight:bold;">
                                    Hi,
                                </h2>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                Dear ${data.name},
                                </p>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                Your ${data.leaveType} on <b>${moment(data.dateFrom).format('MMMM D, YYYY')}</b> to  <b>${moment(data.dateTo).format('MMMM D, YYYY')}</b> has been ${data.leaveStatus}.
                               
                                </p>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:0; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37;">Sincerely,</h2>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:30px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">The Neomeric Attendance App Team</h2>
                            </div>
                            </body>
                        </html>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) return response(error);
        if (info){ 
            
            return response(null, true);}
    });
};



const ManagerNotification = (data, response) => {
    const transporter = nodemailer.createTransport({
        service: config.mailer.service,
        auth: config.mailer.auth
    });
    const mailOptions = {
        from: config.mailer.auth.user,
        to: data.email,
        subject: data.subject,
        html: `<html>
                            <head>
                                <title>Welcome to Neomeric Attendance App!</title>
                            </head>
                            <body style="margin:0; padding:0;">
                            <div style="max-width:600px; margin:20px auto 0; padding-right:5px; padding-left:5px; overflow:hidden;">
                                <div style=" border-bottom: 1px solid rgba(0, 0, 0, 0.15); height:120px; width:100%; text-align: center; padding-bottom: 15px">
                                    <img src="https://s3.us-east-2.amazonaws.com/neomericattendanceapp/abe843d4-ceea-4491-9636-2d76e079c559.png" style="margin:15px; width:185px; height: 100px;">
                                </div>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:30px; margin-bottom:20px; line-height:30px; font-family: Verdana; font-size:18px; color:#333C4E; font-weight:bold;">
                                    Hi,
                                </h2>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                Dear ${data.ManagerName},
                                </p>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                ${data.EmployeeName} Applied for ${data.leave_type} from ${moment(data.leave_date_from).format('MMMM Do YYYY')} to ${moment(data.leave_date_to).format('MMMM Do YYYY')}
                               
                                </p>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:0; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37;">Sincerely,</h2>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:30px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">The Neomeric Attendance App Team</h2>
                            </div>
                            </body>
                        </html>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) return response(error);
        if (info){ 
            
            return response(null, true);}
    });
};



const HrNotification = (data, response) => {
    const transporter = nodemailer.createTransport({
        service: config.mailer.service,
        auth: config.mailer.auth
    });
    const mailOptions = {
        from: config.mailer.auth.user,
        to: data.email,
        subject: data.subject,
        html: `<html>
                            <head>
                                <title>Welcome to Neomeric Attendance App!</title>
                            </head>
                            <body style="margin:0; padding:0;">
                            <div style="max-width:600px; margin:20px auto 0; padding-right:5px; padding-left:5px; overflow:hidden;">
                                <div style=" border-bottom: 1px solid rgba(0, 0, 0, 0.15); height:120px; width:100%; text-align: center; padding-bottom: 15px">
                                    <img src="https://s3.us-east-2.amazonaws.com/neomericattendanceapp/abe843d4-ceea-4491-9636-2d76e079c559.png" style="margin:15px; width:185px; height: 100px;">
                                </div>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:30px; margin-bottom:20px; line-height:30px; font-family: Verdana; font-size:18px; color:#333C4E; font-weight:bold;">
                                    Hi,
                                </h2>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                Dear ${data.Hrname},
                                </p>
                                <p style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">
                                ${data.EmployeeName} Applied for ${data.leave_type} from ${moment(data.leave_date_from).format('MMMM Do YYYY')} to ${moment(data.leave_date_to).format('MMMM Do YYYY')}
                               
                                </p>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:0; line-height:28px; font-family: Verdana; font-size:14px; color:#231d37;">Sincerely,</h2>
                                <h2 style="float:right; width:96%; margin-right:2%; margin-top:0; margin-bottom:25px; line-height:30px; font-family: Verdana; font-size:14px; color:#231d37; font-weight:normal;">The Neomeric Attendance App Team</h2>
                            </div>
                            </body>
                        </html>`
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) return response(error);
        if (info){ 
            
            return response(null, true);}
    });
};
module.exports = {
    signUpEmail: signUpEmail,
    employeeInviteEmail: employeeInviteEmail,
    contactUsEmail: contactUsEmail,
    employeeAddedEmail: employeeAddedEmail,
    employeeLateCheckInEmail:employeeLateCheckInEmail,
    attendanceReport:attendanceReport,
    forgotEmail:forgotEmail,
    LeaveStatusEmail:LeaveStatusEmail,
    ManagerNotification:ManagerNotification,
    HrNotification:HrNotification
};
