// =========================
// SKELETON LOADER
// =========================

window.addEventListener("load", () => {

const skeleton = document.getElementById("skeleton");

setTimeout(() => {

if(skeleton){

skeleton.style.opacity = "0";

skeleton.style.transition = "0.5s";

setTimeout(() => {

skeleton.style.display = "none";

},500);

}

},1500);

});


// =========================
// TYPING ANIMATION
// =========================

const words = [

"Editor",
"Artist",
"Sports Enthusiast",
"Coder"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

if(!typing) return;

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


// =========================
// COUNTERS
// =========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter=()=>{

const target = +counter.dataset.target;

const count = +counter.innerText;

const increment = target / 100;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCounter,20);

}else{

counter.innerText = target;

}

};

updateCounter();

});


// =========================
// PROGRESS BAR
// =========================

window.addEventListener("scroll",()=>{

const scrollTop = document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress = (scrollTop / height) * 100;

const bar = document.getElementById("progressBar");

if(bar){

bar.style.width = progress + "%";

}

});


// =========================
// SCROLL REVEAL
// =========================

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

reveals.forEach(section=>{

const top = section.getBoundingClientRect().top;

const trigger = window.innerHeight - 120;

if(top < trigger){

section.classList.add("show");

}

});

}

window.addEventListener("scroll", revealSections);

revealSections();


// =========================
// TOP BUTTON
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(!topBtn) return;

if(window.scrollY > 300){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}


// =========================
// CURSOR GLOW
// =========================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

if(!glow) return;

glow.style.left = e.clientX + "px";

glow.style.top = e.clientY + "px";

});


// =========================
// ACTIVE NAV LINKS
// =========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 150;

if(scrollY >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){

link.classList.add("active");

}

});

});


// =========================
// FLOATING PARTICLES
// =========================

for(let i=0;i<25;i++){

const particle = document.createElement("span");

particle.classList.add("particle");

particle.style.left =
Math.random()*100 + "vw";

particle.style.animationDuration =
(Math.random()*10+8) + "s";

document.body.appendChild(particle);

}