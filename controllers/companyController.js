const pool = require("../db/db");
const menuRepository = require("../repositories/menuRepository");
exports.index = async function(req, res) {
  const menu = await menuRepository.getAll();

  res.render('company', {
    title: 'Technomart. Company',
    menu,
    user: req.session.user
  })
};
