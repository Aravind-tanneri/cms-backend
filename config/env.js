import dotenv from 'dotenv';

dotenv.config();

export const {
    PORT,
    DB_URI,
    CLIENT_URL,
    EMAIL,
    APP_PASSWORD,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    RENDER_URL,
    BREVO_LOGIN,
    BREVO_SMTP_KEY,
    FROM_EMAIL
} = process.env;