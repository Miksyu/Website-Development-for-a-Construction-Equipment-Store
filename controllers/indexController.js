const menuRepository = require("../repositories/menuRepository");
const productRepository = require("../repositories/productRepository");
const { bull } = require('../services/bullService');
exports.index = async function (req, res, next) {
  const menu = await menuRepository.getAll();
  const popularGoods = await productRepository.getPopular();

  res.render('index', {
    title: 'Technomart. Homepage',
    menu,
    popularGoods,
    user: req.session.user
  })
}
