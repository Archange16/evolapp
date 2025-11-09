# 🚀 Guide de déploiement en production

## ⚠️ Problème : Erreur 405 en production

Si vous obtenez `405 Method Not Allowed` sur `https://www.evolapp.com/api/contact-accueil`, suivez ce guide.

---

## ✅ Checklist avant déploiement

### 1. Générer Prisma Client

**IMPORTANT** : Prisma Client doit être généré avant le build en production.

```bash
npm run prisma:generate
npm run build
```

Ou automatiquement avec `postinstall` (déjà configuré dans `package.json`).

### 2. Vérifier les variables d'environnement

Assurez-vous que ces variables sont configurées en production :

```env
DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
SMTP_USER="votre-email@gmail.com"  # Optionnel
SMTP_PASS="votre-mot-de-passe"      # Optionnel
RESEND_API_KEY="votre-clé"          # Optionnel
```

### 3. Vérifier que les tables existent

Les tables doivent être créées dans Supabase avant le déploiement :
- `contact_accueil`
- `contact`
- `devis`
- `newsletter`

Voir `CREER-TABLES-MAINTENANT.md` pour créer les tables.

---

## 🔧 Configuration par plateforme

### Vercel

1. **Variables d'environnement** :
   - Allez dans **Settings** > **Environment Variables**
   - Ajoutez `DATABASE_URL` et les autres variables
   - Sélectionnez **Production**, **Preview**, et **Development**

2. **Build Command** :
   - Vercel détecte automatiquement Next.js
   - Le script `postinstall` génère Prisma Client automatiquement

3. **Redeploy** :
   - Après avoir ajouté les variables, faites un **Redeploy**

### Netlify

1. **Variables d'environnement** :
   - Allez dans **Site settings** > **Environment variables**
   - Ajoutez toutes les variables nécessaires

2. **Build Command** :
   ```bash
   npm run build
   ```
   (Le `postinstall` génère Prisma automatiquement)

3. **Publish directory** :
   ```
   .next
   ```

### Autre serveur (VPS, etc.)

1. **Sur le serveur** :
   ```bash
   npm install
   npm run prisma:generate
   npm run build
   npm start
   ```

2. **Variables d'environnement** :
   - Créez un fichier `.env.production` sur le serveur
   - Ou configurez-les dans votre gestionnaire de processus (PM2, systemd, etc.)

---

## 🧪 Test après déploiement

### 1. Tester la route de test

Accédez à : `https://www.evolapp.com/api/test`

Vous devriez voir :
```json
{
  "message": "API route fonctionne",
  "method": "GET",
  "timestamp": "..."
}
```

### 2. Tester avec curl

```bash
curl -X POST https://www.evolapp.com/api/contact-accueil \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","phone":"0612345678","email":"test@example.com"}'
```

Vous devriez recevoir une réponse JSON, pas une erreur 405.

### 3. Vérifier les logs

Consultez les logs de votre serveur pour voir :
- Si les requêtes arrivent
- Si Prisma peut se connecter
- Les erreurs éventuelles

---

## 🐛 Dépannage

### Erreur 405 persiste

1. **Vérifiez que les fichiers sont déployés** :
   - Les fichiers `pages/api/*.js` doivent être sur le serveur
   - Vérifiez dans votre plateforme de déploiement

2. **Vérifiez le build** :
   ```bash
   npm run build
   ```
   - Les routes API doivent apparaître dans la sortie

3. **Vérifiez Prisma** :
   ```bash
   npm run prisma:generate
   ```
   - Le client Prisma doit être généré

### Erreur de connexion à la base de données

1. **Vérifiez `DATABASE_URL`** :
   - Format correct
   - Mot de passe encodé si nécessaire
   - URL directe (`db.`) et non pooler

2. **Vérifiez que les tables existent** :
   - Allez dans Supabase > Table Editor
   - Les 4 tables doivent être visibles

### Erreur "Module not found: @prisma/client"

1. **Générer Prisma Client** :
   ```bash
   npm run prisma:generate
   ```

2. **Vérifier l'installation** :
   ```bash
   npm install
   ```

---

## ✅ Vérification finale

Après le déploiement, testez :

- [ ] `https://www.evolapp.com/api/test` fonctionne
- [ ] Le formulaire de contact fonctionne
- [ ] Les données sont sauvegardées dans Supabase
- [ ] Pas d'erreur 405 dans la console

---

## 📞 Support

Si le problème persiste :
1. Consultez les logs du serveur
2. Vérifiez que Prisma Client est généré
3. Vérifiez que `DATABASE_URL` est correct
4. Testez en local avec `npm run build && npm start`

