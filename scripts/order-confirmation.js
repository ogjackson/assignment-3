function loadOrderDetails() {
    const summary = document.getElementById("orderSummary");

    const orderNumber = 327633280
    const date = new Date();
    const total = document.getElementById("checkoutTotal").textContent;

    summary.children[1].textContent = `Order #: ${orderNumber}`;
    summary.children[2].textContent = `Date: ${date}`;
    summary.children[3].textContent = `Total: $${total}`;

    const checkoutAddress = JSON.parse(localStorage.getItem("checkoutAddress")) || {};

    const orderAddress = document.querySelector("#orderAddress");
    orderAddress.children[1].textContent = addressInfo.address || "";
    orderAddress.children[2].textContent = addressInfo.city || "";
    orderAddress.children[3].textContent = addressInfo.postcode || "";
}