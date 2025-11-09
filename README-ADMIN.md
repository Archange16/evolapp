# 🔐 Page d'Administration - Guide rapide

## 🚀 Accès

**URL** : `https://www.evolapp.com/admin/login`

**Identifiants disponibles** :
- **Admin** : `admin` / `admin123`
- **Demo** : `demo` / `demo123`

⚠️ **Changez les identifiants admin en production !**

---

## 📋 Fonctionnalités

### ✅ Page de connexion
- Authentification sécurisée
- Session de 24 heures
- Redirection automatique si déjà connecté

### ✅ Tableau de bord
Affiche tous les formulaires soumis dans 4 onglets :

1. **Contacts Accueil** - Formulaires depuis la page d'accueil
2. **Contacts** - Formulaires complets de contact
3. **Devis** - Demandes de devis
4. **Newsletter** - Inscriptions à la newsletter

Chaque onglet affiche :
- Toutes les données du formulaire
- Date et heure de soumission
- Compteur du nombre d'entrées

---

## 🔧 Configuration

### Changer les identifiants

**Méthode 1 : Variables d'environnement (Recommandé)**

Ajoutez dans `.env` ou dans votre plateforme de déploiement :

```env
ADMIN_USERNAME=votre_username
ADMIN_PASSWORD=votre_password_securise
```

**Méthode 2 : Modifier le code**

Modifiez `pages/api/auth/login.js` ligne 12-13.

---

## 🧪 Tester en local

1. **Démarrer le serveur** :
```bash
npm run dev
```

2. **Accéder à** :
```
http://localhost:3000/admin/login
```

3. **Se connecter** avec :
- Username : `admin`
- Password : `admin123`

---

## 🔒 Sécurité

- ✅ Routes API protégées
- ✅ Cookies HttpOnly
- ✅ Session expire après 24h
- ✅ Redirection automatique si non authentifié
- ⚠️ Changez les identifiants en production !

---

## 📁 Fichiers créés

```
app/admin/
  login/page.jsx       # Page de connexion
  page.jsx            # Tableau de bord admin

pages/api/
  auth/
    login.js          # API connexion
    logout.js         # API déconnexion
    check.js          # Vérification session
  admin/
    contacts.js       # API contacts complets
    contacts-accueil.js # API contacts accueil
    devis.js          # API devis
    newsletter.js     # API newsletter

lib/
  auth.js             # Fonctions utilitaires
```

---

## 🆘 Problèmes courants

### "Non autorisé" sur les routes admin
➡️ Reconnectez-vous, la session a peut-être expiré

### Les données ne s'affichent pas
➡️ Vérifiez que les tables existent dans Supabase et que `DATABASE_URL` est configuré

### Impossible de se connecter
➡️ Vérifiez les identifiants et les variables d'environnement

---

## ✅ Prêt à l'emploi !

La page d'administration est complètement fonctionnelle. Il vous suffit de :
1. Changer les identifiants en production
2. Accéder à `/admin/login`
3. Consulter tous vos formulaires !

