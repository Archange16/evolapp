# 🔧 Résoudre l'erreur "Can't reach database server"

## ❌ Erreur actuelle
```
Can't reach database server at `aws-1-eu-west-1.pooler.supabase.com:5432`
```

## 🔍 Causes possibles

### 1. Projet Supabase en pause
Votre projet Supabase peut être en pause (mode "sleeping").

### 2. Utilisation du pooler
Vous utilisez l'URL du pooler qui peut avoir des restrictions pour les migrations.

### 3. URL incorrecte
L'URL de connexion n'est pas correcte.

---

## ✅ Solution 1 : Utiliser l'URL directe (sans pooler)

### Étape 1 : Récupérer l'URL directe
1. Allez sur [supabase.com](https://supabase.com)
2. Sélectionnez votre projet
3. Allez dans **Settings** > **Database**
4. Dans **Connection string**, sélectionnez **URI** (pas "Session mode" ou "Transaction mode")
5. **Important** : Utilisez l'URL qui commence par `db.` et non `aws-1-eu-west-1.pooler.`

L'URL devrait ressembler à :
```
postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
```

**Pas celle-ci** (pooler) :
```
postgresql://postgres:[PASSWORD]@aws-1-eu-west-1.pooler.supabase.com:5432/postgres
```

### Étape 2 : Mettre à jour le fichier .env

Ouvrez votre fichier `.env` et remplacez `DATABASE_URL` :

```env
DATABASE_URL="postgresql://postgres:[MOT-DE-PASSE]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

⚠️ **Important** : 
- Remplacez `[MOT-DE-PASSE]` par votre mot de passe (encodé si nécessaire)
- Remplacez `[PROJECT-REF]` par la référence de votre projet
- Utilisez `db.` et non `aws-1-eu-west-1.pooler.`

### Étape 3 : Réessayer

```bash
npm run prisma:migrate
```

---

## ✅ Solution 2 : Vérifier que le projet est actif

### Étape 1 : Vérifier le statut du projet
1. Allez sur votre projet Supabase
2. Vérifiez qu'il n'est pas en pause
3. Si le projet est en pause, cliquez sur **"Restore"** ou **"Resume"**

### Étape 2 : Attendre quelques secondes
Parfois, il faut attendre 10-30 secondes après avoir réactivé le projet.

---

## ✅ Solution 3 : Créer les tables via SQL (RECOMMANDÉ - Le plus fiable)

Au lieu de lutter avec Prisma Migrate, créez les tables directement :

### Étape 1 : Ouvrir l'éditeur SQL
1. Allez sur votre projet Supabase
2. Cliquez sur **SQL Editor** dans le menu de gauche
3. Cliquez sur **New query**

### Étape 2 : Exécuter le script
1. Ouvrez le fichier : `prisma/migrations/create-tables.sql`
2. **Sélectionnez TOUT** (Ctrl+A)
3. **Copiez** (Ctrl+C)
4. **Collez** dans l'éditeur SQL de Supabase (Ctrl+V)
5. Cliquez sur **Run** (ou Ctrl+Enter)

✅ **C'est fait !** Les tables sont créées sans problème de connexion.

---

## 🔍 Vérifier que votre DATABASE_URL est correcte

### Format correct
```
postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
```

### Format incorrect (pooler - peut causer des problèmes)
```
postgresql://postgres:[PASSWORD]@aws-1-eu-west-1.pooler.supabase.com:5432/postgres
```

### Où trouver la bonne URL ?
1. Supabase Dashboard
2. **Settings** > **Database**
3. **Connection string** > **URI**
4. Copiez l'URL qui commence par `db.` (pas `aws-1-eu-west-1.pooler.`)

---

## 🆘 Si rien ne fonctionne

1. **Vérifiez que votre projet Supabase est actif** (pas en pause)
2. **Utilisez l'URL directe** (`db.`) et non le pooler
3. **Vérifiez votre mot de passe** (encodez les caractères spéciaux)
4. **Utilisez la Solution 3** (SQL direct) - c'est la plus fiable et la plus simple

---

## 💡 Pourquoi utiliser SQL direct ?

✅ **Avantages :**
- Pas de problème de connexion
- Plus rapide (2 minutes)
- Plus simple
- Fonctionne toujours

❌ **Inconvénients de Prisma Migrate :**
- Problèmes de connexion fréquents
- Nécessite une configuration précise
- Plus complexe

---

## 📋 Après avoir créé les tables

Une fois les tables créées (via SQL ou Prisma), vous pouvez :

1. **Vérifier dans Supabase** : Table Editor → Vous devriez voir les 4 tables
2. **Tester avec Prisma Studio** :
   ```bash
   npm run prisma:studio
   ```
3. **Tester vos formulaires** : Les données seront automatiquement sauvegardées

