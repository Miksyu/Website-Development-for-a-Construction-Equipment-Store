const pool = require("../db/db");
exports.addUser = async function(name, email, password) {
  try {
    await pool.query('INSERT INTO users (name, email, password) VALUES($1::varchar, $2::varchar, $3::varchar )', [name, email, password]);
    return true;
  } catch {
    return false;
  }
};

exports.getUserForByAuth = async function(email, password) {
  const user = await pool.query('SELECT * FROM users WHERE email = $1::varchar and password = $2::varchar', [email, password]);

  if (user.rows.length) {
    return user.rows[0];
  }

  return false;
};
