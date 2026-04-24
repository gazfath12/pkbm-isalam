const { neon } = require("@neondatabase/serverless");
require("dotenv").config();

async function run() {
  const sql = neon(process.env.DATABASE_URL);
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
    console.error("Error:", error);
  }
}

run();
