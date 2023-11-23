var item_in_cart = document.getElementById("cart-value");
let click_button = document.getElementById("cart");
var add_to_buy = document.getElementsByClassName("button");

var books = [//biook items
  {
    name : "This was our pact",
    quantity : 0,
    rupees : 7,
    paises : 49,
  },
  {
    name : "The famous five",
    quantity : 0,
    rupees : 4,
    paises : 59,
  },
  {
    name : "Matilda",
    quantity : 0,
    rupees : 6,
    paises : 80,
  },
  {
    name : "Harry Potter",
    quantity : 0,
    rupees : 10,
    paises : 0,
  },
  {
    name : "For Young Readers",
    quantity : 0,
    rupees : 7,
    paises : 29,
  },
  {
    name : "Wimpy Kid - DIY",
    quantity : 0,
    rupees : 4,
    paises : 99,
  },
  {
    name : "Dart Board",
    quantity : 0,
    rupees : 17,
    paises : 49,
  },
  {
    name : "Connect Four",
    quantity : 0,
    rupees : 19,
    paises : 99,
  },
  {
    name : "Jenga",
    quantity : 0,
    rupees : 29,
    paises : 99,
  },
  {
    name : "Monopoly",
    quantity : 0,
    rupees : 19,
    paises : 49,
  },
  {
    name : "Bookmarks",
    quantity : 0,
    rupees : 12,
    paises : 49,
  },
  {
    name : "Birthday Card",
    quantity : 0,
    rupees : 12,
    paises : 49,
  },
  {
    name : "Stuffed toys",
    quantity : 0,
    rupees : 15,
    paises : 99,
  },
  {
    name : "Dream catcher drawing",
    quantity : 0,
    rupees : 18,
    paises : 49,
  },
];


function updatesQuantityDisplay() {
  let cart =0;
  for(let x = 0; x < books.length; x++) {
   cart = cart + books[x].quantity;
  }
  item_in_cart.innerHTML = cart;
}

for (let i=0; i<add_to_buy.length; i++){
  add_to_buy[i].onclick = (e) => {
    books[i].quantity++;
   updatesQuantityDisplay();
  };
}

var rupee=0;
var paise =0;

function updatesTotalPrice(){
  let price = 0;

  for(let x = 0; x < books.length; x++){
    price = price+books[x].quantity*(books[x].rupees*100+books[x].paises);
  }
  rupee = Math.floor(price / 100);
  paise =price%100;
}

click_button.onclick = () => {
  updatesTotalPrice();

  for(let x=0; x<books.length; x++){
    if(books[x].quantity!=0){
      console.log("Item name: "+books[x].name + " - Quantity: "+books[x].quantity);
    }
  }
  console.log("Total amount: " + rupee +"$ and "+ paise  + " paise");
};