// pages/api/devis.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { firstName, lastName, email, phone, company, website, services, message } = req.body;

  // Validation de base
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ message: 'Veuillez remplir tous les champs obligatoires.' });
  }

  try {
    console.log('📨 Envoi d\'email en cours avec :', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS ? '✔️' : '❌',
      to: process.env.SMTP_TO,
    });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true pour port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email, // 🔁 Pour que tu puisses répondre directement au client
      subject: 'Nouvelle demande de devis',
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        ${company ? `<p><strong>Entreprise :</strong> ${company}</p>` : ''}
        ${website ? `<p><strong>Site Web :</strong> ${website}</p>` : ''}
        <p><strong>Services demandés :</strong> ${Array.isArray(services) ? services.join(', ') : 'Non précisé'}</p>
        <p><strong>Message :</strong><br/>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Email envoyé avec succès :', info.messageId);

    return res.status(200).json({ message: 'Demande envoyée avec succès !' });
  } catch (error) {
    console.error('❌ Erreur SMTP :', error);
    return res.status(500).json({
      message: "Erreur lors de l'envoi de l'email.",
      error: error.message,
    });
  }
}
