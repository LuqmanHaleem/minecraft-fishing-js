// Minecraft Fishing Simulator

// Variables to Store HTML Elements
let steveImgE1 = document.getElementById("steve-img");
let alexImgE1 = document.getElementById("alex-img");
let fishBtnE1 = document.getElementById("fish-btn");
let imgResultE1 = document.getElementById("img-result");
let numCodE1 = document.getElementById("num-cod");
let numSalmonE1 = document.getElementById("num-salmon");
let numTropicalE1 = document.getElementById("num-tropical");
let numPufferE1 = document.getElementById("num-puffer");

// GLobal Variables
let character = "steve";
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Event Listeners
steveImgE1.addEventListener("click", selectSteve);
alexImgE1.addEventListener("click", selectAlex);
fishBtnE1.addEventListener("click", fishOnce);

// Event Functions
function selectSteve() {
    
// Update Active Border
  steveImgE1.classList.add("active");
  alexImgE1.classList.remove("active");

//update character selection Variable
  character = "Steve";
}

function selectAlex() {
// Update Active Border
  steveImgE1.classList.remove("active");
  alexImgE1.classList.add("active");

// Update character selection Variable
character = "Alex";
}

function fishOnce() {
  // Test current character
  if (character === "steve") {
  // Use Steve Probability Distribution for Fishing
     let randNum = Math.random();
     if (randNum < 0.7) {
      numCod++;
      imgResultE1.src = "img/Raw-Cod.png";
      numCodE1.innerHTML = numCod;
     } else if (randNum < 0.9) {
      numSalmon++;
      imgResultE1.src = "img/Raw-Salmon.png";
      numSalmonE1.innerHTML = numSalmon
     } else if (randNum < 0.95) {
      numTropical++;
      imgResultE1.src = "img/Tropical-Fish.png";
      numTropicalE1.innerHTML = numTropical
     } else {
      numPuffer++;
      imgResultE1.src = "img/Pufferfish.png";
      numPufferE1,innerHTML = numPuffer;
     }
  } else {
  // Use Alex Probability Distribution for Fishing
    alert("Fish with Alex");
  }
}
