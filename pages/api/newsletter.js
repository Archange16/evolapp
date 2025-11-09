// pages/api/newsletter.js

import prisma from '../../lib/prisma';

// Resend est optionnel - fonction pour initialiser Resend de manière sécurisée
function getResend() {
  try {
    // Import dynamique de Resend (optionnel)
    const { Resend } = require('resend');
    return process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
  } catch (error) {
    // Resend n'est pas installé, ce n'est pas grave
    return null;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Adresse e-mail invalide.' });
  }

  try {
    // Vérifier si l'email existe déjà
    const existing = await prisma.newsletter.findUnique({
      where: { email },
    });

    if (existing) {
      return res.status(200).json({ message: 'Vous êtes déjà inscrit à notre newsletter.' });
    }

    // Sauvegarde dans la base de données Supabase via Prisma
    const newsletter = await prisma.newsletter.create({
      data: {
        email,
      },
    });

    // Envoi d'email de notification (optionnel - si Resend est configuré)
    const resend = getResend();
    if (resend) {
      try {
        await resend.emails.send({
          from: 'onboarding@resend.dev', // Remplacez avec votre domaine validé
          to: 'evolapp10@gmail.com',
          subject: 'Nouvel inscrit à la newsletter',
          html: `<p>Un nouvel utilisateur a soumis son email : <strong>${email}</strong></p>`,
        });
      } catch (emailError) {
        console.error('Erreur Resend (non bloquant):', emailError);
      }
    }

    return res.status(200).json({ 
      message: 'Inscription à la newsletter réussie.',
      id: newsletter.id 
    });
  } catch (error) {
    console.error('Erreur de sauvegarde:', error);
    return res.status(500).json({
      message: 'Erreur lors de l\'inscription à la newsletter.',
      error: error.message,
    });
  }
}
