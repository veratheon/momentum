import {
    getTimeOfDay
} from './timeDateGreeting.js';
let rundomNum;
const slidePrev = document.querySelector('.slide-prev');
const slideNext = document.querySelector('.slide-next');
const min = 1,
      max = 20;

export function getRundomNum() {
    rundomNum = Math.floor(Math.random() * (max - min) + min);
    return rundomNum;
}

async function setBg() {
    let bgNum = rundomNum.toString().padStart(2, "0");
    //const bg = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${bgNum}.jpg`;
    const bg = `https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=UbSmwnyuKMI1ZSMTGVOLh2zdS5NJXoR0BPKo18kEiDU`
    /*const img = new Image();
    img.src = bg;
    img.onload = () => {
    */
    let res = await fetch(bg)
    let data = await res.json();
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
};

function getSlideNext() {
    rundomNum === 19 ? rundomNum = 1 : rundomNum += 1;
    setBg();
}

function getSlidePrev() {
    rundomNum === 1 ? rundomNum = 19 : rundomNum -= 1;
    setBg();
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);

getRundomNum();
setBg();