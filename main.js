import data from './data.json' assert{type:'json'};
//console.log(data)

let bgColors=[
    'hsl(15,100%,70%)',
    'hsl(195,74%,62%)',
    'hsl(348,100%,68%)',
    'hsl(145,58%,55%)',
    'hsl(264,64%,52%)',
    'hsl(43,84%,65%)',
]

let dailyArray=data.map(item=>item.timeframes.daily);
let weeklyArray=data.map(item=>item.timeframes.weekly);
let monthlyArray=data.map(item=>item.timeframes.monthly);

let dailyBtn= document.querySelector('#daily');
let weekly = document.querySelector('#weekly')
let monthly = document.querySelector('#monthly');

let secondSection = document.querySelector('.section2');

drawElements(dailyArray);

dailyBtn.addEventListener('click',()=>{
    drawElements(dailyArray);
});
weekly.addEventListener('click',()=>{
    drawElements(weeklyArray);
})
monthly.addEventListener('click',()=>{
    drawElements(monthlyArray);
})

function drawElements(array){

    secondSection.innerHTML='';
    array.forEach( (element, index) =>{
        let title=data[index].title;
        let titleLowerCase = title.toLocaleLowerCase();

        if(titleLowerCase == 'self care'){
            titleLowerCase = 'self-care'
        }

        secondSection.innerHTML +=`
        <div class="card">
        <div class="card__background" style ="background-color:${bgColors[index]} ;">
          <img class="card__image" src="./images/icon-${titleLowerCase}.svg" alt="work-img">
        </div>
        <div class="card__details">
            <div class="card__activity">
              <p class="card__title">${title}</p> 
              <img class="" src="./images/icon-ellipsis.svg" alt="three dots">
            </div>
            
            <div class="card__time">
              <p class="card__hour">${element.current}hrs <!-- daily --></p> 
              <p class="card__previous">Previous - ${element.previous}hrs <!-- daily --></p> 
                <!-- 32hrs  weekly
                Previous - 36hrs weekly 
                103hrs  monthly
                Previous - 128hrs monthly -->
            </div>
          </div>
      </div>
      `
    })
}