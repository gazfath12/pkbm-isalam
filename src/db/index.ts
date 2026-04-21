import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL || "";

if (!databaseUrl) {
  console.warn("⚠️ DATABASE_URL tidak ditemukan. Fitur database tidak akan berfungsi.");
}

// Inisialisasi hanya jika URL ada, jika tidak gunakan dummy untuk mencegah crash saat build
const sql = neon(databaseUrl || "postgres://localhost/dummy");
export const db = drizzle(sql, { schema });
