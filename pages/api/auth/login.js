// pages/api/auth/login.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  try {
    // Vérifier que le body est bien parsé
    if (!req.body) {
      return res.status(400).json({ message: 'Corps de la requête manquant.' });
    }

    const { username, password } = req.body;

    // Normaliser les entrées (supprimer les espaces)
    const normalizedUsername = username ? username.trim() : '';
    const normalizedPassword = password ? password.trim() : '';

    if (!normalizedUsername || !normalizedPassword) {
      return res.status(400).json({ message: 'Nom d\'utilisateur et mot de passe requis.' });
    }

    // Vérification des identifiants
    // ⚠️ IMPORTANT : Changez ces identifiants en production !
    const ADMIN_USERNAME = (process.env.ADMIN_USERNAME || 'admin').trim();
    const ADMIN_PASSWORD = (process.env.ADMIN_PASSWORD || 'admin123').trim();
    
    // Compte de démonstration
    const DEMO_USERNAME = 'demo';
    const DEMO_PASSWORD = 'demo123';

    // Vérifier les identifiants (admin ou demo)
    const isValidAdmin = normalizedUsername === ADMIN_USERNAME && normalizedPassword === ADMIN_PASSWORD;
    const isValidDemo = normalizedUsername === DEMO_USERNAME && normalizedPassword === DEMO_PASSWORD;

    // Logs de débogage (uniquement en développement)
    if (process.env.NODE_ENV !== 'production') {
      console.log('Tentative de connexion:', {
        username: normalizedUsername,
        adminMatch: isValidAdmin,
        demoMatch: isValidDemo,
        adminUsername: ADMIN_USERNAME,
        demoUsername: DEMO_USERNAME
      });
    }

    if (isValidAdmin || isValidDemo) {
      // Créer une session simple avec un token
      const token = Buffer.from(`${normalizedUsername}:${Date.now()}`).toString('base64');
      
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
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    return res.status(500).json({ message: 'Erreur serveur lors de la connexion.' });
  }
}

