const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".close-btn");
const links = document.querySelector(".links");
const sectionMenu = document.querySelector(".menu-item");
const cartShopping = document.querySelector(".fa-cart-shopping");
const checkOutCart = document.querySelector(".cart");
const productList = document.querySelector(".productList");
const quantity = document.querySelector(".quantity");
const subTotal = document.querySelector(".subtotal");
const diskonPrice = document.querySelector(".diskon");
const total = document.querySelector(".total");
const checkout = document.querySelector(".checkout");
const formCheckout = document.querySelector(".form-checkout");
const btnCheckout = document.querySelector(".btn-checkout");

// Click Icon Cart Shopping


window.addEventListener("DOMContentLoaded", function () {
   // Eevet Hamburger Button
   hamburgerBtn.addEventListener("click", showMenu);
   // Event Close Button
   closeBtn.addEventListener("click", closeMenu, klikLink());
   // Function Items Menu
   menuDisplayItems(menu)
   // Function Button Fillter Menu
   menuFiltersButton()
});

cartShopping.onclick = () => {
   checkOutCart.classList.toggle("active")
}

// Close cart
document.querySelector(".close").onclick = () => {
   checkOutCart.classList.toggle("active");
   formCheckout.classList.remove("active");
}

// Function show Button menu
function showMenu() {
   if (links.classList.contains(".show-links")) {
      links.classList.remove("show-links");
   } else {
      links.classList.add("show-links");
      hamburgerBtn.classList.add("show-toogle-menu");
      closeBtn.classList.add("show-toogle-close");
   }
}

// Function Close Button Menu
function closeMenu() {
   links.classList.remove("show-links");
   hamburgerBtn.classList.remove("show-toogle-menu");
   closeBtn.classList.remove("show-toogle-close");
}

// Items link di ketika di klik
function klikLink() {
   const li = document.querySelectorAll("li");
   // Link Klik
   li.forEach(function (item) {
      item.addEventListener("click", function () {
         links.classList.remove("show-links");
         closeBtn.classList.remove("show-toogle-close");
         hamburgerBtn.classList.remove("show-toogle-menu");
      });
   });

   // List Item Active
   li.forEach(function (link) {
      link.addEventListener("click", function () {
         li.forEach(function (e) {
            e.classList.remove("active-links");
         });
         link.classList.add("active-links");
      });
   });
};

// Items menu
const menu = [
   {
      id: 1,
      name: "Buttermilk Pancakes",
      price: "15.000",
      category: "recomend",
      img: "img/item-10.jpg",
      deskripsi: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
   },
   {
      id: 2,
      name: "Diner Double",
      price: "13.000",
      category: "recomend",
      img: "img/item-2.jpeg",
      deskripsi: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
   },
   {
      id: 3,
      name: "Steak Dinner",
      price: "39.000",
      category: "special",
      img: "img/item-9.jpeg",
      deskripsi: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
   },
   {
      id: 4,
      name: "Country Delight",
      price: "20.000",
      category: "special",
      img: "img/item-4.jpeg",
      deskripsi: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
   },
   {
      id: 5,
      name: "Egg Attack",
      price: "22.000",
      category: "special",
      img: "img/item-5.jpeg",
      deskripsi: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
   },
   {
      id: 6,
      name: "Oreo Dream",
      price: "18.000",
      category: "recomend",
      img: "img/item-6.jpeg",
      deskripsi: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
   },
   {
      id: 7,
      name: "Bacon Overflow",
      price: "8.000",
      category: "recomend",
      img: "img/item-7.jpeg",
      deskripsi: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
   },
   {
      id: 8,
      name: "Quarantine Buddy",
      price: "16.000",
      category: "special",
      img: "img/item-9.jpeg",
      deskripsi: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
   },
   {
      id: 9,
      name: "Steak Dinner",
      price: "39.000",
      category: "recomend",
      img: "img/item-3.jpg",
      deskripsi: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
   }
];

