const pool = require("../db/db");
const menuRepository = require("../repositories/menuRepository");
exports.index = async function(req, res) {
  const menu = await menuRepository.getAll();

  res.render('special', {
    title: 'Technomart. Special',
    menu,
    user: req.session.user
  })
};
