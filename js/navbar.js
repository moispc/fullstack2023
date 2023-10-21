const navLogin = document.querySelector('#nav-login')
const navRegistro = document.querySelector('#nav-registro')
const navLogout = document.querySelector('#nav-logout')


const tokenValidation = async () => {

    const token = localStorage.getItem('token') || '';

    
    if(token.length <= 10 ){
        navLogin.classList.remove('d-none')
        navRegistro.classList.remove('d-none')
        navLogout.style.display = 'none'
    }

}

navLogin.addEventListener('click', () => {
    window.location = './login.html'
})

navRegistro.addEventListener('click', () => {
    window.location = './registro.html'
})

navLogout.addEventListener('click', () => {
    localStorage.clear();
    window.location = './'
})





const main = () => {
    tokenValidation()
}


main()