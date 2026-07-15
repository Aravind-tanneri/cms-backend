import nodemailer from 'nodemailer';
import {EMAIL, APP_PASSWORD, BREVO_LOGIN, BREVO_SMTP_KEY, FROM_EMAIL} from '../config/env.js'

export const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
        user: BREVO_LOGIN,
        pass: BREVO_SMTP_KEY
    }
});

export const sendOtpMail = async (email, otp) => {
    try {
        await transporter.sendMail({
            from: `"Class Management" <${FROM_EMAIL}>`,
            to: email,
            subject: "Email Verification",
            html: `
                <h2>Email Verification</h2>
                <p>Your One-Time Password (OTP) is:</p>
                
                <h1 style="letter-spacing:4px;">
                    ${otp}
                </h1>
                
                <p>This OTP is valid for 10 minutes.</p>
                
                <p>If you didn't request this, you can safely ignore this email.</p>
            `
        });
    } catch (err) {
        throw err;
    }
}

