import database from "infra/database.js";
import { setHttpClientAndAgentOptions } from "next/dist/server/config";
import { Pool } from "pg";

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  user: process.env.POSTGRES_USER,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
});

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const versionPost = await pool.query("SHOW server_version;");
  const postgresV = versionPost.rows[0].server_version;

  const MaxConnections = await pool.query("SHOW max_connections");

  response.status(200).json({
    updated_at: updatedAt,
    postgres_version: postgresV,
    max_connections: MaxConnections,
  });
}

export default status;
