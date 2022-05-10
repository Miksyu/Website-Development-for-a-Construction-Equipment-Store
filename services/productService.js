const productRepository = require("../repositories/productRepository");

exports.getCriteria = function (req) {
  let criteria = {};

  // Пагинация
  criteria.perPage = 6;

  if(req.query.page) {
    criteria.page = req.query.page;
  } else {
    criteria.page = 1;
  }

  // Сортировка

  let sortColumn = 'id';
  let sortType = 'ASC';

  if(req.query.sort){
    sortColumn = req.query.sort;
  }

  if (req.query.sort_type) {
    sortType = req.query.sort_type;
  }

  criteria.sort = sortColumn + ' ' + sortType;

  // Фильтр

  //Цена

  if(req.query.min_price) {
    criteria.minPrice = req.query.min_price;
  } else {
    criteria.minPrice = 0;
  }

  if(req.query.max_price) {
    criteria.maxPrice = req.query.max_price;
  } else {
    criteria.maxPrice = 999999999;
  }

  return criteria;
};

exports.getPageNumbers = async function(criteria) {
  const count = await productRepository.getTotalCount();
  const pageCount = Math.ceil(count/criteria.perPage)
  let PageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    PageNumbers.push(i);
  }

  return PageNumbers;
};
