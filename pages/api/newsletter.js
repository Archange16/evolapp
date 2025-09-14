// pages/api/newsletter.js

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ message: 'Adresse e-mail invalide.' });
  }

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // par défaut (ou remplace avec ton domaine validé)
      to: 'evolapp10@gmail.com',
      subject: 'Nouvel inscrit à la newsletter',
      html: `<p>Un nouvel utilisateur a soumis son email : <strong>${email}</strong></p>`,
    });

    return res.status(200).json({ message: 'Email envoyé avec succès via Resend.' });
  } catch (error) {
    console.error('Erreur Resend :', error);
    return res.status(500).json({
      message: 'Erreur Resend lors de l’envoi.',
      error: error.toString(),
    });
  }
}
