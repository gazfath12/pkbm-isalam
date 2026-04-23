import { db } from "./src/db";
import { sql } from "drizzle-orm";

async function check() {
  try {
    const res = await db.execute(sql`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`);
    console.log("Tables in database:", res.rows);
  } catch (err) {
    console.error("Error checking tables:", err);
  }
}

check();
