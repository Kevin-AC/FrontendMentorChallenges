

function api(){
    fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(response => {
    console.log(response);
    const adviceId = response.slip.id;
    const adviceText = response.slip.advice;
    document.getElementById('title').innerText=`Advice #${adviceId}`
    document.getElementById('phrase').innerText=` "${adviceText}"`
  })
  .catch(err => console.error(err));
  
}


api()