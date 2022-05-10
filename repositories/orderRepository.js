const pool = require("../db/db");
exports.addOrder = async function (name, email, sum) {
  try {
    const order = await pool.query('INSERT INTO orders (name, email, sum) VALUES ($1, $2, $3) RETURNING id', [name, email, sum]);
    return order.rows[0].id;
  } catch {
    return false;
  }
};
