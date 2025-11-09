-- Script SQL pour créer les tables dans Supabase
-- Vous pouvez exécuter ce script directement dans l'éditeur SQL de Supabase
-- Assurez-vous d'avoir l'extension uuid-ossp activée (généralement activée par défaut dans Supabase)

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

-- Création d'un index sur l'email de la newsletter pour améliorer les performances
CREATE INDEX IF NOT EXISTS "newsletter_email_idx" ON "newsletter"("email");

-- Création d'un index sur created_at pour toutes les tables (pour faciliter les requêtes par date)
CREATE INDEX IF NOT EXISTS "contact_accueil_created_at_idx" ON "contact_accueil"("created_at");
CREATE INDEX IF NOT EXISTS "contact_created_at_idx" ON "contact"("created_at");
CREATE INDEX IF NOT EXISTS "devis_created_at_idx" ON "devis"("created_at");
CREATE INDEX IF NOT EXISTS "newsletter_created_at_idx" ON "newsletter"("created_at");

