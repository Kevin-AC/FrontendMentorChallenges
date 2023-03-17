const emailInput=document.getElementById('emailInput')
const buton= document.getElementById('btnSubmit')
const imgError=document.getElementById('imgError')
const errorTxt=document.getElementById('errorTxt')

buton.addEventListener('click',(e)=>{
    validarEmail(emailInput.value,emailInput,imgError,errorTxt)
})


function validarEmail(valorInput,IdInput,imgError,errorTxt){
    let regExp=/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    if(regExp.test(valorInput)){
        ocultarError(IdInput,imgError,errorTxt)

    }else{
        verError(IdInput,imgError,errorTxt)
    }
}

function verError(IdInput,imgError,errorTxt){
    IdInput.classList.add('errorBorde')
    imgError.classList.remove('hide')
    errorTxt.innerText='Please provide a valid email'
}

function ocultarError(IdInput,imgError){
    IdInput.classList.remove('errorBorde')
    imgError.classList.add('hide')
    errorTxt.innerText=``
}
