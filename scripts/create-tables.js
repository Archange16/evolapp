// Script pour créer les tables directement dans Supabase
// Utilisez ce script si vous avez déjà configuré DATABASE_URL dans .env

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createTables() {
  console.log('🚀 Création des tables dans Supabase...\n');

  try {
    // Vérifier la connexion
    await prisma.$connect();
    console.log('✅ Connexion à la base de données réussie\n');

    // Créer les tables via SQL brut
    const createTablesSQL = `
      -- Table contact_accueil
      CREATE TABLE IF NOT EXISTS "contact_accueil" (
          "id" UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
          "first_name" TEXT NOT NULL,
          "phone" TEXT NOT NULL,
          "email" TEXT NOT NULL,
          "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
      );

      -- Table contact
      CREATE TABLE IF NOT EXISTS "contact" (
          "id" UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
          "name" TEXT NOT NULL,
          "email" TEXT NOT NULL,
          "phone" TEXT NOT NULL,
          "subject" TEXT,
          "message" TEXT NOT NULL,
          "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
      );

      -- Table devis
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

      -- Table newsletter
      CREATE TABLE IF NOT EXISTS "newsletter" (
          "id" UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
          "email" TEXT NOT NULL UNIQUE,
          "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
      );

      -- Index
      CREATE INDEX IF NOT EXISTS "newsletter_email_idx" ON "newsletter"("email");
      CREATE INDEX IF NOT EXISTS "contact_accueil_created_at_idx" ON "contact_accueil"("created_at");
      CREATE INDEX IF NOT EXISTS "contact_created_at_idx" ON "contact"("created_at");
      CREATE INDEX IF NOT EXISTS "devis_created_at_idx" ON "devis"("created_at");
      CREATE INDEX IF NOT EXISTS "newsletter_created_at_idx" ON "newsletter"("created_at");
    `;

    // Exécuter les commandes SQL une par une
    const statements = createTablesSQL
      .split(';')
      .map(s => s.trim())
      .filter(s => s.length > 0 && !s.startsWith('--'));

    for (const statement of statements) {
      if (statement.trim()) {
        try {
          await prisma.$executeRawUnsafe(statement + ';');
          console.log(`✅ Table/Index créé(e)`);
        } catch (error) {
          if (error.message.includes('already exists')) {
            console.log(`ℹ️  Table/Index existe déjà`);
          } else {
            console.error(`❌ Erreur: ${error.message}`);
          }
        }
      }
    }

    console.log('\n✨ Toutes les tables ont été créées avec succès !');
    console.log('\n📋 Tables créées:');
    console.log('   - contact_accueil');
    console.log('   - contact');
    console.log('   - devis');
    console.log('   - newsletter');

  } catch (error) {
    console.error('\n❌ Erreur lors de la création des tables:');
    console.error(error.message);
    
    if (error.message.includes('DATABASE_URL')) {
      console.error('\n💡 Solution:');
      console.error('   1. Créez un fichier .env à la racine du projet');
      console.error('   2. Ajoutez: DATABASE_URL="postgresql://..."');
      console.error('   3. Récupérez l\'URL dans Supabase > Settings > Database');
    }
  } finally {
    await prisma.$disconnect();
  }
}

createTables();

