
const url = 'https://ispcfood-backend-production.up.railway.app'
// const url = 'http://192.168.100.4:8080';
   
    const myForm = document.querySelector('#myForm');
    const password = document.querySelector('#password')
    const check = document.querySelector('#check')
    const response = document.querySelector('#back-response')
   
    myForm.addEventListener('submit', event => {
       event.preventDefault();
       if(password.value !== check.value){
        return
       }
       console.log('si funka');
       const formData = {
        role: 'USER_ROLE'
       };
       for( let element of myForm.elements ){
           if(element.value.length > 0 && element.name !== 'check'){
               formData[element.name] = element.value;
           }
       }

       console.log(formData);


   
       fetch(url + '/api/usuarios', {
           method:'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body:JSON.stringify(formData)
       })
       .then(resp => resp.json())
    //    .then(data => console.log(data))
       .then(({ msg, errors, user }) => {

        if(errors){
            console.log(errors[0].msg);
            response.innerText = errors[0].msg;
            var myModal = new bootstrap.Modal(document.getElementById("msgModal"), {});
            return myModal.show();
        }

        
        if(user){
            const { usuario } = user;
            const login = {
                usuario,
                password: formData.password
            }
      

            fetch(url + '/api/auth/login', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(login)
            })
            .then(resp => resp.json())
            .then(({ msg, token, user: userBack }) => {
                if(msg){
                    return console.error(msg)
                }
             localStorage.setItem('token', token);
             localStorage.setItem('user', JSON.stringify(userBack) );
     
             window.location.replace('./carta.html');
         })
         .catch(console.warn)


            // window.location = './login.html'
        }


        //    if(msg){
        //        return console.error(msg)
        //    }
        // localStorage.setItem('token', token);
        // localStorage.setItem('user', JSON.stringify(user) );

        // window.location.replace('./carta.html');
    })
    .catch(console.warn)
   
    })
   
    