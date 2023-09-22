import { infoProducts } from "./data/ProductsCarta.js";
import { Cart } from "./js/modelos/cart.js";
import { Sidebar } from "./js/modelos/sidebar.js";


const containerCards = document.querySelector(".container-cards");

// Variables - MODAL.
const modal = document.getElementById("myModal");
const closeModalButton = document.querySelector(".close");
const modalImg = document.querySelector(".modal-img");
const modalTitle = document.querySelector(".modal-title");
const modalPrice = document.querySelector(".modal-price");
const modalInput = document.querySelector(".modal-input");
const modalTotal = document.querySelector(".modal-total");
const modalButton = document.querySelector(".confirm-button")

//Boton checkout - Sidebar
const checkout = document.querySelector(".btn-pay")


const selectedProduct = {
  id: "",
  name: "",
  imageURL: "",
  price: 0,
  quantity: 0,
  total: 0
}





infoProducts.forEach((product) => {
  // Creación de la tarjeta.
  const cardElement = document.createElement("article");
  cardElement.classList.add("card-t");

  // Estructura de la carta.
  cardElement.innerHTML = `
    <img src="${product.image.imageURL}" class="card-img-t my-auto " alt=${product.image.imageAlt} />
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
    modalInput.value = 1
    modalTotal.textContent = `El total de su compra es: $${product.price.toFixed(
      2
    )}`

    modalInput.addEventListener("input", () => {
      const inputValue = modalInput.value;

      if (inputValue) {
        const productPrice = product.price;
        selectedProduct.quantity =  Number(inputValue);
        selectedProduct.price = product.price;
        const totalPrice = inputValue * productPrice;
        modalTotal.textContent = `El total de su compra es: $${totalPrice.toFixed(
          2
        )}`;
        selectedProduct.total = totalPrice;
        
      } else {
        modalTotal.textContent = "Ingrese una cantidad válida."; // Manejo de entrada inválida.
      }
    });

    
    
    modalImg.src = product.image.imageURL;
    modalImg.alt = product.image.imageAlt;
    selectedProduct.imageURL = product.image.imageURL;
    modalTitle.textContent = product.title;
    selectedProduct.name = product.title;
    modalPrice.textContent = `El precio del producto es: $${product.price}`;
    selectedProduct.price = product.price;
    selectedProduct.quantity = 1;
    selectedProduct.total = selectedProduct.price * selectedProduct.quantity;
    selectedProduct.id = product.id;
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


const sidebar = new Sidebar();
const cart = new Cart();

modalButton.addEventListener("click", ()=> {
  confirmOrder()
  modal.style.display = "none";
  modalInput.value = 1
})

checkout.addEventListener("click", sidebar.redirectCheckout)


const confirmOrder = ()=> {
  sidebar.showCartButton()
  cart.addProducto(selectedProduct)
}

