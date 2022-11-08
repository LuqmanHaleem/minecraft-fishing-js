// Minecraft Fishing Simulator

// Variables to Store HTML Elements
let steveImgE1 = document.getElementById("steve-img");
let alexImgE1 = document.getElementById("alex-img");
let fishImgE1 = document.getElementById("fish-img");
let imgResultE1 = document.getElementById("img-result");
let numcodE1 = document.getElementById("num-code");
let numSalmonE1 = document.getElementById("num-salmon");
let numTropicalE1 = document.getElementById("num-tropical");
let numPufferE1 = document.getElementById("num-puffer");

// Event Listeners
steveImgE1.addEventListener("click", selectsteve);
alexImgE1.addEventListener("click", selectalex);

function selectSteve() {
    // Update Active Border
    steveImgE1.classList.add("active");
    alexImgE1.classList.remove("active");
}

function selectalex() {
    // Update Active Border
    steveImgE1.classList.remove("active");
    alexImgE1.classList.add("active");
}