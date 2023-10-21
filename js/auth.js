
const url = 'https://ispcfood-backend-production.up.railway.app'
   
    const myForm = document.querySelector('#myForm');
    const response = document.querySelector('#back-response');

   
    myForm.addEventListener('submit', event => {
       event.preventDefault();
       const formData = {};
       for( let element of myForm.elements ){
           if(element.value.length > 0 ){
               formData[element.name] = element.value;
           }
       }


   
       fetch(url + '/api/auth/login', {
           method:'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body:JSON.stringify(formData)
       })
       .then(resp => resp.json())
       .then(({ res, token, user }) => {
           if(res){
               response.innerText = res;
               var myModal = new bootstrap.Modal(document.getElementById("msgModal"), {});
               myModal.show();
               return console.error(res)
           }
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user) );

        window.location.replace('./carta.html');
    })
    .catch(console.warn)
   
    })