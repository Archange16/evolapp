# Configuration Prisma avec Supabase

Ce guide vous explique comment configurer Prisma avec Supabase pour enregistrer tous les formulaires de votre site.

## 📋 Prérequis

1. Un compte Supabase (gratuit sur [supabase.com](https://supabase.com))
2. Node.js installé sur votre machine

## 🚀 Installation

### 1. Installer les dépendances

```bash
npm install
```

Cela installera automatiquement `@prisma/client` et `prisma` (en devDependencies).

### 2. Configurer Supabase

1. Créez un nouveau projet sur Supabase
2. Allez dans **Settings > Database**
3. Copiez la **Connection string** (URI)
4. Format : `postgresql://postgres:[VOTRE-MOT-DE-PASSE]@db.[PROJECT-REF].supabase.co:5432/postgres`

### 3. Configurer les variables d'environnement

Créez un fichier `.env` à la racine du projet :

```env
# Database Supabase
DATABASE_URL="postgresql://postgres:[VOTRE-MOT-DE-PASSE]@db.[PROJECT-REF].supabase.co:5432/postgres"

# Email (optionnel)
SMTP_USER="votre-email@gmail.com"
SMTP_PASS="votre-mot-de-passe-app"

# Resend (optionnel)
RESEND_API_KEY="votre-clé-resend"
```

⚠️ **Important** : Ajoutez `.env` à votre `.gitignore` pour ne pas commiter vos identifiants.

### 4. Générer le client Prisma

```bash
npm run prisma:generate
```

### 5. Créer les tables dans Supabase

```bash
npm run prisma:migrate
```

Cela créera automatiquement les tables suivantes dans votre base Supabase :
- `contact_accueil` - Contacts depuis la page d'accueil
- `contact` - Contacts depuis la page contact complète
- `devis` - Demandes de devis
- `newsletter` - Inscriptions à la newsletter

## 📊 Structure des tables

### ContactAccueil
- `id` (UUID)
- `first_name` (String)
- `phone` (String)
- `email` (String)
- `created_at` (DateTime)

### Contact
- `id` (UUID)
- `name` (String)
- `email` (String)
- `phone` (String)
- `subject` (String, nullable)
- `message` (String)
- `created_at` (DateTime)

### Devis
- `id` (UUID)
- `first_name` (String)
- `last_name` (String)
- `email` (String)
- `phone` (String)
- `company` (String, nullable)
- `website` (String, nullable)
- `services` (String[])
- `message` (String)
- `created_at` (DateTime)

### Newsletter
- `id` (UUID)
- `email` (String, unique)
- `created_at` (DateTime)

## 🔍 Visualiser les données

Pour visualiser et gérer vos données, utilisez Prisma Studio :

```bash
npm run prisma:studio
```

Cela ouvrira une interface web sur `http://localhost:5555` où vous pourrez voir et modifier vos données.

## 📝 API Routes

Toutes les routes API ont été mises à jour pour sauvegarder dans Supabase :

- `/api/contact-accueil` - Formulaire de contact page d'accueil
- `/api/contact` - Formulaire de contact complet
- `/api/devis` - Formulaire de demande de devis
- `/api/newsletter` - Inscription à la newsletter

## 🔄 Mises à jour du schéma

Si vous modifiez le schéma Prisma (`prisma/schema.prisma`), vous devez :

1. Créer une nouvelle migration :
```bash
npm run prisma:migrate
```

2. Régénérer le client :
```bash
npm run prisma:generate
```

## 🛠️ Commandes utiles

- `npm run prisma:generate` - Génère le client Prisma
- `npm run prisma:migrate` - Crée et applique les migrations
- `npm run prisma:studio` - Ouvre Prisma Studio pour visualiser les données

## ⚠️ Notes importantes

- Les emails sont toujours envoyés (si SMTP est configuré) en plus de la sauvegarde en BDD
- Les erreurs d'envoi d'email ne bloquent pas la sauvegarde en base de données
- La newsletter vérifie les doublons avant d'inscrire un email
- Toutes les dates sont automatiquement enregistrées avec `created_at`

## 🐛 Dépannage

### Erreur de connexion à la base de données

Vérifiez que :
- Votre `DATABASE_URL` est correcte
- Votre projet Supabase est actif
- Le mot de passe dans l'URL est correct (attention aux caractères spéciaux à encoder)

### Erreur "Table does not exist"

Exécutez la migration :
```bash
npm run prisma:migrate
```

### Erreur lors de la génération du client

Assurez-vous que Prisma est installé :
```bash
npm install prisma @prisma/client --save-dev
```

