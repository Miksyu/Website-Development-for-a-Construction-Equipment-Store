const pool = require("../db/db");
exports.addAssigns = async function(orderId, productIds) {
  let assignSql = '';
  Object.keys(productIds).forEach(key => {
    if (productIds[Number(key) + 1]) {
      assignSql += '(' + orderId + ',' + productIds[key] + '),';
    } else {
      assignSql += '(' + orderId + ',' + productIds[key] + ')';
    }
  });

  try {
    await pool.query('INSERT INTO assign_order_products (order_id, product_id) VALUES ' + assignSql);
    return true;
  } catch {
    return false;
  }
};
