import { Cart } from "./modelos/cart.js";

/**
 * Define a function to navigate betweens form steps.
 * It accepts one parameter. That is - step number.
 */
const navigateToFormStep = (stepNumber) => {
    /**
     * Hide all form steps.
     */
    document.querySelectorAll(".form-step").forEach((formStepElement) => {
        formStepElement.classList.add("d-none");
    });
    /**
     * Mark all form steps as unfinished.
     */
    document.querySelectorAll(".form-stepper-list").forEach((formStepHeader) => {
        formStepHeader.classList.add("form-stepper-unfinished");
        formStepHeader.classList.remove("form-stepper-active", "form-stepper-completed");
    });
    /**
     * Show the current form step (as passed to the function).
     */
    document.querySelector("#step-" + stepNumber).classList.remove("d-none");
    /**
     * Select the form step circle (progress bar).
     */
    const formStepCircle = document.querySelector('li[step="' + stepNumber + '"]');
    /**
     * Mark the current form step as active.
     */
    formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-completed");
    formStepCircle.classList.add("form-stepper-active");
    /**
     * Loop through each form step circles.
     * This loop will continue up to the current step number.
     * Example: If the current step is 3,
     * then the loop will perform operations for step 1 and 2.
     */
    for (let index = 0; index < stepNumber; index++) {
        /**
         * Select the form step circle (progress bar).
         */
        const formStepCircle = document.querySelector('li[step="' + index + '"]');
        /**
         * Check if the element exist. If yes, then proceed.
         */
        if (formStepCircle) {
            /**
             * Mark the form step as completed.
             */
            formStepCircle.classList.remove("form-stepper-unfinished", "form-stepper-active");
            formStepCircle.classList.add("form-stepper-completed");
        }
    }
};
/**
 * Select all form navigation buttons, and loop through them.
 */
document.querySelectorAll(".btn-navigate-form-step").forEach((formNavigationBtn) => {
    /**
     * Add a click event listener to the button.
     */
    formNavigationBtn.addEventListener("click", () => {
        /**
         * Get the value of the step.
         */
        const stepNumber = parseInt(formNavigationBtn.getAttribute("step_number"));
        /**
         * Call the function to navigate to the target form step.
         */
        navigateToFormStep(stepNumber);
    });
});


const address = document.querySelector("#first-method")
const store = document.querySelector("#second-method")

const switchButton = ()=>{
    address.classList.toggle("unclickable")
    address.classList.toggle("clickable")
    store.classList.toggle("unclickable")
    store.classList.toggle("clickable")
}

 address.addEventListener("click", ()=>{
    switchButton();
})

store.addEventListener("click", ()=>{
    switchButton();
}) 


const purchaseBtn = document.querySelector("#checkoutForm");

purchaseBtn.addEventListener("submit", (event) => {
    event.preventDefault()
    window.location.href = './exito.html';

});

/* Lógica de lectura del carrito */

const thumbnailContainer = document.querySelector(".thumbnail-container")
const optionOne = document.querySelector(".una-cuota")
const optionTwo = document.querySelector(".dos-cuotas")
const optionThree = document.querySelector(".tres-cuotas")

let total = 0;



const cart = new Cart();




const getCartInfo = () => {

    cart.listArr.forEach(item => {

        const thumbnailImage = document.createElement("img");
        thumbnailImage.src = item.image.thumbnail;
        thumbnailImage.classList.add("thumbnail-img", "m-1");
        thumbnailImage.alt = item.name


        thumbnailContainer.appendChild(thumbnailImage)

        total += item.total;

    })

    total = total.toFixed(2)
    optionOne.innerHTML = `Total: $ ${total}`
    optionTwo.innerHTML = `2 cuotas de: $ ${(total/2).toFixed(2)}`
    optionThree.innerHTML = `3 cuotas de: $ ${(total/3).toFixed(2)}`




}

getCartInfo()
