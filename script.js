document.getElementById("btn").addEventListener("click", function() {
    alert("Welcome to my website!");
});
const cards=document.querySelectorAll(".card");

cards.forEach(card=>{
card.addEventListener("click",()=>{
card.classList.toggle("flip");
});
});

// Smooth button animation

document.querySelector("button").addEventListener("click",()=>{
document.getElementById("skills").scrollIntoView({
behavior:"smooth"
});
});