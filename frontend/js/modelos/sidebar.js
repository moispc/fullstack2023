

 
export class Sidebar{

    constructor(){
        this.cart = document.querySelector(".cart-container")
        this.sideBar = document.querySelector(".sidebar")
        this.closeButton = document.querySelector(".colapse-sidebar")

        this.cart.addEventListener("click", () => this.openSideBar())
        this.closeButton.addEventListener("click", () => this.closeSideBar())

        this.checkLocalStorage()
    }

    showCartButton(){
        this.cart.classList.remove('hidden');
    }

    checkLocalStorage(){
        const storage = JSON.parse(localStorage.getItem("cart"));
        if(storage ){
            this.showCartButton()
        }
    }

    openSideBar(){
        this.cart.classList.add('hidden');
        this.sideBar.classList.remove('hidden')

    }

    closeSideBar(){
        this.checkLocalStorage()
        this.sideBar.classList.add('hidden')

    }

    redirectCheckout(){
        window.location.href = 'checkout.html'
    }


}