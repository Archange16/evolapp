// Script pour encoder un mot de passe en URL
// Utilisation: node scripts/encode-password.js "VotreMotDePasse"

const password = process.argv[2];

if (!password) {
  console.log('❌ Usage: node scripts/encode-password.js "VotreMotDePasse"');
  process.exit(1);
}

// Fonction simple pour encoder les caractères spéciaux
function encodePassword(pwd) {
  return encodeURIComponent(pwd);
}

const encoded = encodePassword(password);
console.log('\n📝 Mot de passe original:');
console.log(password);
console.log('\n✅ Mot de passe encodé (à utiliser dans DATABASE_URL):');
console.log(encoded);
console.log('\n📋 URL complète à mettre dans .env:');
console.log(`DATABASE_URL="postgresql://postgres:${encoded}@db.[PROJECT-REF].supabase.co:5432/postgres"`);
console.log('\n⚠️  N\'oubliez pas de remplacer [PROJECT-REF] par la référence de votre projet Supabase\n');