// Function menu display
function menuDisplayItems(menuItems) {
   let displayMenu = menuItems.map(function (item, key) {
      return `
      <div class="card">
         <img src="${item.img}" alt="">
            <div class="item-info">
               <h4>${item.name}</h4>
               <h4 class="price">$${item.price}</h4>
            </div>
            <div class="deksripsi">
               <p>
                  ${item.deskripsi}
               </p>
            </div>
            <button class="button-cart" onclick="addToCart(${key})">
               Add To Cart  <i class="fa-solid fa-cart-shopping"></i>
            </button>
       </div>
      `
   });

   displayMenu = displayMenu.join("");
   sectionMenu.innerHTML = displayMenu;
};

// Function Filter Button
function menuFiltersButton() {
   const filterButton = document.querySelectorAll(".filter-btn");

   // Filter button
   filterButton.forEach(function (item) {
      item.addEventListener("click", function (e) {
         const category = e.target.dataset.id;
         const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category == category) {
               return menuItem;
            }
         });
         if (category == "all") {
            menuDisplayItems(menu);
         } else {
            menuDisplayItems(menuCategory);
         };
      });
   });

   // Filter active
   filterButton.forEach(function (btn) {
      btn.addEventListener("click", function () {
         filterButton.forEach(function (e) {
            e.classList.remove("filter-btn-active")
         });
         btn.classList.add("filter-btn-active");
      });
   });
}

// Add To Cart
let checkOutList = [];
function addToCart(id) {
   if (checkOutList[id] == null) {
      checkOutList[id] = menu[id];
      checkOutList[id].quantity = 1;
   } else {
      checkOutList[id].quantity += 1;
   }
   relodeCart();
   checkOutCart.classList.add("active");
}

// Fungsi untuk print gambar dan menghitung total belanja
function relodeCart() {
   productList.innerHTML = "";
   let count = 0;
   let totalPrice = 0;
   let diskon = 0;
   checkOutList.forEach((item, key) => {
      // subtotal
      totalPrice = totalPrice + parseInt(item.price * item.quantity)
      // Diskon
      diskon = parseInt(0.20 * totalPrice);
      count += item.quantity;
      let li = document.createElement("li");
      li.innerHTML = `
         <img src="${item.img}">
         <div class="deksripsi-items">
            <h5>${item.name}</h5>
            <button class="cancel-items" onclick="cancelItems(${key})"><i class="fa-solid fa-trash"></i></button>
            <h5>$${item.price}</h5>
            <button class="minus" onclick="changeQuantity(${key}, ${item.quantity - 1})">&minus;</button>
            <span class="count">${item.quantity}</span>
            <button class="add" onclick="changeQuantity(${key}, ${item.quantity + 1})">&plus;</button>
         </div>`
      productList.appendChild(li);
   });
   quantity.innerHTML = count;
   subTotal.innerHTML = `<h5>Subtotal </h5> <h5>$${totalPrice}.000</h5>`;
   diskonPrice.innerHTML = `<h5>Diskon</h5><h5>20%</h5>`
   total.innerHTML = `<h5>Total Belanja</h5><h5>$${diskon}.000</h5>`
}

// Funsi tombol untuk mengurangi dan menambah makanan
function changeQuantity(key, quantity) {
   if (quantity == 0) {
      delete checkOutList[key];
   } else {
      checkOutList[key].quantity = quantity;
   }
   relodeCart();
}

// Funsi tombol pesan ketika di cancel
function cancelItems(key) {
   if (key in checkOutList) {
      delete checkOutList[key];
   }
   relodeCart();
   formCheckout.classList.remove("active");
}

// Fungsi ketika tombol checkout di klik
checkout.addEventListener("click", function () {
   formCheckout.classList.add("active");
});

// Fungsi ketika tombol pesan sekarang diklik
btnCheckout.addEventListener("click", function (e) {

   e.preventDefault()
   const boxConfirmasi = document.querySelector(".box-confirmasi");
   setTimeout(() => {
      boxConfirmasi.classList.add("active");

      // Dijalankan setelah menunggu 5 detik
      setTimeout(() => {
         boxConfirmasi.classList.remove("active");
      }, 3000)
   }, 500);

   checkOutCart.classList.remove("active");
   formCheckout.classList.remove("active");
});

// Scroll smoth
document.querySelectorAll('a').forEach(link => {
   link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
         top: targetElement.offsetTop - document.querySelector('nav').offsetHeight,
         behavior: 'smooth'
      });
   });
});


