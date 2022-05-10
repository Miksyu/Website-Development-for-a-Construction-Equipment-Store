// technomart.ov@gmail.com
// @123zxcvb

const nodemailer = require("nodemailer");
exports.sendMail = function(email, html, subject) {
  try {
    var transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "b1a48609b3603e",
        pass: "2dd81c541d4cb5"
      }
    });

    var mailOptions = {
      from: 'technomart.ov@gmail.com',
      to: email,
      subject: subject,
      html: html
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      }
    });
    return true;
  } catch {
    return false;
  }
};

exports.renderViewRegistr = function(name) {
  return '<h1>Добро пожаловать на Technomart, ' + name + '!</h1>';
};

exports.renderViewOrder = function(name, productNames, sum) {
  return '<h4>Поздравляем,&nbsp;' + name + '!</h4>' +
    '<h6>Вы заказали товары: </h6>' +
    '<h6>' + productNames.join(', ') + '</h6>' +
    '<h6>На сумму&nbsp;' + sum + '&nbsp;руб.</h6>';
};

exports.getSubjectRegistr = function() {
  return 'Регистрация прошла успешно!';
};

exports.getSubjectOrder = function() {
  return 'Заказ оформлен успешно!';
};
