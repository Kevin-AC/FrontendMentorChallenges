
const bill = document.getElementById('Bill');
let billValue=bill.value

const people=document.getElementById('People')
let peopleValue=people.value
const peopleSpam=document.getElementById('errorTx')

//const botones=document.getElementById('botones')
const botones=document.querySelectorAll('.butons')
const btn5 = document.getElementById('btn5')
const btn10 = document.getElementById('btn10')
const btn15 = document.getElementById('btn15')
const btn25 = document.getElementById('btn25')
const btn50=document.getElementById('btn50')
const custom=document.getElementById('Custom')
let customValue=custom.value
const reset=document.getElementById('Reset')

const tipamount=document.getElementById('tipAmount')
const total=document.getElementById('Total')

let valorTip=0

botones.forEach(element=>{
    element.addEventListener('click',e=>{
        restablecer()
        custom.value=``
        element.classList.add('butonsActive')
        valorTip=parseInt(e.target.innerText.slice(0,-1))
        calcularTip()
    })
})

bill.addEventListener('input',()=>{
    billValue=bill.value
    calcularTip()

   
})
people.addEventListener('input',()=>{
    peopleValue=people.value
    console.log(peopleValue)
    if(peopleValue==0){
        people.classList.add('error')
        peopleSpam.innerText=`Can't be zero`
    }else{
        people.classList.remove('error')
        peopleSpam.innerText=`` 
        calcularTip()
    }
    
   
})
custom.addEventListener('input',()=>{
    valorTip=parseInt(custom.value)
    if(isNaN(valorTip)){

    }else{
        calcularTip()
        restablecer()
    }

    
})

reset.addEventListener('click',e=>{
    people.classList.remove('error')
    peopleSpam.innerText=`` 
    bill.value=``
    people.value=``
    custom.value=``
    tipamount.innerText=`$0.00`
    total.innerText=`$0.00`
    restablecer()
})

function calcularTip(){
    let calculotip = ((billValue * valorTip / 100) / people.value)
    let totalP = ((billValue / people.value) + calculotip)
    if(peopleValue!==''){
        tipamount.innerText = (calculotip).toFixed(2)
        total.innerText = (totalP).toFixed(2)
    }
    
    
    
}
function restablecer(){
    
    botones.forEach(element=>{
        element.classList.remove('butonsActive')
    })
}