# 🚀 CRÉER LES TABLES MAINTENANT - Guide simple

## ⚡ Méthode la plus simple (2 minutes)

### 📝 Étape 1 : Ouvrir Supabase
1. Allez sur https://supabase.com
2. Connectez-vous
3. Sélectionnez votre projet

### 📝 Étape 2 : Ouvrir SQL Editor
1. Dans le menu de gauche, cliquez sur **"SQL Editor"**
2. Cliquez sur **"New query"** (ou le bouton **"+"**)

### 📝 Étape 3 : Copier le script
1. Ouvrez le fichier : `prisma/migrations/create-tables.sql`
2. **Sélectionnez TOUT** (Ctrl+A)
3. **Copiez** (Ctrl+C)

### 📝 Étape 4 : Coller et exécuter
1. **Collez** dans l'éditeur SQL de Supabase (Ctrl+V)
2. Cliquez sur **"Run"** (ou Ctrl+Enter)

### ✅ Vérification
- Allez dans **"Table Editor"** (menu de gauche)
- Vous devriez voir 4 tables :
  - ✅ contact_accueil
  - ✅ contact
  - ✅ devis
  - ✅ newsletter

---

## 📋 Script SQL complet (à copier)

Si vous préférez, voici le script complet à copier directement :

```sql
-- Table pour les contacts depuis la page d'accueil
CREATE TABLE IF NOT EXISTS "contact_accueil" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Table pour les contacts depuis la page contact complète
CREATE TABLE IF NOT EXISTS "contact" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "subject" TEXT,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Table pour les demandes de devis
CREATE TABLE IF NOT EXISTS "devis" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "company" TEXT,
    "website" TEXT,
    "services" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Table pour les inscriptions à la newsletter
CREATE TABLE IF NOT EXISTS "newsletter" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS "newsletter_email_idx" ON "newsletter"("email");
CREATE INDEX IF NOT EXISTS "contact_accueil_created_at_idx" ON "contact_accueil"("created_at");
CREATE INDEX IF NOT EXISTS "contact_created_at_idx" ON "contact"("created_at");
CREATE INDEX IF NOT EXISTS "devis_created_at_idx" ON "devis"("created_at");
CREATE INDEX IF NOT EXISTS "newsletter_created_at_idx" ON "newsletter"("created_at");
```

---

## 🆘 Si ça ne marche pas

1. **Vérifiez que vous êtes dans le bon projet Supabase**
2. **Vérifiez que le projet est actif** (pas en pause)
3. **Essayez de copier-coller le script ligne par ligne** si tout le script ne fonctionne pas
4. **Consultez** le fichier `INSTRUCTIONS-CREATION-TABLES.md` pour plus de détails

---

## ✅ Une fois les tables créées

Vos formulaires vont automatiquement sauvegarder les données dans ces tables !

Pour visualiser les données :
- Dans Supabase : **Table Editor**
- Ou avec Prisma Studio : `npm run prisma:studio`

