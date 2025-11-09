// Route de test pour vérifier que les API routes fonctionnent
export default async function handler(req, res) {
  // Accepter toutes les méthodes pour le test
  return res.status(200).json({ 
    message: 'API route fonctionne',
    method: req.method,
    timestamp: new Date().toISOString()
  });
}

