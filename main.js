// let shareBtn = document.querySelector('.main-container__perfil--icon');
// let sahareContainer = document.querySelector('.main-container__share')
// let profileContainer = document.querySelector('.main-container__perfil')
// shareBtn.addEventListener('click',event=>{
//     let presbtn=event.target.onclick;
//     console.log(presbtn)
//      if(presbtn==null){
//          sahareContainer.style.display='flex'
//          profileContainer.style.display='none'
//      }
// })

document.querySelector('.button').addEventListener('click',function(){
    document.querySelector('.main-container__share').style.display="flex";
    document.querySelector('.buttonCloseOne').style.display="grid"
    document.querySelector('.button').style.display="none"
    
})
function inicar(){
    document.querySelector('.main-container__share').style.display="none";
    document.querySelector('.button').style.display="grid";
    document.querySelector('.buttonCloseOne').style.display="none"
}
document.querySelector('.buttonClose').addEventListener('click',inicar);
document.querySelector('.buttonCloseOne').addEventListener('click',inicar);