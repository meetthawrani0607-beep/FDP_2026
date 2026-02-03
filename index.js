// Typing effect
const text = "Aspiring Full Stack & Python Developer";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

// Button alert
function showMessage() {
    alert("Hello! Thanks for visiting my portfolio 😊");
}
