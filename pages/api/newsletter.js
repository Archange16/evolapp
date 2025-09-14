// pages/api/newsletter.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Adresse e-mail invalide.' });
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
      from: `"Newsletter" <${process.env.SMTP_USER}>`,
      to: 'evolapp10@gmail.com',
      subject: 'Nouvel abonnement à la newsletter',
      html: `
        <h2>Nouvel e-mail abonné</h2>
        <p><strong>E-mail :</strong> ${email}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Email envoyé avec succès.' });
  } catch (error) {
    console.error('Erreur newsletter :', error);
    return res.status(500).json({ message: "Erreur serveur lors de l’envoi." });
  }
}
