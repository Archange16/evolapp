// pages/api/auth/login.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { username, password } = req.body;

  // Vérification des identifiants
  // ⚠️ IMPORTANT : Changez ces identifiants en production !
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
  
  // Compte de démonstration
  const DEMO_USERNAME = 'demo';
  const DEMO_PASSWORD = 'demo123';

  if (!username || !password) {
    return res.status(400).json({ message: 'Nom d\'utilisateur et mot de passe requis.' });
  }

  // Vérifier les identifiants (admin ou demo)
  const isValidAdmin = username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
  const isValidDemo = username === DEMO_USERNAME && password === DEMO_PASSWORD;

  if (isValidAdmin || isValidDemo) {
    // Créer une session simple avec un token
    const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');
    
    // Définir un cookie de session (valide 24h)
    // Secure uniquement en production (HTTPS)
    const isProduction = process.env.NODE_ENV === 'production';
    const secureFlag = isProduction ? 'Secure;' : '';
    res.setHeader('Set-Cookie', `admin_session=${token}; HttpOnly; ${secureFlag} SameSite=Strict; Max-Age=86400; Path=/`);
    
    return res.status(200).json({ 
      message: 'Connexion réussie',
      token 
    });
  } else {
    return res.status(401).json({ message: 'Identifiants incorrects.' });
  }
}

