import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Champs requis manquants' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // SSL/TLS pour le port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Envoi de l’email
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: subject || 'Nouveau message de formulaire',
      html: `
        <h3>Nouvelle demande de contact</h3>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || 'Non fourni'}</p>
        <p><strong>Sujet :</strong> ${subject || 'Non précisé'}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    console.log('✅ Email envoyé :', info.messageId);
    return res.status(200).json({ message: 'Email envoyé avec succès !' });
  } catch (error) {
    console.error('❌ Erreur SMTP :', error);
    return res.status(500).json({ message: "Erreur d'envoi de l'email", error: error.message });
  }
}
