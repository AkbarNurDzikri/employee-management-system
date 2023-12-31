import nodemailer from 'nodemailer';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const emailVerificator = async (userEmail, userFullname, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: false,
      auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.PASSW_GMAIL
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    const htmlPath = path.join(__dirname, 'template.html');
    let htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    htmlContent = htmlContent.replace(/{nama_lengkap}/g, userFullname);
    htmlContent = htmlContent.replace(/{token}/g, token);

    return await transporter.sendMail({
      from: 'noreply',
      to: userEmail,
      subject: 'Verifikasi Email',
      html: htmlContent
    })
  } catch (error) {
    return error.message;
  }
}

export default emailVerificator;