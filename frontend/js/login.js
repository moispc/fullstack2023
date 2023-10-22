const navRegistro = document.querySelector('#nav-registro');
const btnRegistro = document.getElementById("btn-registro");

const tokenValidation = async () => {

    const token = localStorage.getItem('token') || '';

    
    if(token.length > 10 ){
        window.location = './'
    }
}

navRegistro.addEventListener('click', () => {
    window.location = './registro.html'
})

btnRegistro.onclick = () => {
    window.location.replace('./registro.html');

}

const main = () => {
    tokenValidation()
}


main()