const cardCv=document.getElementById('CardCv');
const cardNumber=document.getElementById('CardNumber');
const cardName=document.getElementById('CardName');
const cardMonth=document.getElementById('CardMonth');
const cardYear=document.getElementById('CardYear');

const nameUser=document.getElementById('Name');
const number=document.getElementById('Number');

const month=document.getElementById('month');
const year=document.getElementById('year');
const cvc=document.getElementById('cvc');

const btnConf=document.getElementById('btnConfirm');
const btnConti=document.getElementById('btnContinue');

const errorName=document.getElementById('errorName')
const errorNumber=document.getElementById('errorNumber');
const montError=document.getElementById('monthError');
const cvError=document.getElementById('cvError');

const tanks=document.getElementById('Thanks');
const form=document.getElementById('form');



nameUser.addEventListener('input',()=>{
    cardName.innerText=nameUser.value
    verificarVacio(nameUser,errorName,"Can't be blank",cardName,'Jane Appleseed')
   
})

number.addEventListener("input",e=>{
    inputValue=e.target.value
    cardNumber.innerText=number.value
    let regExp=/[a-zA-Z-ñ]|[^a-zA-Z\d\s]/g;//buscamos letras de la A a la z 
    if(regExp.test(number.value)){
        verError(number,errorNumber,'Wrong format,numbers only')
    }else{
        number.value=inputValue.replace(/\s/g, '').replace(/([0-9]{4})/g,'$1 ').trim();//--/g busca de manera global .trim()borra el ultimo espacio
        //.replace(/\s/g, '')--busca con\s los espacios los cambia por string vacio
        //.replace(/([0-9]{4})/g,'$1 ')--busca numero {4} los agrupa de a 4 '$1 ' da el espacio entre cada grupo
        ocultarError(number,errorNumber,``)    
         
    }
    if(number.value==''){
        vacio(cardNumber,'0000 0000 0000 0000')
    }
})

month.addEventListener('input',()=>{
    let monthValue
    month.value=month.value.replace(/[^\dA-Z]/g,'')
    monthValue=month.value
    cardMonth.innerText=monthValue
    verificarVacio(month,montError,"Can't be blank",cardMonth,'00')
})
year.addEventListener('input',()=>{
    let yearValue
    year.value=year.value.replace(/[^\dA-Z]/g, '')
    yearValue=year.value
    cardYear.innerText=yearValue
    verificarVacio(year,montError,"Can't be blank",cardYear,'00')

})
cvc.addEventListener('input',()=>{
    let cvValue
    cvc.value=cvc.value.replace(/[^\dA-Z]/g, '')
    cvValue=cvc.value
    cardCv.innerText=cvValue
    verificarVacio(cvc,cvError,"Can't be blank",cardCv,'000')
    
})

btnConf.addEventListener('click',()=>{

    verificarVacio(nameUser,errorName,"Can't be blank",cardName,'Jane Appleseed')
    verificarVacio(number,errorNumber,"Can't be blank",cardNumber,'0000 0000 0000 0000')
    verificarVacio(month,montError,"Can't be blank",cardMonth,'00')
    verificarVacio(cvc,cvError,"Can't be blank",cardCv,'000')
    verificarVacio(year,montError,"Can't be blank",cardYear,'00')
    if (nameUser.value === "" || number.value=== "" || month.value === ""|| year.value === ""|| cvc.value === "") {       
    } else {
        form.classList.add('hide')
        tanks.classList.remove('hide')
    }
})



function verError(inputError,errorP,msgError){
    inputError.classList.add('inputError')
    errorP.classList.add('errorTxt')
    errorP.innerText=msgError
}

function ocultarError(inputError,errorP,msgError){
    inputError.classList.remove('inputError')
    errorP.classList.remove('errorTxt')
    errorP.innerText=msgError
}
function vacio(card,cardMsg){
   card.innerText=cardMsg
}

function verificarVacio(inputError,errorP,msgError,card,cardMsg){    
    if(inputError.value==''){
        verError(inputError,errorP,msgError)
        vacio(card,cardMsg)
        inputError.classList.remove('borde')
    }else{
        ocultarError(inputError,errorP,``)
        inputError.classList.add('borde')
    }
}