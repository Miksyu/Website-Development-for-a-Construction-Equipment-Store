const modal = document.querySelector('.modal');
const feedback = document.querySelector('.modal-feedback');
const login = document.querySelector('.modal-login');
const log = document.querySelector('.login');
const popup = document.querySelector('.contacts-link');
const close = document.querySelector('.modal-close');
const close1 = document.querySelector('.close-1');
const guaranteeBut = document.querySelector('.services-bottom-item-guarantee');
const deliveryBut = document.querySelector('.services-bottom-item-delivery')
const guarantee = document.querySelector('.services-guarantee');
const delivery = document.querySelector('.services-delivery');
const credit = document.querySelector('.services-credit');


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



const getClickGuarantee = guaranteeBut.onclick = function (){
  guarantee.classList.remove('visually-hidden')
  delivery.classList.add("visually-hidden")
  credit.classList.add("visually-hidden")
  deliveryBut.classList.remove("white-color")
  guaranteeBut.classList.add("white-color")
}

/*const getClickDelivery = guaranteeBut.onclick = function (){
  delivery.classList.remove('visually-hidden')
  credit.classList.add("visually-hidden")
  guarantee.classList.add("visually-hidden")
}
*/
byuInCart.addEventListener("click", function(){
  catalog.classList.remove('visually-hidden');
})
