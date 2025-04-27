// pages/api/contact.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Champs requis manquants' });
  }

  try {
    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.example.com', // <- Remplace par ton serveur SMTP (ex: smtp.gmail.com)
      port: 465, // ou 587 selon le serveur
      secure: true, // true pour 465, false pour 587
      auth: {
        user: process.env.SMTP_USER, // stocké dans .env
        pass: process.env.SMTP_PASS,
      },
    });

    // Contenu de l'email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Expéditeur
      to: 'evolapp10@gmail.com', // À qui envoyer
      subject: subject || 'Nouveau message de formulaire',
      html: `
        <h3>Nouvelle demande de contact</h3>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ message: 'Email envoyé avec succès !' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur d'envoi de l'email", error: error.message });
  }
}
