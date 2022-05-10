const pool = require("../db/db");
const menuRepository = require("../repositories/menuRepository");
exports.index = async function(req, res) {
  const menu = await menuRepository.getAll();

  res.render('contacts', {
    title: 'Technomart. Contacts',
    menu,
    user: req.session.user
  })
};
