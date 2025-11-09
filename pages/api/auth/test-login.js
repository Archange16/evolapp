// pages/api/auth/test-login.js
// Route de test pour diagnostiquer les problèmes de login
// ⚠️ SUPPRIMEZ CETTE ROUTE EN PRODUCTION APRÈS LE DIAGNOSTIC !

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  try {
    // Informations de diagnostic (sans exposer les mots de passe)
    const diagnostic = {
      hasBody: !!req.body,
      bodyType: typeof req.body,
      bodyKeys: req.body ? Object.keys(req.body) : [],
      receivedUsername: req.body?.username || null,
      receivedPassword: req.body?.password ? '***' : null,
      adminUsername: process.env.ADMIN_USERNAME || 'admin (default)',
      hasAdminPassword: !!process.env.ADMIN_PASSWORD,
      demoUsername: 'demo',
      nodeEnv: process.env.NODE_ENV,
      timestamp: new Date().toISOString()
    };

    // Normaliser les entrées
    const username = req.body?.username ? req.body.username.trim() : '';
    const password = req.body?.password ? req.body.password.trim() : '';

    // Test de validation
    const isValidDemo = username === 'demo' && password === 'demo123';
    const isValidAdmin = username === (process.env.ADMIN_USERNAME || 'admin') && 
                         password === (process.env.ADMIN_PASSWORD || 'admin123');

    diagnostic.validation = {
      normalizedUsername: username,
      isValidDemo,
      isValidAdmin,
      wouldAuthenticate: isValidDemo || isValidAdmin
    };

    return res.status(200).json({
      message: 'Diagnostic de login',
      diagnostic
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erreur lors du diagnostic',
      error: error.message
    });
  }
}

