import { neon } from "@neondatabase/serverless";
import * as dotenv from "dotenv";

dotenv.config();

const databaseUrl = process.env.DATABASE_URL!;

async function setup() {
  console.log("Checking database connection...");
  const sql = neon(databaseUrl);
  
  try {
    // Check if table exists by querying it
    console.log("Checking if 'articles' table exists...");
    await sql`SELECT 1 FROM articles LIMIT 1`;
    console.log("✅ 'articles' table exists.");
  } catch (err: any) {
    if (err.code === "42P01") { // undefined_table
      console.log("❌ 'articles' table NOT found. Creating tables...");
      
      try {
        await sql`
          CREATE TABLE IF NOT EXISTS "articles" (
            "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
            "title" text NOT NULL,
            "slug" text NOT NULL UNIQUE,
            "excerpt" text NOT NULL,
            "content" text NOT NULL,
            "category" text NOT NULL,
            "image_url" text,
            "published" boolean DEFAULT true,
            "created_at" timestamp DEFAULT now() NOT NULL,
            "updated_at" timestamp DEFAULT now() NOT NULL
          );
        `;
        console.log("✅ 'articles' table created.");
        
        await sql`
          CREATE TABLE IF NOT EXISTS "materials" (
            "id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
            "title" text NOT NULL,
            "description" text,
            "type" text NOT NULL,
            "file_url" text NOT NULL,
            "image_url" text,
            "category" text NOT NULL,
            "created_at" timestamp DEFAULT now() NOT NULL
          );
        `;
        console.log("✅ 'materials' table created.");
      } catch (createErr) {
        console.error("Failed to create tables:", createErr);
      }
    } else {
      console.error("Database connection error:", err);
    }
  }
}

setup();
