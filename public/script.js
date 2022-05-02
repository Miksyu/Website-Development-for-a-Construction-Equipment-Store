let navbar_item = window.location.pathname
if (navbar_item === '/') {
  navbar_item = 'main'
} else {
  navbar_item = navbar_item.substring(1)
}
if (document.getElementById(navbar_item)) {
  document.getElementById(navbar_item).classList.add('site-nav-active')
}


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
if (reg) {
  reg.addEventListener("click", toggleModal);
}
cart.forEach(button => button.addEventListener("click", toggleModal));
cartPopup.addEventListener("click", toggleModal);
modal.forEach(modal => modal.addEventListener("click", toggleModal));
close.forEach(button => button.removeEventListener("click", toggleModal));
continueClose.addEventListener("click", toggleModal);



const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

if (slider && output) {
  output.oninput = function () {
    slider.value = this.value;
  }
  output.innerHTML = slider.value;
  slider.oninput = function () {
    output.value = this.value;
  }
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

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Добавление в корзину


var cartItems = getCookie('cart') ? JSON.parse(getCookie('cart')) : [];
document.querySelectorAll('.cart-link')[0].children[1].innerText = cartItems.length;
cart.forEach(element => {
  element.addEventListener('click', async function (e) {
    let product_id = e.target.closest('.goods-checked').children[2].innerText;
    let flag = true;
    cartItems.forEach(item => {
      if (item === product_id) {
        flag = false;
      }
    });
    if (flag) {
      cartItems.push(product_id)
      document.querySelectorAll('.cart-link')[0].children[1].innerText = cartItems.length;
      setCookie('cart', JSON.stringify(cartItems), 30);
    }
  })
});

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

// Корзина


if (window.location.pathname === '/basket') {
  function setOrderSum() {
    let itemPrices = document.querySelectorAll('.goods-new-price');
    let sumPrice = 0;

    itemPrices.forEach(element => {
      sumPrice += Number(element.children[0].innerText);
    });
    document.getElementById('order_sum').value = sumPrice;
  }

  setOrderSum();

  let basketItems = document.querySelectorAll('.button-cart-item-delete');
  basketItems.forEach(element => {
    element.addEventListener('click', async function (e) {
      Object.keys(cartItems).forEach(key => {
        if (cartItems[key] === e.target.closest('.goods-checked').children[2].innerText) {
          cartItems.splice(key, 1);
          document.querySelectorAll('.cart-link')[0].children[1].innerText = cartItems.length;
          setCookie('cart', JSON.stringify(cartItems), 30);
          e.target.closest('.perforators-item').remove();
          setOrderSum();
        }
      });
    });
  });
}

