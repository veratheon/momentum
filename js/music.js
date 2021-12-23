import {playList} from './playList.js';

const playBtn = document.getElementById('play');
const nextBtn = document.querySelector('.play-next');
const prevBtn = document.querySelector('.play-prev');
const audio = document.querySelector('audio');


let playListContainer = document.querySelector('ul');
let isPlay = false;
let playNum = 0;
const maxNum = playList.length - 1;


playList.forEach(el => {
    const li = document.createElement('li');
    li.textContent = el.title;
    playListContainer.append(li);
  })

let listOfSongs = document.getElementsByTagName('li');


function playAudio() {

    

    if(!isPlay){
        audio.pause();
        listOfSongs[playNum].classList.remove("activLi");
        
    } else{
        audio.src = playList[playNum].src;
        audio.currentTime = 0;
        audio.play();
        listOfSongs[playNum].classList.add("activLi");
    }

}

function playNext(){
    listOfSongs[playNum].classList.remove("activLi");
    playNum === maxNum ? playNum = 0 : playNum++;
    
    playAudio();

}

function playPrev(){
    listOfSongs[playNum].classList.remove("activLi");
    playNum === 0 ? playNum = maxNum : playNum--;
    
    
    playAudio();

}

function toggleBtn(){
    playBtn.classList.toggle('pause');
    isPlay = !isPlay;
    playAudio();
}

playBtn.addEventListener('click', toggleBtn);
nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrev);
