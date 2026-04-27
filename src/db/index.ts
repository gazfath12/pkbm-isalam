import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Konfigurasi tambahan untuk stabilitas koneksi di beberapa environment
neonConfig.fetchConnectionCache = true;

const databaseUrl = process.env.DATABASE_URL || "";

if (!databaseUrl) {
  console.warn("⚠️ DATABASE_URL tidak ditemukan di environment variables.");
}

// Gunakan koneksi HTTP yang lebih stabil untuk serverless
const sql = neon(databaseUrl);

export const db = drizzle(sql, { schema });
