# 📋 Instructions pour créer les tables dans Supabase

## ⚠️ IMPORTANT : Choisissez UNE méthode

---

## 🎯 Méthode 1 : Via l'éditeur SQL de Supabase (RECOMMANDÉ - Le plus simple)

### Étape 1 : Ouvrir Supabase
1. Allez sur [supabase.com](https://supabase.com)
2. Connectez-vous et sélectionnez votre projet

### Étape 2 : Ouvrir l'éditeur SQL
1. Dans le menu de gauche, cliquez sur **SQL Editor**
2. Cliquez sur **New query** (ou le bouton "+")

### Étape 3 : Copier le script
1. Ouvrez le fichier : `prisma/migrations/create-tables.sql`
2. **Sélectionnez TOUT le contenu** (Ctrl+A)
3. **Copiez** (Ctrl+C)

### Étape 4 : Coller et exécuter
1. **Collez** le script dans l'éditeur SQL de Supabase (Ctrl+V)
2. Cliquez sur le bouton **Run** (ou appuyez sur `Ctrl+Enter`)

### ✅ Vérification
- Allez dans **Table Editor** dans le menu de gauche
- Vous devriez voir 4 tables :
  - ✅ `contact_accueil`
  - ✅ `contact`
  - ✅ `devis`
  - ✅ `newsletter`

---

## 🔧 Méthode 2 : Via Prisma Migrate (Pour les développeurs)

### Étape 1 : Créer le fichier .env

Créez un fichier `.env` à la **racine** de votre projet avec ce contenu :

```env
DATABASE_URL="postgresql://postgres:[VOTRE-MOT-DE-PASSE]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

### Où trouver cette URL ?

1. Allez sur votre projet Supabase
2. Cliquez sur **Settings** (⚙️) dans le menu de gauche
3. Cliquez sur **Database**
4. Descendez jusqu'à **Connection string**
5. Sélectionnez **URI**
6. **Copiez** l'URL complète
7. **Collez-la** dans votre fichier `.env` en remplaçant `[YOUR-PASSWORD]` par votre mot de passe

⚠️ **Attention** : Si votre mot de passe contient des caractères spéciaux (`@`, `#`, `%`, etc.), vous devez les encoder en URL :
- `@` devient `%40`
- `#` devient `%23`
- `%` devient `%25`
- etc.

### Étape 2 : Créer les tables

Ouvrez un terminal dans le dossier de votre projet et exécutez :

```bash
npm run prisma:migrate
```

Prisma va vous demander un nom pour la migration, tapez simplement : `init`

### ✅ Vérification

```bash
npm run prisma:studio
```

Cela ouvrira une interface web où vous pourrez voir vos tables.

---

## 🚀 Méthode 3 : Via le script Node.js

### Étape 1 : Créer le fichier .env

Même chose que la Méthode 2, créez un fichier `.env` avec `DATABASE_URL`

### Étape 2 : Exécuter le script

```bash
npm run create-tables
```

---

## 🆘 Problèmes courants

### ❌ "Environment variable not found: DATABASE_URL"
➡️ **Solution** : Créez le fichier `.env` à la racine du projet avec `DATABASE_URL`

### ❌ "Connection refused" ou "Authentication failed"
➡️ **Solutions** :
- Vérifiez que votre mot de passe est correct
- Encodez les caractères spéciaux dans le mot de passe (voir ci-dessus)
- Vérifiez que votre projet Supabase est actif

### ❌ "Table already exists"
➡️ **C'est normal !** Les tables existent déjà. Vous pouvez ignorer cette erreur.

### ❌ "Cannot find module '@prisma/client'"
➡️ **Solution** : Exécutez `npm install`

---

## ✅ Vérifier que les tables sont créées

### Dans Supabase Dashboard
1. Allez dans **Table Editor**
2. Vous devriez voir les 4 tables listées

### Avec Prisma Studio
```bash
npm run prisma:studio
```
Ouvre `http://localhost:5555`

---

## 📞 Besoin d'aide ?

Si aucune méthode ne fonctionne, utilisez la **Méthode 1** (SQL Editor) - c'est la plus simple et la plus fiable !

