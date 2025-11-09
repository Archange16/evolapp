// pages/api/admin/contacts.js

import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  // Vérifier l'authentification
  const session = req.cookies.admin_session;
  if (!session) {
    return res.status(401).json({ message: 'Non autorisé' });
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return res.status(200).json(contacts);
  } catch (error) {
    console.error('Erreur:', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
}

