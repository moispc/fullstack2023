import { infoProducts } from "./data/ProductsCarta.js";

const containerCards = document.querySelector(".container-cards");

// Variables - MODAL.
const modal = document.getElementById("myModal");
const closeModalButton = document.querySelector(".close");
const modalImg = document.querySelector(".modal-img");
const modalTitle = document.querySelector(".modal-title");
const modalPrice = document.querySelector(".modal-price");
const modalInput = document.querySelector(".modal-input");
const modalTotal = document.querySelector(".modal-total");

infoProducts.forEach((product) => {
  // Creación de la tarjeta.
  const cardElement = document.createElement("article");
  cardElement.classList.add("card-t");

  // Estructura de la carta.
  cardElement.innerHTML = `
    <img src="${product.image}" class="card-img-t my-auto" />
    <div class="card-info">
        <h2 class="card-info--title">${product.title}</h2>
        <p class="card-info--subTitle">Ingredientes:</p>
        <hr />
        <p class="card-info-description">${product.description}</p>
        <div class="card-info--containerButton">
            <button class="card-button">Comprar</button>
        </div>
    </div>
    `;

  // Se agrega la tarjeta a su contenedor.
  containerCards.appendChild(cardElement);

  // Abrir el modal al hacer clic en el botón "Comprar"
  const buyButton = cardElement.querySelector(".card-button");

  buyButton.addEventListener("click", () => {
    modalInput.addEventListener("input", () => {
      const inputValue = modalInput.value;

      if (inputValue) {
        const productPrice = product.price;
        const totalPrice = inputValue * productPrice;
        modalTotal.textContent = `El total de su compra es: $${totalPrice.toFixed(
          2
        )}`;
      } else {
        modalTotal.textContent = "Ingrese una cantidad válida."; // Manejo de entrada inválida.
      }
    });

    modalImg.src = product.image;
    modalTitle.textContent = product.title;
    modalPrice.textContent = `El precio del producto es: $${product.price}`;

    modal.style.display = "block";
  });
});

// En el momento de hacer click en la X se cierra.
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Cuando se haga click fuera del modal se va a cerrar.
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});



const cart = document.querySelector(".cart-container")


cart.addEventListener("click", ()=>{
  window.location.href = './checkout.html';
  
})

