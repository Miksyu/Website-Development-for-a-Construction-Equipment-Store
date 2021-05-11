const byuInCart = document.querySelector('.button-buy');
const catalog = document.querySelector('.modal-catalog');
const close2 = document.querySelector('.modal-close2');
const continueByu = document.querySelector('.continue-byu');

byuInCart.addEventListener("click", function(){
  catalog.classList.remove("visually-hidden");
})

close2.addEventListener("click", function(){
  catalog.classList.add("visually-hidden")
})

continueByu.addEventListener("click", function(){
  catalog.classList.add("visually-hidden")
})
