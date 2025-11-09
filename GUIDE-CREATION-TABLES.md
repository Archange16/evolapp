# Guide pour créer les tables dans Supabase

## Méthode 1 : Via Prisma Migrate (Recommandé)

### Étape 1 : Configurer la connexion Supabase

1. Allez sur [supabase.com et connectez-vous](https://supabase.com)
2. Créez un nouveau projet ou sélectionnez un projet existant
3. Allez dans **Settings** > **Database**
4. Dans la section **Connection string**, sélectionnez **URI**
5. Copiez la connection string (elle ressemble à : `postgresql://postgres:[YOUR-PASSWORD]@db.xxxxx.supabase.co:5432/postgres`)

### Étape 2 : Créer le fichier .env

Créez un fichier `.env` à la racine de votre projet avec le contenu suivant :

```env
DATABASE_URL="postgresql://postgres:[VOTRE-MOT-DE-PASSE]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

⚠️ **Important** : Remplacez `[VOTRE-MOT-DE-PASSE]` par le mot de passe de votre base de données Supabase et `[PROJECT-REF]` par la référence de votre projet.

💡 **Astuce** : Si votre mot de passe contient des caractères spéciaux, vous devez les encoder en URL. Par exemple, `@` devient `%40`.

### Étape 3 : Générer les tables

Une fois le fichier `.env` configuré, exécutez :

```bash
npm run prisma:migrate
```

Cette commande va :
- Créer un fichier de migration
- Appliquer la migration à votre base Supabase
- Créer toutes les tables automatiquement

---

## Méthode 2 : Via l'éditeur SQL de Supabase (Alternative)

Si vous préférez créer les tables manuellement :

### Étape 1 : Ouvrir l'éditeur SQL

1. Allez sur votre projet Supabase
2. Cliquez sur **SQL Editor** dans le menu de gauche
3. Cliquez sur **New query**

### Étape 2 : Exécuter le script SQL

1. Ouvrez le fichier `prisma/migrations/create-tables.sql` dans votre projet
2. Copiez tout le contenu
3. Collez-le dans l'éditeur SQL de Supabase
4. Cliquez sur **Run** ou appuyez sur `Ctrl+Enter` (Windows) / `Cmd+Enter` (Mac)

Les tables seront créées immédiatement !

---

## Vérification

Pour vérifier que les tables ont été créées :

### Via Supabase Dashboard

1. Allez dans **Table Editor** dans le menu de gauche
2. Vous devriez voir les 4 tables :
   - `contact_accueil`
   - `contact`
   - `devis`
   - `newsletter`

### Via Prisma Studio

Exécutez dans votre terminal :

```bash
npm run prisma:studio
```

Cela ouvrira une interface web sur `http://localhost:5555` où vous pourrez voir et gérer vos données.

---

## Structure des tables créées

### 📋 contact_accueil
- `id` (UUID) - Identifiant unique
- `first_name` (String) - Prénom
- `phone` (String) - Téléphone
- `email` (String) - Email
- `created_at` (DateTime) - Date de création

### 📋 contact
- `id` (UUID) - Identifiant unique
- `name` (String) - Nom complet
- `email` (String) - Email
- `phone` (String) - Téléphone
- `subject` (String, nullable) - Sujet
- `message` (String) - Message
- `created_at` (DateTime) - Date de création

### 📋 devis
- `id` (UUID) - Identifiant unique
- `first_name` (String) - Prénom
- `last_name` (String) - Nom
- `email` (String) - Email
- `phone` (String) - Téléphone
- `company` (String, nullable) - Entreprise
- `website` (String, nullable) - Site web
- `services` (String[]) - Liste des services demandés
- `message` (String) - Message
- `created_at` (DateTime) - Date de création

### 📋 newsletter
- `id` (UUID) - Identifiant unique
- `email` (String, unique) - Email (unique)
- `created_at` (DateTime) - Date de création

---

## Problèmes courants

### Erreur : "Environment variable not found: DATABASE_URL"

➡️ Vérifiez que le fichier `.env` existe à la racine du projet et contient `DATABASE_URL`

### Erreur : "Connection refused" ou "Authentication failed"

➡️ Vérifiez que :
- Votre mot de passe est correct
- Les caractères spéciaux dans le mot de passe sont encodés en URL
- Votre projet Supabase est actif

### Erreur : "Table already exists"

➡️ Les tables existent déjà. C'est normal si vous avez déjà exécuté le script. Vous pouvez ignorer cette erreur ou supprimer les tables existantes si vous voulez recommencer.

---

## Prochaines étapes

Une fois les tables créées :

1. ✅ Testez vos formulaires - Les données seront automatiquement sauvegardées
2. ✅ Visualisez les données avec Prisma Studio : `npm run prisma:studio`
3. ✅ Consultez les données dans Supabase Dashboard > Table Editor

