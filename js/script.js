// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

// // Toggle class active untuk shopping cart
// const shoppingCart = document.querySelector(".shopping-cart");
// document.querySelector("#shopping-cart-button").onclick = (e) => {
//   shoppingCart.classList.toggle("active");
//   e.preventDefault();
// };

// if (document.readyState == "loading") {
//   document.addEventListener("DOMContentLoaded", ready);
// } else {
//   ready();
// }

// // Making Funcition Cart
// function ready() {
//   // Remove Item from cart
//   var removeCartButton = document.getElementsByClassName("cart-remove");
//   console.log(removeCartButton);
//   for (var i = 0; i < removeCartButton.length; i++) {
//     button.addEventListener("click", removeCartItem);
//   }
//   // Quantity
//   var quantityInputs = document.getElementsByClassName("cart-quantity");
//   for (var i = 0; i < quantityInputs.length; i++) {
//     var input = quantityInputs[i];
//     input.addEventListener("change", quantityChanged);
//   }
//   // Add to Cart
//   var addCart = document.getElementsByClassName("add");
//   for (var i = 0; i < addCart.length; i++) {
//     var button = addCart[i];
//     button.addEventListener("click", addCartClicked);
//   }
// }

// // Remove Items from Cart
// function removeCartItem(event) {
//   var buttonClicked = event.target;
//   buttonClicked.parentElement.remove();
//   updatetotal();
// }

// // Quantity Changed
// function quantityChanged(event) {
//   var input = event.target;
//   if (isNaN(input.value) || input.value <= 0) {
//     input.value = 1;
//   }
//   updatetotal();
// }

// // add to Cart
// function addCartClicked(event) {
//   var button = event.target;
//   var shopProduct = button.parentElement;
//   var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
//   var productPrice =
//     shopProducts.getElementsByClassName("product-price")[0].innerText;
//   var productImg = shopProducts.getElementsByClassName("product-image")[0].src;
//   addProductToCart(tilte, price, productImg);
//   updatetotal();
// }
// function addProductToCart(title, price, productImg) {
//   var cartShopBox = document.createElement("div");
//   cartShopBox.classList.add("cart-box");
//   var cartItems = document.getElementsByClassName("cart-content");
//   return;
// }
// var cartBoxContent = `
//       <div class="cart-box">
//       <img src="img/products/arabica-bag.png" alt="" class="cart-img">
//       <div class="detail-box">
//         <div class="cart-product-title">Arabica</div>
//         <div class="cart-price">IDR 30K</div>
//         <input type="number" value="1" class="cart-quantity">
//       </div>

//       <!-- Remover Cart -->
//       <img src="img/Icon/trash-alt-solid-24.png" alt="" class="cart-remove" >`;
// carShopBox.innerHTML = cartBoxContent;
// cartItem.append(cartShopBox);
// cartShopBox
//   .getElementsByClassName("cart-remove")[0]
//   .addEventListener("click", removeCartItem);
// cartShopBox
//   .getElementsByClassName("cart-quantity")[0]
//   .addEventListener("change", quantityChanged);

// Update Total
// function updatetotal() {
//   var cartContent = document.getElementsByClassName("cart-content")[0];
//   var cartBoxes = cartContent.getElementsByClassName("cart-box");
//   var total = 0;
//   for (var i = 0; i < cartBoxes.length; i++) {
//     var cartBoxes = cartBoxes[i];
//     var priceElement = cartBoxes.getElementsByClassName("cart-price")[0];
//     var quantityElement = cartBoxes.getElementsByClassName("cart-quantity")[0];
//     var price = parseFloat(priceElement.innerText.replace("IDR", ""));
//     var quantity = quantityElement.value;
//     total = total + (price * quantity);
//     total = Math.round(total * 100) / 100;

//     document.getElementsByClassName('total-price')[0].innerText = 'IDR' = total;
//   }
// }
