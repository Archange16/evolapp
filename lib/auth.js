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
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    return { success: res.ok, data };
  } catch (error) {
    return { success: false, error: error.message };
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

