import { Cart } from "./modelos/cart.js";

const cart = new Cart();

const user = JSON.parse(localStorage.getItem('user')) || '';

console.log(user);

const table = document.querySelector(".table-container");
const subtotal = document.querySelector(".subtotal")
const total = document.querySelector(".total")
const imprimir = document.querySelector(".imprimir")
const userNombre = document.querySelector(".user-nombre")
const compraTotal = document.querySelector('.compra-total')
const fechaPago = document.querySelector('.fecha-pago')
const userMail = document.querySelector('.user-mail')

let pagoTotal = 0
const date = new Date().toLocaleDateString('en-GB');

userNombre.innerText = user.nombre;
userMail.innerText = user.mail

fechaPago.innerText = date



cart.listArr.forEach(item => {
    pagoTotal += item.total

    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td class="px-0">${item.name}</td>
                          <td class="text-end px-0">$${item.total.toFixed(2)}</td>`

    table.appendChild(tableRow)

    compraTotal.innerText = `$ ${pagoTotal.toFixed(2)}`

    subtotal.innerHTML = `$ ${pagoTotal.toFixed(2)}`
    total.innerHTML = `$ ${pagoTotal.toFixed(2)}`



});



function printDiv() {
    window.print();
    localStorage.removeItem("cart");
    window.location.href = './index.html';
}


imprimir.addEventListener("click", printDiv)





