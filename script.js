const form = document.querySelector("#form") ;
const email = document.querySelector("#email") ;
const submitButton = document.querySelector("#submit") ;

const emailRegEx =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i ;

form.addEventListener('submit', (e) => {
      var emailValue = email.value;
      console.log(emailValue);

      if(emailRegEx.test(emailValue) === true) {
            form.classList.remove('error');
      } else{
            form.classList.add('error');
            e.preventDefault() ;
      }
});





