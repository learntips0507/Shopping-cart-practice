let removeClickButtons = document.getElementsByClassName("btn-danger");
console.log(removeClickButtons);
for (let i = 0; i < removeClickButtons.length; i++) {
    const button = removeClickButtons[i];
    button.addEventListener("click",(event)=>{
        const clickButton = event.target;
        clickButton.parentElement.parentElement.remove();
        updathCartTotal();
    })
}
const updathCartTotal = ()=>{
    const cartItemsElement = document.getElementsByClassName("cart-items")[0];
    const cartRow = document.getElementsByClassName("cart-row");
    const total = 0;
    for (let i = 0; i < cartRow.length; i++) {
        const cartRows = cartRow[i];
        const priceTotal = cartRows.document.getElementsByClassName("cart-price")[0];
        const cartQuantity = cartRows.document.getElementsByClassName("cart-quantity-input")[0];
        const price = parseFloat(priceTotal.innerText.replace("$", ""));
        const quantity = cartQuantity.value;
        total = total + (price * quantity);
    }
    document.getElementsByClassName("cart-total-price")[0].innerText ="$" + total;
}