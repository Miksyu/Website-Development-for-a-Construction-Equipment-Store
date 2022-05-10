const userRepository = require("../repositories/userRepository");
const messageService = require("../services/messageService");
const mailService = require("../services/mailService");

exports.addUser = async function (req, res) {
  if (await userRepository.addUser(req.body.name, req.body.email, req.body.password)) {
    messageService.setRegistrSuccess();
  } else {
    messageService.setUserDuplicate();
    res.redirect('/');
  }

  if (!mailService.sendMail(req.body.email, mailService.renderViewRegistr(req.body.name), mailService.getSubjectRegistr())) {
    messageService.setRegistrFailed()
  }

  res.redirect('/');
};

exports.login = async function(req, res) {
  const user = await userRepository.getUserForByAuth(req.body.email, req.body.password);

  if (user) {
    req.session.user = user;
    messageService.setAuthSuccess(res);
  } else {
    messageService.setAuthFailed()
  }
  res.redirect('/');
};

exports.logout = function(req, res) {
  req.session.user = null;

  res.redirect('/');
};
