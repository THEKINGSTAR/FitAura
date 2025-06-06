const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('fitaura123', 10);

  const user = await prisma.user.create({
    data: {
      email: 'khaled@fitaura.com',
      name: 'Khaled Mohamed Fathalla',
      password: hashedPassword,
      image: null, // optional
    },
  });

  console.log('✅ User created:', user.email);
}

main()
  .catch((e) => {
    console.error('❌ Error inserting user:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());