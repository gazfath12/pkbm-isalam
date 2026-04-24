const { neon } = require("@neondatabase/serverless");

const url = "postgresql://neondb_owner:npg_V7t8XgSUpInq@ep-lucky-smoke-a1m4w5y6-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require";
const sql = neon(url);

async function run() {
  try {
    console.log("Creating gallery table...");
    await sql`
      CREATE TABLE IF NOT EXISTS "gallery" (
        "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
        "image_url" text NOT NULL,
        "caption" text NOT NULL,
        "category" text NOT NULL,
        "alt" text,
        "created_at" timestamp DEFAULT now() NOT NULL
      );
    `;
    console.log("Success!");
  } catch (error) {
    console.error("Error details:", error);
  }
}

run();
