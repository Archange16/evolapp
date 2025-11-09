# 🚀 Créer les tables rapidement

## ⚡ Méthode rapide : Via SQL (2 minutes)

### 1. Ouvrez Supabase
- Allez sur [supabase.com](https://supabase.com)
- Connectez-vous et sélectionnez votre projet

### 2. Ouvrez l'éditeur SQL
- Cliquez sur **SQL Editor** dans le menu de gauche
- Cliquez sur **New query**

### 3. Copiez-collez le script
- Ouvrez le fichier : `prisma/migrations/create-tables.sql`
- **Copiez tout le contenu**
- **Collez-le** dans l'éditeur SQL de Supabase
- Cliquez sur **Run** (ou `Ctrl+Enter` / `Cmd+Enter`)

✅ **C'est fait !** Les 4 tables sont créées.

---

## 🔧 Méthode Prisma (Recommandée pour la suite)

Si vous voulez utiliser Prisma Migrate (meilleur pour les mises à jour futures) :

### 1. Configurez DATABASE_URL

Créez un fichier `.env` à la racine avec :

```env
DATABASE_URL="postgresql://postgres:[MOT-DE-PASSE]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

**Où trouver cette URL ?**
- Supabase > Settings > Database > Connection string > URI

### 2. Créez les tables

```bash
npm run prisma:migrate
```

---

## ✅ Vérification

### Dans Supabase
- Allez dans **Table Editor**
- Vous devriez voir 4 tables :
  - ✅ `contact_accueil`
  - ✅ `contact`
  - ✅ `devis`
  - ✅ `newsletter`

### Avec Prisma Studio
```bash
npm run prisma:studio
```
Ouvre une interface web sur `http://localhost:5555`

---

## 📋 Tables créées

| Table | Description |
|------|-------------|
| `contact_accueil` | Formulaire de contact page d'accueil |
| `contact` | Formulaire de contact complet |
| `devis` | Demandes de devis |
| `newsletter` | Inscriptions newsletter |

---

## 🆘 Problème ?

Si vous avez une erreur, consultez le fichier `GUIDE-CREATION-TABLES.md` pour plus de détails.

