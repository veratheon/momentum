


const time = document.querySelector('.time');
const date = document.querySelector('.date');
const options = {weekday: 'long', year: '2-digit', month: 'long'};
const greeting = document.querySelector('.greeting');
const personalName = document.querySelector('.name');


function showDate(){
    date.textContent = new Date().toLocaleString('en-BR', options);
}

function showTime(){
    time.textContent = new Date().toLocaleTimeString();
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}

function getTimeOfDay(){
    let hours = new Date().getHours();
    

    switch(Math.floor(hours / 6)){
        case 0:
            return 'night';
        case 1:
            return 'morning';
        case 2:
            return 'day';
        case 3:
            return 'evening';
        case 4:
            return 'night'
    }
}

function showGreeting(){
    const timeOfDay = getTimeOfDay();
    greeting.innerHTML = `Good ${timeOfDay}`;
    //console.log(timeOfDay);
}

function setLocalStorage() {
    //console.log(personalName.value)
    localStorage.setItem('name', personalName.value);
  }

  function getLocalStorage() {

    if(localStorage.getItem('name')) {
        personalName.value = localStorage.getItem('name');
    }
  }

  window.addEventListener('beforeunload', setLocalStorage);
  window.addEventListener('load', getLocalStorage);
  showTime();

export{getTimeOfDay};



  



