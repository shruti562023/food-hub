$(function () {
    // Main Menu JS
    $(window).scroll(function () {
      if ($(this).scrollTop() < 50) {
        $("nav").removeClass("site-top-nav");
        $("#back-to-top").fadeOut();
      } else {
        $("nav").addClass("site-top-nav");
        $("#back-to-top").fadeIn();
      }
    });
  
    // Shopping Cart Toggle JS
    $("#shopping-cart").on("click", function () {
      $("#cart-content").toggle("blind", "", 500);
    });
  
    // Back-To-Top Button JS
    $("#back-to-top").click(function (event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
    });
  
    // Delete Cart Item JS
    $(document).on("click", ".btn-delete", function (event) {
      event.preventDefault();
      $(this).closest("tr").remove();
      updateTotal();
    });
  
    // Update Total Price JS
    function updateTotal() {
      let total = 0;
      $("#cart-content tr").each(function () {
        const rowTotal = parseFloat($(this).find("td:nth-child(5)").text().replace("$", ""));
        if (!isNaN(rowTotal)) {
          total += rowTotal;
        }
      });
      $("#cart-content th:nth-child(5)").text("$" + total.toFixed(2));
      $(".tbl-full th:nth-child(6)").text("$" + total.toFixed(2));
    }
  });
// add to cart
let cart = [];
let totalAmount = 0;

function addToCart(productName, productPrice) {
    // Add product to the cart
    cart.push({ name: productName, price: productPrice });

    // Update total amount
    totalAmount += productPrice;

    // Update UI
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    // Clear previous cart items
    cartItems.innerHTML = '';

    // Add current cart items
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
    });

    // Update total amount
    totalElement.textContent = totalAmount;
}
