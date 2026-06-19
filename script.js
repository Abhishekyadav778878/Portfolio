// Smooth Fade Animation

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:0.2
}

);

const hiddenElements =
document.querySelectorAll(
".glass-card, .skill-card, .project-card, .cert-card"
);

hiddenElements.forEach((el) => observer.observe(el));

// Typing Effect

const text =
"Data Scientist | Machine Learning Engineer | Data Analyst";

const typingTarget =
document.querySelector(".hero-left h2");

let index = 0;

function typeText(){

if(index < text.length){

typingTarget.textContent += text.charAt(index);

index++;

setTimeout(typeText,60);

}

}

if(typingTarget){

typingTarget.textContent = "";

typeText();

}

// Scroll To Top Button

const scrollBtn =
document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.width = "50px";
scrollBtn.style.height = "50px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#00d4ff";
scrollBtn.style.color = "#000";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

scrollBtn.style.display = "block";

}
else{

scrollBtn.style.display = "none";

}

});

scrollBtn.addEventListener("click", () => {

window.scrollTo({

top:0,
behavior:"smooth"

});

});

// Dynamic Year Footer

const footer =
document.querySelector("footer p");

if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} Abhishek Rajendra Yadav | Data Scientist Portfolio`;

}
