const firstName = document.querySelector('#firstNameInput')
const lastName = document.querySelector('#lastNameInput')
const emailInput = document.querySelector('#emailInput')
const password = document.querySelector('#passwordInput')
            //   almacenar mensaje de error
const firstNameError = document.querySelector('#firstNameError')
const lastNameError = document.querySelector('#lastNameError')
const emailAddresError = document.querySelector('#emailAddresError')
const passworError = document.querySelector('#passworError')

const buton=document.querySelector('#submit')

buton.addEventListener('click',(e)=>{
    e.preventDefault()//evitamos que el formulario se resetee al dar enviar
    validarVacio(firstName.value, firstName, firstNameError, 'First Name  cannot be empty')
    //enviamos contenido del input(firstName.value)
    //pasamos el input(firstName) para luego pintarlor de rojo en caso de error
    //pasamos el div contenedor del error
    validarVacio(lastName.value, lastName, lastNameError,'Last Name  cannot be empty')
    validarEmail(emailInput.value,emailInput,emailAddresError)
    validarVacio(password.value, password, passworError,'Password  cannot be empty')
    
})

function validarEmail(valueInput, divInput,divError){
    let regExp=/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    //console.log(regExp.test(valueInput))
    if(regExp.test(valueInput)){
        ocultarError(divInput,divError)
    }else{
        verError(divInput,divError,'looks like this is not an email');
    }
}

function validarVacio(valueInput, divInput,divError,nameInput){
    //pasamos el parametro divInput para el firsName
    if(valueInput.length==0){
        verError(divInput,divError,nameInput)
    }else{  
        ocultarError(divInput,divError)
    }
}

function verError(divInput,divError,error){
    divInput.style.border="1px solid red"
    divError.innerHTML=`<img class="icon-error" src="./images/icon-error.svg">
                         <p class="error-p">${error}</p>`;


}
function ocultarError(divInput,divError){
    divInput.style.border="1px solid hsl(246, 25%, 77%)"
    divError.innerHTML=``//quitar el mensaje de error

}