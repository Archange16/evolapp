# 🔧 Dépannage : Erreur 401 lors de la connexion admin

## ❌ Erreur
```
POST https://www.evolapp.com/api/auth/login 401 (Unauthorized)
```

## 🔍 Causes possibles

### 1. Identifiants incorrects
Les identifiants saisis ne correspondent pas aux identifiants configurés.

**Identifiants par défaut** :
- **Admin** : `admin` / `admin123`
- **Demo** : `demo` / `demo123`

### 2. Variables d'environnement non configurées
Les variables `ADMIN_USERNAME` et `ADMIN_PASSWORD` ne sont pas définies en production, et les valeurs par défaut ne fonctionnent pas.

### 3. Espaces dans les identifiants
Des espaces invisibles dans les champs de saisie peuvent empêcher la connexion.

### 4. Problème de parsing du body
Le serveur ne reçoit pas correctement les données de la requête.

---

## ✅ Solutions

### Solution 1 : Vérifier les identifiants

1. **Utilisez les identifiants par défaut** :
   - Username : `demo`
   - Password : `demo123`

2. **Vérifiez qu'il n'y a pas d'espaces** :
   - Copiez-collez les identifiants directement
   - Ne mettez pas d'espaces avant ou après

3. **Testez avec le compte demo** :
   - Le compte demo (`demo` / `demo123`) fonctionne toujours
   - Il ne dépend pas des variables d'environnement

### Solution 2 : Configurer les variables d'environnement en production

#### Si vous utilisez Vercel :

1. Allez dans **Settings** > **Environment Variables**
2. Ajoutez ces variables :
   ```
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=votre-mot-de-passe-securise
   ```
3. Sélectionnez **Production**, **Preview**, et **Development**
4. **Redeploy** le projet

#### Si vous utilisez Netlify :

1. Allez dans **Site settings** > **Environment variables**
2. Ajoutez les variables `ADMIN_USERNAME` et `ADMIN_PASSWORD`
3. **Redeploy** le site

#### Si vous utilisez un autre serveur :

1. Ajoutez les variables dans votre fichier `.env.production` :
   ```env
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=votre-mot-de-passe-securise
   ```
2. Redémarrez le serveur

### Solution 3 : Vérifier les logs du serveur

Consultez les logs de votre serveur de production pour voir :
- Si la requête arrive au serveur
- Quelle erreur est générée
- Si les identifiants sont bien reçus

**Sur Vercel** :
1. Allez dans **Deployments**
2. Cliquez sur le dernier déploiement
3. Allez dans **Functions** > **View Function Logs**

### Solution 4 : Tester avec curl

Testez directement l'API avec curl pour isoler le problème :

```bash
curl -X POST https://www.evolapp.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"demo","password":"demo123"}' \
  -v
```

**Résultat attendu** :
- Status 200 avec un token
- Un cookie `admin_session` dans les headers

**Si vous obtenez 401** :
- Vérifiez que les identifiants sont corrects
- Vérifiez que le serveur reçoit bien les données

---

## 🧪 Tests de diagnostic

### Test 1 : Vérifier que l'API fonctionne

Accédez à : `https://www.evolapp.com/api/auth/login` avec une méthode GET

Vous devriez obtenir : `405 Method Not Allowed` (normal, car seule POST est acceptée)

Si vous obtenez **404** → L'API n'est pas déployée

### Test 2 : Vérifier les identifiants en local

1. Testez en local avec `npm run dev`
2. Accédez à `http://localhost:3000/admin/login`
3. Essayez de vous connecter avec `demo` / `demo123`

Si ça fonctionne en local mais pas en production → Problème de configuration en production

### Test 3 : Vérifier les variables d'environnement

Créez une route de test temporaire pour vérifier les variables :

```javascript
// pages/api/test-env.js
export default async function handler(req, res) {
  return res.json({
    adminUsername: process.env.ADMIN_USERNAME || 'admin (default)',
    hasAdminPassword: !!process.env.ADMIN_PASSWORD,
    nodeEnv: process.env.NODE_ENV
  });
}
```

Accédez à : `https://www.evolapp.com/api/test-env`

⚠️ **Supprimez cette route après le test pour des raisons de sécurité !**

---

## 🛠️ Actions immédiates

1. **Essayez le compte demo** :
   - Username : `demo`
   - Password : `demo123`
   - Ce compte fonctionne toujours, même sans variables d'environnement

2. **Vérifiez les logs du serveur** :
   - Consultez les logs de votre plateforme de déploiement
   - Cherchez les erreurs liées à `/api/auth/login`

3. **Vérifiez les variables d'environnement** :
   - Assurez-vous que `ADMIN_USERNAME` et `ADMIN_PASSWORD` sont configurées
   - Ou utilisez les valeurs par défaut (`admin` / `admin123`)

4. **Redéployez** :
   - Après avoir modifié les variables d'environnement, redéployez le projet

---

## 📝 Notes importantes

- Le compte **demo** (`demo` / `demo123`) fonctionne toujours, même sans configuration
- Les identifiants sont maintenant normalisés (espaces supprimés automatiquement)
- Les erreurs sont mieux gérées avec des messages plus clairs
- Les logs de débogage sont activés uniquement en développement

---

## 🆘 Si rien ne fonctionne

1. **Vérifiez les logs du serveur** pour voir l'erreur exacte
2. **Testez avec curl** pour isoler le problème frontend/backend
3. **Vérifiez que l'API est bien déployée** (testez avec GET pour obtenir 405)
4. **Contactez le support** de votre plateforme de déploiement avec les logs

