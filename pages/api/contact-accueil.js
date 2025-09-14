// pages/api/contact-accueil.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { firstName, phone, email } = req.body;

  if (!firstName || !phone || !email) {
    return res.status(400).json({ message: 'Tous les champs sont requis.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${firstName}" <${email}>`,
      to: 'evolapp10@gmail.com',
      subject: 'Nouveau message depuis la page d’accueil',
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Prénom :</strong> ${firstName}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Email :</strong> ${email}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email envoyé avec succès.' });

  } catch (error) {
    console.error('Erreur d’envoi :', error);
    return res.status(500).json({ message: 'Erreur serveur lors de l’envoi de l’email.' });
  }
}
