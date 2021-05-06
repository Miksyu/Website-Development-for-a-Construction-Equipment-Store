const modal = document.querySelector('.modal');
const feedback = document.querySelector('.modal-feedback');
const login = document.querySelector('.modal-login');
const log = document.querySelector('.login');
const popup = document.querySelector('.contacts-link');
const close = document.querySelector('.modal-close');
const close1 = document.querySelector('.close-1');

popup.addEventListener("click", function(){
  feedback.classList.remove('visually-hidden');
})

close.addEventListener("click", function(){
  feedback.classList.add("visually-hidden")
})

log.addEventListener("click", function(){
  login.classList.remove('visually-hidden');
})

close1.addEventListener("click", function(){
  login.classList.add("visually-hidden")
})

