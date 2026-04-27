
const { neon, neonConfig } = require("@neondatabase/serverless");

// Workaround for some environments
neonConfig.fetchConnectionCache = true;

const url = "postgresql://neondb_owner:npg_V7t8XgSUpInq@ep-lucky-smoke-a1m4w5y6-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require";

async function test() {
  console.log("Testing connection to:", url);
  try {
    const sql = neon(url);
    const result = await sql`SELECT 1 as connected`;
    console.log("Result:", result);
  } catch (err) {
    console.error("Connection failed:", err.message);
    if (err.cause) {
      console.error("Cause:", err.cause.message || err.cause);
    }
  }
}

test();
