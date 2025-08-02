import 'dotenv/config';
import { initDatabase } from '../src/lib/database';
import { seedDatabase } from '../src/lib/seed';

async function main() {
  await initDatabase();
  await seedDatabase();
  console.log('Database initialized and seeded!');
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
