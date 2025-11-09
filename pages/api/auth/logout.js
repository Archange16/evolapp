// pages/api/auth/logout.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  // Supprimer le cookie de session
  const isProduction = process.env.NODE_ENV === 'production';
  const secureFlag = isProduction ? 'Secure;' : '';
  res.setHeader('Set-Cookie', `admin_session=; HttpOnly; ${secureFlag} SameSite=Strict; Max-Age=0; Path=/`);
  
  return res.status(200).json({ message: 'Déconnexion réussie' });
}

