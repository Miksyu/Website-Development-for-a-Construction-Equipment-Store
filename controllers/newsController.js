const pool = require("../db/db");
const menuRepository = require("../repositories/menuRepository");
exports.index = async function(req, res) {
  const menu = await menuRepository.getAll();

  res.render('news', {
    title: 'Technomart. News',
    menu,
    user: req.session.user
  })
};
