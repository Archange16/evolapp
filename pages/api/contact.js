// pages/api/contact.js

import prisma from '../../lib/prisma';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'Veuillez remplir tous les champs obligatoires.' });
  }

  try {
    // Sauvegarde dans la base de données Supabase via Prisma
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        subject: subject || null,
        message,
      },
    });

    // Envoi d'email (optionnel - si SMTP est configuré)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const mailOptions = {
          from: `"${name}" <${email}>`,
          to: 'evolapp10@gmail.com',
          subject: subject || 'Nouveau message de contact',
          html: `
            <h2>Nouveau message de contact</h2>
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Téléphone:</strong> ${phone}</p>
            <p><strong>Sujet:</strong> ${subject || 'Non précisé'}</p>
            <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br />')}</p>
          `,
        };

        await transporter.sendMail(mailOptions);
      } catch (emailError) {
        console.error('Erreur d\'envoi email (non bloquant):', emailError);
      }
    }

    return res.status(200).json({ 
      message: 'Message enregistré avec succès.',
      id: contact.id 
    });
  } catch (error) {
    console.error('Erreur de sauvegarde:', error);
    return res.status(500).json({ message: 'Erreur lors de la sauvegarde du message.' });
  }
}
