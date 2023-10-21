const navLogin = document.querySelector('#nav-login');

const tokenValidation = async () => {

    const token = localStorage.getItem('token') || '';

    
    if(token.length > 10 ){
        window.location = './'
    }
}

navLogin.addEventListener('click', () => {

    window.location = './login.html'
})

const main = () => {
    tokenValidation()
}


main()