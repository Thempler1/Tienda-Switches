var products = [
    {
        id: 0,
        name: "C³ EQUALZ X TKC KIWI SWITCHES",
        price: 13490
    },
    {
        id: 1,
        name: "KAIHUA HALO TRUE MECHANICAL SWITCHES",
        price: 57290
    }
    ,
    {
        id: 2,
        name: "ALPACA LINEARS SWITCHES",
        price: 14190
    }
    ,
    {
        id: 3,
        name: "KAILH NK CREAMS SWITCHES",
        price: 10490
    }
    ,
    {
        id: 4,
        name: "Gateron Yellow Switches",
        price: 6490
    }
    
];
var chart = [];
var total = 0;

function agregar(item) {
    var cartEl = document.querySelector(".shopping-cart-list");

    if (chart.length === 0) {
        chart.push({ product: products[item], quantity: 1 });

        var li = document.createElement("li");
        li.innerHTML = `${products[item].name} x 1`;
        li.id = `prod${products[item].id}`;
        cartEl.appendChild(li);

    } else {
        var find = false;
        chart.forEach(element => {
            if (element.product.id == products[item].id) {
                element.quantity = element.quantity + 1;
                var duplicated = document.getElementById("prod" + products[item].id)
                document.getElementById("prod" + products[item].id).innerHTML = `${products[item].name} x 2`;
                find = true;
            }
        });
        if (find == false) {
            var li = document.createElement("li");
            li.innerHTML = `${products[item].name} x 1`;
            li.id = `prod${products[item].id}`;
            chart.push({ product: products[item], quantity: 1 });
            cartEl.appendChild(li);
        }
    }
    total = total + products[item].price
    console.log(total);
    document.getElementById("totalprice").innerHTML = `$${total}`;
}