# 🔐 Guide de la page d'administration

## 📋 Accès à l'administration

### URL
```
https://www.evolapp.com/admin/login
```

### Identifiants disponibles

**Compte Admin** :
- **Nom d'utilisateur** : `admin`
- **Mot de passe** : `admin123`

**Compte Demo** (pour les démonstrations) :
- **Nom d'utilisateur** : `demo`
- **Mot de passe** : `demo123`

⚠️ **IMPORTANT** : Changez les identifiants admin en production !

---

## 🔧 Configuration des identifiants

### Méthode 1 : Variables d'environnement (Recommandé)

Ajoutez dans votre fichier `.env` ou dans les variables d'environnement de votre plateforme de déploiement :

```env
ADMIN_USERNAME=votre_nom_utilisateur
ADMIN_PASSWORD=votre_mot_de_passe_securise
```

### Méthode 2 : Modifier directement le code

Modifiez le fichier `pages/api/auth/login.js` :

```javascript
const ADMIN_USERNAME = 'votre_nom_utilisateur';
const ADMIN_PASSWORD = 'votre_mot_de_passe_securise';
```

---

## 📊 Fonctionnalités

### 1. Page de login
- Authentification sécurisée avec session
- Redirection automatique si déjà connecté
- Gestion des erreurs

### 2. Tableau de bord admin
Affiche tous les formulaires soumis :

#### Onglet "Contacts Accueil"
- Prénom
- Email
- Téléphone
- Date de soumission

#### Onglet "Contacts"
- Nom complet
- Email
- Téléphone
- Sujet
- Message
- Date de soumission

#### Onglet "Devis"
- Nom et prénom
- Email
- Téléphone
- Entreprise
- Site web
- Services demandés
- Message
- Date de soumission

#### Onglet "Newsletter"
- Email
- Date d'inscription

---

## 🔒 Sécurité

### Protection des routes
- Toutes les routes `/api/admin/*` sont protégées
- Vérification de session via cookies HttpOnly
- Redirection automatique vers login si non authentifié

### Session
- Durée : 24 heures
- Cookie sécurisé (HttpOnly, Secure, SameSite)
- Déconnexion manuelle disponible

---

## 🛠️ Développement

### Tester en local

1. **Démarrer le serveur** :
```bash
npm run dev
```

2. **Accéder à l'admin** :
```
http://localhost:3000/admin/login
```

3. **Se connecter** avec les identifiants par défaut

### Vérifier les données

Les données sont récupérées depuis Supabase via Prisma. Assurez-vous que :
- Les tables existent dans Supabase
- `DATABASE_URL` est configuré
- Prisma Client est généré

---

## 📝 Structure des fichiers

```
app/
  admin/
    login/
      page.jsx          # Page de connexion
    page.jsx             # Tableau de bord admin

pages/
  api/
    auth/
      login.js          # API de connexion
      logout.js         # API de déconnexion
      check.js          # Vérification de session
    admin/
      contacts.js       # API contacts complets
      contacts-accueil.js # API contacts accueil
      devis.js          # API demandes de devis
      newsletter.js     # API newsletter

lib/
  auth.js               # Fonctions utilitaires d'authentification
```

---

## 🆘 Dépannage

### Erreur "Non autorisé"
- Vérifiez que vous êtes connecté
- Vérifiez que la session n'a pas expiré (24h)
- Reconnectez-vous

### Les données ne s'affichent pas
- Vérifiez que les tables existent dans Supabase
- Vérifiez que `DATABASE_URL` est configuré
- Vérifiez les logs du serveur pour les erreurs

### Impossible de se connecter
- Vérifiez les identifiants
- Vérifiez que les variables d'environnement sont correctes
- Vérifiez les logs du serveur

---

## ✅ Checklist de sécurité

- [ ] Identifiants changés en production
- [ ] Variables d'environnement configurées
- [ ] HTTPS activé (pour Secure cookies)
- [ ] Session expire après 24h
- [ ] Routes API protégées

---

## 🔄 Améliorations futures possibles

- Export des données en CSV/Excel
- Filtres et recherche
- Pagination pour les grandes listes
- Statistiques et graphiques
- Suppression de données
- Notifications en temps réel

