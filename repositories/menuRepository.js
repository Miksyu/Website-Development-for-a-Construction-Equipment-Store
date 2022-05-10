const pool = require("../db/db");
exports.getAll = async function() {
  const menu = await pool.query('SELECT * FROM navbar ORDER BY position ASC');

  return menu.rows;
};
