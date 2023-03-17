const input=document.getElementById('input')
const error=document.getElementById('errorText')
const boton=document.getElementById('buton')
const diverror=document.getElementById('diverror')
boton.addEventListener('click',()=>{
    console.log("hola")
    validarEmail()
})

function validarEmail(){
    let regExp=/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    if(regExp.test(input.value)){
        diverror.classList.remove("errortext")
        input.classList.remove("error")
        input.classList.add("borde")
        error.innerText=` `

    }else{
        diverror.classList.add("errortext")
        error.innerText=`Please provide a valid email address`
        input.classList.remove("borde")
        input.classList.add("error")

    }
}

