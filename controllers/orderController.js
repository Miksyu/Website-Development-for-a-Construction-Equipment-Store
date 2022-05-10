const orderRepository = require('../repositories/orderRepository');
const productRepository = require('../repositories/productRepository');
const assignRepository = require('../repositories/assignRepository');
const messageService = require('../services/messageService');
const cookieService = require("../services/cookieService");
const mailService = require("../services/mailService");
exports.addOrder = async function(req, res) {
  const orderId = await orderRepository.addOrder(req.body.name, req.body.email, req.body.sum);

  if(!orderId) {
    messageService.setOrderFailed(res);
    res.redirect('/');
  }

  let productIds = cookieService.getCookie(req, 'cart');

  if(await assignRepository.addAssigns(orderId, productIds)) {
    messageService.setOrderSuccess(res);
    res.cookie('cart', '');
  } else {
    messageService.setOrderFailed(res);
  }

  const products = await productRepository.getByIds(productIds);
  let productNames = [];

  products.forEach((product) => {
    productNames.push(product.name)
  });

  mailService.sendMail(
    req.body.email,
    mailService.renderViewOrder(req.body.name, productNames, req.body.sum),
    mailService.getSubjectOrder()
  );

  res.redirect('/');
};
