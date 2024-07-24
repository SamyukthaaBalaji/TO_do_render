const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgresql://postgres:UnkrkjgCrNrMukufpPuXqOFruexSxups@roundhouse.proxy.rlwy.net:21906/railway",
});

module.exports = pool;
