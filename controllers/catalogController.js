const pool = require("../db/db");
const menuRepository = require("../repositories/menuRepository");
const productService = require("../services/productService");
const productRepository = require("../repositories/productRepository");
exports.index = async function(req, res) {
  const menu = await menuRepository.getAll();

  const criteria = productService.getCriteria(req);

  const catalogGoods = await productRepository.getByCriteria(criteria);

  const pageNumbers = await productService.getPageNumbers(criteria);

  res.render('catalog', {
    title: 'Technomart. Catalog',
    menu,
    catalogGoods,
    pageNumbers,
    user: req.session.user
  })
};
