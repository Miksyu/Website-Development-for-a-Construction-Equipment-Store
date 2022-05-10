const pool = require("../db/db");
exports.getPopular = async function() {
  const popularGoods = await pool.query('SELECT * FROM products WHERE "isPopular" = true ORDER BY id ASC LIMIT 4');

  return popularGoods.rows;
};

exports.getByCriteria = async function(criteria) {
  const catalogGoods = await pool.query(
    'SELECT * FROM products WHERE old_price >= $3::integer  AND old_price <= $4::integer ORDER BY '
    + criteria.sort +
    ' LIMIT $1::integer OFFSET $2::integer',
    [
      criteria.perPage,
      criteria.perPage * (criteria.page - 1),
      criteria.minPrice,
      criteria.maxPrice
    ]
  )

  return catalogGoods.rows;
};

exports.getTotalCount = async function() {
  const count = await pool.query('SELECT COUNT(*) as num FROM products');
  return count.rows[0].num;
};

exports.getByIds = async function(ids) {
  const basketGoods = await pool.query('SELECT * FROM products WHERE id IN (' + ids.join() + ')');

  return basketGoods.rows;
}
