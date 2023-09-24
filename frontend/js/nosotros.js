import { infoDevelopers } from "../data/DB.js";

const imageArea = document.querySelector(".image-area")

infoDevelopers.forEach(item =>{

    const imageWraper = document.createElement("div")
    imageWraper.classList.add("img-wrapper", "rounded-3")
    imageWraper.innerHTML = `<img src="${item.img}" alt="foto de desarrollador">
    <p class="bg-color-secundario inter text-color-primario
              text-center m-0 py-3 position-absolute bottom-0
               w-100">${item.name}</p>
    <ul class="position-absolute top-0 m-0 p-0 ">
    ${item.linkedin && `<li class="bg-color-terciario"><a href="${item.linkedin}" target="_blank" aria-label=="Linkedin" class="text-color-secundario"><i class="bi bi-linkedin"></i></a></li>`}
    ${item.github && `<li class="bg-color-terciario"><a href="${item.github}" target="_blank" aria-label=="github" class="text-color-secundario"><i class="bi bi-github"></i></i></a></li>`}
    ${item.portfolio && `<li class="bg-color-terciario"><a href="${item.portfolio}" target="_blank" aria-label=="portfolio" class="text-color-secundario"><i class="bi bi-suitcase-lg-fill"></i></a></li>`}
        
    </ul>`

    imageArea.appendChild(imageWraper)

})