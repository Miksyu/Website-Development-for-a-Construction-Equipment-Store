exports.setRegistrSuccess = function(res) {
  res.cookie('message', 'Регистрация прошла успешно!');
};

exports.setUserDuplicate = function(res) {
  res.cookie('message', 'Пользователь с таким email уже существует :(');
};

exports.setRegistrFailed = function(res) {
  res.cookie('message', 'Что-то пошло не так :(');
};

exports.setAuthSuccess = function(res) {
  res.cookie('message', 'Авторизация успешна!');
};

exports.setAuthFailed = function(res) {
  res.cookie('message', 'Не удалось войти!');
};

exports.setOrderFailed = function(res) {
  res.cookie('message', 'Что-то пошло не так, заказ не оформлен :(');
};

exports.setOrderSuccess = function(res) {
  res.cookie('message', 'Заказ оформлен успешно!');
};
