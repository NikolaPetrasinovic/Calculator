//otvaranje i zatvaranje korpe
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener('click', ()=>{
    cart.classList.add('active');
})

closeCart.addEventListener('click', ()=>{
    cart.classList.remove('active');
})

//start ako je dokument spreman
if(document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', start);
}else{
    start();
}

function start(){
    addEvents();
}

function update(){
    addEvents();
    updateTotal();
}

function addEvents(){
    //uklanjanje proizvoda iz korpe
    let cartRemove_btns = document.querySelectorAll(".cart-remove");
    console.log(cartRemove_btns);
    cartRemove_btns.forEach((btn) => {
        btn.addEventListener("click", handle_removeCartItem);
    });

    //promena kolicine proizvoda
    let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
    cartQuantity_inputs.forEach((input) => {
        input.addEventListener("change", handle_changeItemQuantity);
    });

    //dodavanje proizvoda u korpu
    let addCart_btns = document.querySelectorAll(".add.cart");
    addCart_btns.forEach(btn => {
         btn.addEventListener("click", handle_addCartItem);
    });
}

//------------------------handle funckije----------------------------


function handle_removeCartItem(){
    this.parentElement.remove();
    update();
}

function handle_changeItemQuantity() {
    if(isNaN(this.value) || (this.value < 1)) {
        this.value = 1;
    }
    this.value = Math.floor(this.value);  //zadrzavanje integera
    update();
}

//--------------------------update funkcije--------------------
function updateTotal(){
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");
    let total = 0;
    cartBoxes.forEach((cartBox) => {
        let priceElement = cartBox.querySelector(".cart-price");
        let price = parseFloat(priceElement.innerHTML.replace("$", ""));
        let quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
    });

    //da zadrzi 2 broja posle zareza
    total = total.toFixed(2);

    totalElement.innerHTML = "$" + total;
}

