import { infoProducts } from "./data/ProductsCarta.js";

console.log(infoProducts)

const containerCards = document.querySelector(".container-cards");
const modal = document.getElementById("myModal");
const closeModalButton = document.querySelector(".close");

infoProducts.forEach((product) => {
  // Creación de la tarjeta.
  const cardElement = document.createElement("article");
  cardElement.classList.add("card");

  // Estructura de la carta.
  cardElement.innerHTML = `
    <img src="${product.image}" class="card-img" />
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
