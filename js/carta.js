import { infoProducts } from "../data/DB.js";
import { Cart } from "./modelos/cart.js";
import { Sidebar } from "./modelos/sidebar.js";


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




const selectedProduct = {
  id: "",
  name: "",
  image: {},
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
        <h2 class="card-info--title mb-5">${product.title}</h2>
      
        <hr />
        <p class="card-info-description">${product.description}</p>
        <div class="card-info--containerButton">
            <button class="card-button mt-3">Comprar</button>
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
    selectedProduct.image = product.image;
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


/* Lógica para el funcionamiento del sidebar y el carrito de compras */

const checkout = document.querySelector(".btn-pay")
const htmlList = document.querySelector(".shop-list")


const sidebar = new Sidebar();
const cart = new Cart();

const confirmOrder = ()=> {
  sidebar.showCartButton();
  sidebar.closeSideBar()
  cart.addProduct(selectedProduct);
  saveToLocalStorage()
  showItems()

}

const saveToLocalStorage = () =>{
  localStorage.setItem("cart", JSON.stringify(cart.listArr))

}

const deleteLocalStorage = () =>{
  localStorage.removeItem("cart");

}

const showItems = () => {
  htmlList.innerHTML = ""
  cart.listArr.length == 0 && sidebar.closeSideBar();
  

        cart.listArr.forEach( item => {
            const cartElement = document.createElement("li");
            cartElement.classList.add("product-card", "bg-light", "position-relative", "rouded", "rounded-2", "my-2" );
            
            cartElement.innerHTML = `<div class="card-content row">
              <div class="img-container col-5 d-flex ">
                <img src="${item.image.thumbnail}" class="cart-image img-fluid mx-2 my-auto rounded " alt="">
              </div>
              <div class="product-description col-7">
                <p class="mb-0 inter mt-2 product-title h5">${item.name}</p>
                <p class="mb-0">Cantidad: ${item.quantity}</p>
                <p>Total: $ ${item.total}</p>
              </div>
            </div>
            <button class="delete-item btn position-absolute text-primary-hover" aria-label="Eliminar item del carrito"><i class="bi bi-trash"></i></button>`
                
            htmlList.appendChild(cartElement)
            
            const deleteButton = cartElement.querySelector(".delete-item");

            deleteButton.addEventListener('click', () => {
              cart.removeProduct(item.id);
              if (cart.listArr.length > 0) {
                saveToLocalStorage()            
              }else{
                deleteLocalStorage()

    
              }
              showItems() 

            });
            
      

        })

}

showItems()


modalButton.addEventListener("click", ()=> {
  confirmOrder()
  modal.style.display = "none";
  modalInput.value = 1
})

checkout.addEventListener("click", sidebar.redirectCheckout)





