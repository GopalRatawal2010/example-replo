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
// =========================
// DARK / LIGHT MODE TOGGLE
// =========================

const themeBtn = document.createElement("button");

themeBtn.innerHTML = "🌙";

themeBtn.id = "themeBtn";

document.body.appendChild(themeBtn);

themeBtn.style.position = "fixed";
themeBtn.style.left = "20px";
themeBtn.style.bottom = "20px";
themeBtn.style.width = "55px";
themeBtn.style.height = "55px";
themeBtn.style.borderRadius = "50%";
themeBtn.style.border = "none";
themeBtn.style.cursor = "pointer";
themeBtn.style.zIndex = "9999";
themeBtn.style.fontSize = "20px";

let darkMode = true;

themeBtn.onclick = () => {

document.body.classList.toggle("light-mode");

darkMode = !darkMode;

themeBtn.innerHTML = darkMode ? "🌙" : "☀️";

};


// =========================
// 3D CARD TILT EFFECT
// =========================

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateY = (x - rect.width/2) / 12;

const rotateX = -(y - rect.height/2) / 12;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

});

});


// =========================
// NAVBAR BLUR ON SCROLL
// =========================

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

nav.style.background =
"rgba(0,0,0,.35)";

nav.style.backdropFilter =
"blur(25px)";

}else{

nav.style.background =
"rgba(255,255,255,.05)";

}

});


// =========================
// BUTTON RIPPLE EFFECT
// =========================

document.querySelectorAll(".btn, button")
.forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple =
document.createElement("span");

const rect =
button.getBoundingClientRect();

const size =
Math.max(rect.width, rect.height);

ripple.style.width = size+"px";
ripple.style.height = size+"px";

ripple.style.left =
e.clientX - rect.left - size/2 + "px";

ripple.style.top =
e.clientY - rect.top - size/2 + "px";

ripple.classList.add("ripple");

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


// =========================
// HERO PARALLAX
// =========================

const hero = document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

const x =
(e.clientX / window.innerWidth - .5) * 20;

const y =
(e.clientY / window.innerHeight - .5) * 20;

hero.style.transform =
`translate(${x}px, ${y}px)`;

});


// =========================
// PREMIUM CARD HOVER
// =========================

document.querySelectorAll(".project")
.forEach(project=>{

project.addEventListener("mouseenter",()=>{

project.style.transform =
"translateY(-12px) scale(1.03)";

});

project.addEventListener("mouseleave",()=>{

project.style.transform =
"translateY(0) scale(1)";

});

});


// =========================
// PARTICLE ANIMATION
// =========================

const particleStyle =
document.createElement("style");

particleStyle.innerHTML = `

.particle{

position:fixed;

bottom:-20px;

width:6px;

height:6px;

border-radius:50%;

background:rgba(255,255,255,.5);

pointer-events:none;

animation:floatParticle linear infinite;

}

@keyframes floatParticle{

0%{

transform:translateY(0);

opacity:.3;

}

50%{

opacity:1;

}

100%{

transform:translateY(-120vh);

opacity:0;

}

}

.ripple{

position:absolute;

border-radius:50%;

background:rgba(255,255,255,.5);

transform:scale(0);

animation:rippleAnim .6s linear;

pointer-events:none;

}

@keyframes rippleAnim{

to{

transform:scale(4);

opacity:0;

}

}

.light-mode{

filter:invert(1) hue-rotate(180deg);

}

button{

overflow:hidden;

position:relative;

}

`;

document.head.appendChild(particleStyle);


// =========================
// CONSOLE MESSAGE 
// =========================

console.log(
"Portfolio Created By Gopal Kumar"
);

const terminalInput =
document.getElementById("terminal-input");

const terminalOutput =
document.getElementById("terminal-output");

if(terminalInput){

terminalInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

const cmd =
terminalInput.value.toLowerCase();

if(cmd==="about"){

terminalOutput.innerHTML +=
"<br>> About: Passionate about editing, art, coding and sports.";

}

else if(cmd==="skills"){

terminalOutput.innerHTML +=
"<br>> Skills: Editing, Artist, Coding, Sports";

}

else if(cmd==="contact"){

terminalOutput.innerHTML +=
"<br>> Email: gopalratawal41@gmail.com";

}

else{

terminalOutput.innerHTML +=
"<br>> Command not found";

}

terminalInput.value="";

}

});

}

const chatInput =
document.getElementById("chat-input");

const chatMessages =
document.getElementById("chat-messages");

if(chatInput){

chatInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

const question =
chatInput.value.toLowerCase();

let answer =
"I don't know that yet.";

if(question.includes("name")){

answer =
"My name is Gopal Kumar.";

}

else if(question.includes("skills")){

answer =
"My skills are Editing, Art, Coding and Sports.";

}

else if(question.includes("email")){

answer =
"gopalratawal41@gmail.com";

}

else if(question.includes("about")){

answer =
"I enjoy editing, creating art, coding projects and participating in sports.";

}

chatMessages.innerHTML +=
`<p><b>You:</b> ${chatInput.value}</p>`;

chatMessages.innerHTML +=
`<p><b>AI:</b> ${answer}</p>`;

chatInput.value="";

chatMessages.scrollTop =
chatMessages.scrollHeight;

}

});

}