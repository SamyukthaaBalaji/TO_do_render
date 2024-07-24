const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgresql://postgres:UnkrkjgCrNrMukufpPuXqOFruexSxups@postgres.railway.internal:5432/railway",
});

module.exports = pool;
