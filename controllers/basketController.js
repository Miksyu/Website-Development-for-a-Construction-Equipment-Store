const menuRepository = require("../repositories/menuRepository");
const productRepository = require("../repositories/productRepository");
const cookieService = require("../services/cookieService");

exports.index = async function(req, res) {
  const menu = await menuRepository.getAll();

  let ids = cookieService.getCookie(req, 'cart');

  if (ids && ids.length) {
    const basketGoods = await productRepository.getByIds(ids);

    res.render('basket', {
      title: 'Technomart. Basket',
      menu,
      basketGoods,
      user: req.session.user
    })
  } else {
    res.redirect('/');
  }
};
