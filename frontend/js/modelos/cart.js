import Product from "./product.js"





export class Cart{
    _list = {}

    constructor(){
        this._list = {}
        this.htmlList = document.querySelector(".shop-list")

        this.readLocalStorage()
        this.showList()  

        
    }

    get listArr(){
        const list = Object.values(this._list)

        return list
    }

    addProducto({id, name, imageURL, quantity, total }){
        const product = new Product(id, name, imageURL, quantity, total);


        if(!this._list.hasOwnProperty(product.id)){
            this._list[product.id] = product;
        }else{
            this._list[product.id].quantity = this._list[product.id].quantity + quantity;
            this._list[product.id].total = this._list[product.id].total + total
        }
        this.saveLocalStorage()
        this.showList()        
    }

    removeProduct(id = 0){
        delete this._list[id];
        if (this.listArr.length > 0) {
            this.saveLocalStorage()            
        }else{
            this.deleteLocalStorage()

        }
        this.showList() 
    }

    saveLocalStorage(){
        localStorage.setItem("cart", JSON.stringify(this.listArr))

    }

    deleteLocalStorage(){
        localStorage.removeItem("cart");

    }

    readLocalStorage(){
        const storage = JSON.parse(localStorage.getItem("cart"));
        if(storage ){
            storage.forEach(item => {
                this._list[item.id] = item
            })
        }
    }

    showList(){
        this.htmlList.innerHTML = ""

        this.listArr.forEach( item => {
            const cartElement = document.createElement("li");
            cartElement.classList.add("product-card", "bg-light", "position-relative", "rouded", "rounded-2", "my-2" );
            cartElement.innerHTML = `<div class="card-content row">
              <div class="img-container col-5 d-flex ">
                <img src="${item.image}" class="cart-image img-fluid mx-2 my-auto rounded " alt="">
              </div>
              <div class="product-description col-7">
                <h5 class="mb-0 inter mt-2 product-title">${item.name}</h5>
                <p class="mb-0">Cantidad: ${item.quantity}</p>
                <p>Total: ${item.total}</p>
              </div>
            </div>

            <button class="delete-item btn position-absolute text-primary-hover"><i class="bi bi-trash"></i></button>`
                
            this.htmlList.appendChild(cartElement)
            
            const deleteButton = cartElement.querySelector(".delete-item");

            deleteButton.addEventListener('click', () => this.removeProduct(item.id));
            
      

        })
        
    }


}