let navbar_item = window.location.pathname
if (navbar_item === '/') {
  navbar_item = 'main'
} else {
  navbar_item = navbar_item.substring(1)
}
document.getElementById(navbar_item).classList.add('site-nav-active')


const modal = document.querySelectorAll('.modal');
const popup = document.querySelector('.contacts-link');
const cartPopup = document.querySelector('.modal-catalog');
const cart = document.querySelectorAll('.button-buy');
const loginPopup = document.querySelector('.modal-login');
const log = document.querySelector('.log');
const registration = document.querySelector('.modal-registration');
const reg = document.querySelector('.reg');
const close = document.querySelectorAll('.modal-close');
const continueClose = document.querySelector('.continue-byu')

const loginLogin = loginPopup.querySelector(".login-user");
// const guaranteeBut = document.querySelector('.services-bottom-item-guarantee');
// const deliveryBut = document.querySelector('.services-bottom-item-delivery')
// const guarantee = document.querySelector('.services-guarantee');
// const delivery = document.querySelector('.services-delivery');
// const credit = document.querySelector('.services-credit');

function toggleModal(event) {
  if (event.target.matches('.log')) {
    loginPopup.classList.toggle("visually-hidden");
    loginLogin.focus();

  } else if (event.target.matches('.reg')) {
    registration.classList.toggle("visually-hidden");
  } else if (event.target.matches('.modal-login .modal-close')) {
    loginPopup.classList.toggle("visually-hidden");
  } else if (event.target.matches('.modal-registration .modal-close')) {
    registration.classList.toggle("visually-hidden");
  } else if (event.target.matches('.button-buy')) {
    cartPopup.classList.toggle("visually-hidden");
  } else if (event.target.matches('.modal-catalog .modal-close')) {
    cartPopup.classList.toggle("visually-hidden");
  } else if (event.target.matches('.modal-catalog .continue-byu')) {
    cartPopup.classList.toggle("visually-hidden");
  }
}

loginPopup.addEventListener("click", toggleModal);
log.addEventListener("click", toggleModal);
registration.addEventListener("click", toggleModal);
reg.addEventListener("click", toggleModal);
cart.forEach(button => button.addEventListener("click", toggleModal));
cartPopup.addEventListener("click", toggleModal);
modal.forEach(modal => modal.addEventListener("click", toggleModal));
close.forEach(button => button.removeEventListener("click", toggleModal));
continueClose.addEventListener("click", toggleModal);



const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.oninput = function () {
  slider.value = this.value;
}
output.innerHTML = slider.value;
slider.oninput = function () {
  output.value = this.value;
}

const goodsItem = document.querySelectorAll('.perforators-item')

goodsItem.forEach(element => {
  element.addEventListener("mouseover", function (e) {
    let a = e.target.closest('.perforators-item');
    a.children[0].children[0].classList.add("visually-hidden")
    a.children[0].children[1].classList.remove("visually-hidden")
  })
})

goodsItem.forEach(element => {
  element.addEventListener("mouseout", function (e) {
    let b = e.target.closest('.perforators-item');
    b.children[0].children[0].classList.remove("visually-hidden");
    b.children[0].children[1].classList.add("visually-hidden");
  })
})

// goodsItem.addEventListener("mouseover", function(e)
// {
//   imgGoodsItem.classList.add("visually-hidden")
//   focusGoodsItem.classList.remove("visually-hidden")
// })


// popup.addEventListener("click", function(){
//   feedback.classList.remove('visually-hidden');
// })
//
// close.addEventListener("click", function(){
//   feedback.classList.add("visually-hidden")
// })
//
// log.addEventListener("click", function(){
//   login.classList.remove('visually-hidden');
// })
//
// close.addEventListener("click", function(){
//   login.classList.add('visually-hidden');
// })
//
//
//
// const getClickGuarantee = guaranteeBut.onclick = function (){
//   guarantee.classList.remove('visually-hidden')
//   delivery.classList.add("visually-hidden")
//   credit.classList.add("visually-hidden")
//   deliveryBut.classList.remove("white-color")
//   guaranteeBut.classList.add("white-color")
// }
//
// /*const getClickDelivery = guaranteeBut.onclick = function (){
//   delivery.classList.remove('visually-hidden')
//   credit.classList.add("visually-hidden")
//   guarantee.classList.add("visually-hidden")
// }
// */
// byuInCart.addEventListener("click", function(){
//   catalog.classList.remove('visually-hidden');
// })
