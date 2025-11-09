// lib/auth.js - Fonction utilitaire pour vérifier l'authentification

export async function checkAuth() {
  try {
    const res = await fetch('/api/auth/check', {
      credentials: 'include',
    });
    const data = await res.json();
    return data.authenticated === true;
  } catch (error) {
    return false;
  }
}

export async function login(username, password) {
  try {
    // Normaliser les entrées (supprimer les espaces)
    const normalizedUsername = username ? username.trim() : '';
    const normalizedPassword = password ? password.trim() : '';

    if (!normalizedUsername || !normalizedPassword) {
      return { 
        success: false, 
        data: { message: 'Nom d\'utilisateur et mot de passe requis.' } 
      };
    }

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ 
        username: normalizedUsername, 
        password: normalizedPassword 
      }),
    });

    let data;
    try {
      data = await res.json();
    } catch (parseError) {
      // Si la réponse n'est pas du JSON valide
      return { 
        success: false, 
        data: { message: `Erreur serveur (${res.status}). Veuillez réessayer.` } 
      };
    }

    return { success: res.ok, data };
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    return { 
      success: false, 
      data: { message: 'Erreur de connexion. Vérifiez votre connexion internet.' } 
    };
  }
}

export async function logout() {
  try {
    const res = await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    return res.ok;
  } catch (error) {
    return false;
  }
}

