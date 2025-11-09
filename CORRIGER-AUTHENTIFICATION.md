# 🔧 Corriger l'erreur d'authentification Prisma

## ❌ Erreur actuelle
```
Authentication failed against database server
the provided database credentials for `postgres` are not valid.
```

## 🔍 Causes possibles

### 1. Mot de passe incorrect
Le mot de passe dans votre `DATABASE_URL` n'est pas correct.

### 2. Caractères spéciaux non encodés
Si votre mot de passe contient des caractères spéciaux (`@`, `#`, `%`, `&`, etc.), ils doivent être **encodés en URL**.

### 3. URL de connexion incorrecte
L'URL de connexion n'est pas au bon format.

---

## ✅ Solution 1 : Vérifier et corriger le mot de passe

### Étape 1 : Récupérer le bon mot de passe
1. Allez sur [supabase.com](https://supabase.com)
2. Sélectionnez votre projet
3. Allez dans **Settings** > **Database**
4. Si vous ne connaissez pas le mot de passe, vous pouvez le **réinitialiser** :
   - Cliquez sur **Reset database password**
   - Copiez le nouveau mot de passe

### Étape 2 : Encoder les caractères spéciaux

Si votre mot de passe contient des caractères spéciaux, encodez-les :

| Caractère | Encodage URL |
|-----------|--------------|
| `@` | `%40` |
| `#` | `%23` |
| `%` | `%25` |
| `&` | `%26` |
| `+` | `%2B` |
| `=` | `%3D` |
| `?` | `%3F` |
| `/` | `%2F` |
| `:` | `%3A` |
| ` ` (espace) | `%20` |

**Exemple :**
- Mot de passe : `Mon@Mot#De%Passe`
- Encodé : `Mon%40Mot%23De%25Passe`

### Étape 3 : Mettre à jour le fichier .env

Ouvrez votre fichier `.env` et vérifiez que `DATABASE_URL` est au bon format :

```env
DATABASE_URL="postgresql://postgres:[MOT-DE-PASSE-ENCODE]@db.[PROJECT-REF].supabase.co:5432/postgres"
```

**Important :**
- Remplacez `[MOT-DE-PASSE-ENCODE]` par votre mot de passe encodé
- Remplacez `[PROJECT-REF]` par la référence de votre projet Supabase

---

## ✅ Solution 2 : Utiliser l'URL de connexion directe (sans pooler)

Au lieu d'utiliser le pooler, utilisez la connexion directe :

1. Dans Supabase, allez dans **Settings** > **Database**
2. Dans **Connection string**, sélectionnez **URI** (pas "Session mode" ou "Transaction mode")
3. Copiez l'URL qui ressemble à :
   ```
   postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
   ```
4. Collez-la dans votre `.env`

---

## ✅ Solution 3 : Créer les tables via SQL (RECOMMANDÉ - Plus simple)

Au lieu d'utiliser Prisma Migrate, créez les tables directement dans Supabase :

### Étape 1 : Ouvrir l'éditeur SQL
1. Allez sur votre projet Supabase
2. Cliquez sur **SQL Editor** dans le menu de gauche
3. Cliquez sur **New query**

### Étape 2 : Exécuter le script
1. Ouvrez le fichier : `prisma/migrations/create-tables.sql`
2. **Copiez tout le contenu** (Ctrl+A, Ctrl+C)
3. **Collez** dans l'éditeur SQL de Supabase (Ctrl+V)
4. Cliquez sur **Run** (ou Ctrl+Enter)

✅ **C'est fait !** Les tables sont créées sans problème d'authentification.

---

## 🔍 Vérifier que ça fonctionne

### Méthode 1 : Dans Supabase
- Allez dans **Table Editor**
- Vous devriez voir les 4 tables

### Méthode 2 : Avec Prisma Studio
```bash
npm run prisma:studio
```

Si Prisma Studio se connecte, c'est que votre `DATABASE_URL` est correcte.

---

## 🆘 Si rien ne fonctionne

1. **Vérifiez que votre projet Supabase est actif** (pas en pause)
2. **Vérifiez que vous utilisez le bon projet** (vérifiez le nom du projet)
3. **Réinitialisez le mot de passe** de la base de données dans Supabase
4. **Utilisez la Solution 3** (SQL direct) - c'est la plus fiable

---

## 💡 Astuce

Pour encoder rapidement votre mot de passe en URL, vous pouvez utiliser ce site :
- https://www.urlencoder.org/

Ou en ligne de commande PowerShell :
```powershell
[System.Web.HttpUtility]::UrlEncode("VotreMotDePasse")
```

