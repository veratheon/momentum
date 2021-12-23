import { getRundomNum } from "./background.js";

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const reset = document.querySelector('.change-quote');
let data = 'dd', rundomNum = 1;
const min = 1, max = 200;


async function getQuotes(){
    const url = `https://type.fit/api/quotes`;
    const res = await fetch(url);
    data = await res.json();
    setQuotes();
}

function setQuotes(){
    let num = getRundomNum();
    quote.innerHTML = data[num]['text'];
    author.innerHTML = data[num]['author'];
}

getQuotes();
reset.addEventListener('click', setQuotes);