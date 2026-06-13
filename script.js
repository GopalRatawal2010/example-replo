// --------------------
// Loading Screen
// --------------------

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

loader.style.pointerEvents = "none";

setTimeout(() => {

loader.style.display = "none";

},500);

},1200);

});


// --------------------
// Typing Animation
// --------------------

const words = [

"Creative Writer",

"Public Speaker",

"Manager",

"Presentation Designer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

const current = words[wordIndex];

if(!deleting){

typing.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(typeEffect,1200);

return;

}

}else{

typing.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,deleting ? 50 : 100);

}

typeEffect();


// --------------------
// Scroll Progress Bar
// --------------------

window.addEventListener("scroll",()=>{

const scrollTop = document.documentElement.scrollTop;

const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

const progress = (scrollTop / height) * 100;

document.getElementById("progressBar").style.width = progress + "%";

});


// --------------------
// Flip Cards on Click
// --------------------

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.style.transform =

card.style.transform === "rotateY(180deg)"

? "rotateY(0deg)"

: "rotateY(180deg)";

});

});


// --------------------
// Smooth Reveal Animation
// --------------------

const revealElements = document.querySelectorAll(

"section,.project,.glass,.card"

);

function reveal(){

const trigger = window.innerHeight - 120;

revealElements.forEach(item=>{

const top = item.getBoundingClientRect().top;

if(top < trigger){

item.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();


// --------------------
// Smooth Navbar Highlight
// --------------------

const links = document.querySelectorAll("nav a");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(l=>l.classList.remove("selected"));

link.classList.add("selected");

});

});