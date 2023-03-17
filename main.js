let numberContainer = document.querySelector('.main-container__butons');//contenedor de los numeros
let numerofinal = document.querySelector('.tanks-container__result--number')//span con el numero selecionado
let submitBtn = document.querySelector('.main-container__submit');
let mainCard =document.querySelector('.main-container');
let tanksCard = document.querySelector('.tanks-container');

numberContainer.addEventListener('click',event=>{//escuchar numeros al dar click
    let numeroseleccionado=event.target.innerText;//almacenar numero
    numerofinal.innerText = numeroseleccionado //insertar numero almacenado en el tanks card

   if( numeroseleccionado >0 || numeroseleccionado <=5 ){//filtar los numeros selecionados
        submitBtn.addEventListener('click',()=>{//boton submit
            mainCard.style.display='none';//ocultar tarjeta principla
            tanksCard.style.display='flex';//mostar tarjeta tanks
        });
   }

})

