let total = 0;

function addItem(name, price) {

    let cart = document.getElementById("cartItems");
    let empty = document.getElementById("emptyMsg");

    if (empty) {
        empty.remove();
    }

    let div = document.createElement("div");
    div.style.marginBottom = "10px";
    div.innerText = name + " - ₹" + price;

    cart.appendChild(div);

    total += price;
    document.getElementById("total").innerText = total;
}

function book() {
    if (total === 0) {
        alert("Add services first");
    } else {
        alert("Booking Successful!");
    }
}