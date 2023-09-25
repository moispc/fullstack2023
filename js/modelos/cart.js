import Product from "./product.js"
export class Cart{
    _list = {}

    constructor(){
        this._list = {}
        this.readLocalStorage()
    }

    get listArr(){
        const list = Object.values(this._list)

        return list
    }

    addProduct({id, name, image, quantity, total }){
        const product = new Product(id, name, image, quantity, total);

        if(!this._list.hasOwnProperty(product.id)){
            this._list[product.id] = product;
        }else{
            this._list[product.id].quantity = this._list[product.id].quantity + quantity;
            this._list[product.id].total = this._list[product.id].total + total
        }
      
    }

    removeProduct(id = 0){
        delete this._list[id];
    }

    readLocalStorage(){
        const storage = JSON.parse(localStorage.getItem("cart"));
        if(storage ){
            storage.forEach(item => {
                this._list[item.id] = item
            })
        }
    }


}