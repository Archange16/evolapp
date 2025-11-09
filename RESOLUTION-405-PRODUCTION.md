# 🔧 Résoudre l'erreur 405 en production

## ❌ Erreur actuelle
```
POST https://www.evolapp.com/api/contact-accueil 405 (Method Not Allowed)
```

## 🔍 Causes possibles

### 1. Routes API non déployées
Les fichiers dans `pages/api` ne sont pas correctement déployés.

### 2. Configuration du serveur
Le serveur de production bloque les méthodes POST.

### 3. Problème de build
Le build de production n'inclut pas les routes API.

---

## ✅ Solutions

### Solution 1 : Vérifier le déploiement

#### Si vous utilisez Vercel :
1. Allez sur votre dashboard Vercel
2. Vérifiez que les fichiers `pages/api/*.js` sont présents dans le déploiement
3. Vérifiez les logs de build pour voir si les routes API sont détectées

#### Si vous utilisez un autre hébergeur :
1. Vérifiez que le dossier `pages/api` est bien déployé
2. Vérifiez que les fichiers `.js` sont bien présents sur le serveur

### Solution 2 : Rebuild et redéployer

1. **Nettoyer le build** :
```bash
rm -rf .next
```

2. **Rebuild** :
```bash
npm run build
```

3. **Vérifier que les routes API sont dans le build** :
   - Dans la sortie du build, vous devriez voir :
   ```
   Route (pages)
   ┌ ƒ /api/contact-accueil
   ┌ ƒ /api/contact
   ┌ ƒ /api/devis
   └ ƒ /api/newsletter
   ```

4. **Redéployer**

### Solution 3 : Vérifier les variables d'environnement

Assurez-vous que les variables d'environnement sont configurées en production :
- `DATABASE_URL` - URL de connexion à Supabase
- `SMTP_USER` (optionnel)
- `SMTP_PASS` (optionnel)

### Solution 4 : Vérifier la configuration Next.js

Assurez-vous que `next.config.mjs` n'a pas de configuration qui bloque les routes API.

---

## 🔍 Diagnostic

### Test 1 : Vérifier que les routes existent

Essayez d'accéder directement à la route en GET (devrait retourner 405, pas 404) :
```
https://www.evolapp.com/api/contact-accueil
```

- Si vous obtenez **404** → Les routes ne sont pas déployées
- Si vous obtenez **405** → Les routes existent mais n'acceptent pas POST (problème de configuration)

### Test 2 : Vérifier les logs du serveur

Consultez les logs de votre serveur de production pour voir :
- Si les requêtes arrivent au serveur
- Quelle erreur est générée
- Si Prisma peut se connecter à la base de données

---

## 🛠️ Actions immédiates

### 1. Vérifier le build local

```bash
npm run build
```

Vérifiez que vous voyez les routes API dans la sortie.

### 2. Vérifier les fichiers déployés

Assurez-vous que ces fichiers sont présents sur le serveur :
- `pages/api/contact-accueil.js`
- `pages/api/contact.js`
- `pages/api/devis.js`
- `pages/api/newsletter.js`

### 3. Vérifier les variables d'environnement

Dans votre plateforme de déploiement, vérifiez que :
- `DATABASE_URL` est configuré
- Les variables sont correctement formatées (pas d'espaces, guillemets corrects)

---

## 💡 Solutions spécifiques par plateforme

### Vercel
1. Allez dans **Settings** > **Environment Variables**
2. Vérifiez que `DATABASE_URL` est configuré
3. **Redeploy** le projet

### Netlify
1. Allez dans **Site settings** > **Environment variables**
2. Vérifiez que `DATABASE_URL` est configuré
3. **Redeploy** le site

### Autre serveur
1. Vérifiez que les variables d'environnement sont dans `.env.production`
2. Redémarrez le serveur
3. Vérifiez les logs

---

## 🆘 Si rien ne fonctionne

1. **Vérifiez les logs du serveur** pour voir l'erreur exacte
2. **Testez en local** avec `npm run build && npm start` pour simuler la production
3. **Vérifiez que Prisma Client est généré** : `npm run prisma:generate`
4. **Vérifiez la connexion à la base de données** : Les tables existent-elles dans Supabase ?

---

## ✅ Checklist

- [ ] Les fichiers `pages/api/*.js` sont présents dans le déploiement
- [ ] Le build inclut les routes API (visible dans `npm run build`)
- [ ] `DATABASE_URL` est configuré en production
- [ ] Les tables existent dans Supabase
- [ ] Prisma Client est généré (`npm run prisma:generate`)
- [ ] Le serveur peut se connecter à Supabase
- [ ] Les logs du serveur ne montrent pas d'erreurs de connexion

