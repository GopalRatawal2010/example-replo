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
// ------------------------
// Back To Top Button
// ------------------------

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.background = "#FFD60A";
topBtn.style.color = "#000";
topBtn.style.boxShadow = "0 0 20px gold";
topBtn.style.display = "none";
topBtn.style.transition = ".3s";

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// ------------------------
// Mouse Glow Effect
// ------------------------

const glow=document.createElement("div");

document.body.appendChild(glow);

glow.style.position="fixed";
glow.style.width="180px";
glow.style.height="180px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle,#FFD60A55,transparent)";
glow.style.filter="blur(20px)";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="-1";

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


// ------------------------
// Floating Particles
// ------------------------

for(let i=0;i<25;i++){

let particle=document.createElement("span");

particle.classList.add("particle");

document.body.appendChild(particle);

particle.style.left=Math.random()*100+"vw";

particle.style.top=Math.random()*100+"vh";

particle.style.width=Math.random()*8+3+"px";

particle.style.height=particle.style.width;

particle.style.position="fixed";

particle.style.borderRadius="50%";

particle.style.background="rgba(255,255,255,.4)";

particle.style.animation=
"floatParticle "+
(Math.random()*12+8)
+"s linear infinite";

}

const style=document.createElement("style");

style.innerHTML=`

.particle{

pointer-events:none;

opacity:.5;

}

@keyframes floatParticle{

0%{

transform:translateY(0px);

opacity:.4;

}

50%{

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

.active{

animation:fadeUp 1s ease forwards;

}

@keyframes fadeUp{

from{

opacity:0;

transform:translateY(40px);

}

to{

opacity:1;

transform:translateY(0);

}

}

.selected{

color:#FFD60A !important;

}

`;

document.head.appendChild(style);


// ------------------------
// Dark / Light Mode Toggle
// ------------------------

const mode=document.createElement("button");

mode.innerHTML="🌙";

mode.style.position="fixed";
mode.style.left="20px";
mode.style.bottom="20px";
mode.style.width="55px";
mode.style.height="55px";
mode.style.borderRadius="50%";
mode.style.border="none";
mode.style.cursor="pointer";
mode.style.fontSize="22px";
mode.style.boxShadow="0 0 15px rgba(255,255,255,.4)";

document.body.appendChild(mode);

let dark=true;

mode.onclick=()=>{

if(dark){

document.body.style.filter="invert(1) hue-rotate(180deg)";

mode.innerHTML="☀️";

}else{

document.body.style.filter="none";

mode.innerHTML="🌙";

}

dark=!dark;

};


// ------------------------
// Hero Floating Animation
// ------------------------

const hero=document.querySelector(".hero");

let x=0;

setInterval(()=>{

x+=0.3;

hero.style.backgroundPosition=x+"px";

},30);