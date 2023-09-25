import { Cart } from "./modelos/cart.js";

const cart = new Cart();

const table = document.querySelector(".table-container");
const subtotal = document.querySelector(".subtotal")
const total = document.querySelector(".total")
const imprimir = document.querySelector(".imprimir")

let pagoTotal = 0


cart.listArr.forEach(item => {
    pagoTotal += item.total

    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td class="px-0">${item.name}</td>
                          <td class="text-end px-0">$${item.total.toFixed(2)}</td>`

    table.appendChild(tableRow)

    subtotal.innerHTML = `$ ${pagoTotal.toFixed(2)}`
    total.innerHTML = `$ ${pagoTotal.toFixed(2)}`



});



function printDiv() {
    window.print();
    localStorage.removeItem("cart");
    window.location.href = './index.html';
}


imprimir.addEventListener("click", printDiv)





