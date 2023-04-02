
let stage = document.getElementById('stage');
let currentIndex = 0;
let img = document.getElementById("img");
const nextButton = document.querySelector("#next-button");
const input = document.querySelector("#userInput");
let toastIcon = document.getElementById("toast");
const infoIndex = document.getElementById("textIndex");
const hint = document.getElementById("hint");
const hintDiv = document.getElementById("hintDiv");



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function showSeries(index) {
  if (currentIndex === 24){
    const gameCard = document.getElementById("gameCard");
    const successCard = document.getElementById("successCard");

    stage.textContent = `Current score : ${currentIndex} / ${movies.length}`;
    document.getElementById("myProgress").value = currentIndex; 
    gameCard.classList.add("is-hidden");
    successCard.classList.remove("is-hidden");
    return;
  }
  //Change image according to the index
  img.src = movies[index].image;
  //Change score
  stage.textContent = `Current score : ${currentIndex} / ${movies.length}`;
  //Update progress bar
  document.getElementById("myProgress").value = currentIndex; 
  const hintText = document.getElementById("hintText");
  hintText.textContent = `${movies[currentIndex].hint}`;

}

showSeries(currentIndex);

//if the user press enter, or the button, launch checkSeries
input.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
      checkSeries();
    }
});

nextButton.addEventListener("click", checkSeries);

//Takes user's input and check if it's the good one and update the index OR restart
function checkSeries() {
  const userInput = input.value.toLowerCase();
  const possibleNames = movies[currentIndex].name;
  //if good answer, continue the game
  for (let i = 0; i < possibleNames.length; i++) {
    if (userInput === possibleNames[i].toLowerCase()) {
    hint.textContent = "Hint"
    hintDiv.classList.add("is-hidden");
    successToast();
    document.getElementById("message").textContent = yesses[getRandomInt(0, yesses.length - 1)];
    currentIndex++;
    input.value = "";
    showSeries(currentIndex);
    return;   
    }
  } 
  // if there's no correspondance
  errorToast();
  document.getElementById("message").textContent = `Your final score is ${currentIndex}. Try again!` 
  currentIndex = 0;
  hint.textContent = "Hint"
  hintDiv.classList.add("is-hidden");
  input.value = "";
  showSeries(currentIndex);
}

//Progress Bar animation

let i = 0;
 function move() {
    if (currentIndex == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  } 


//array of random success feedback
var yesses = [
  "Yes! Yes! Yes!",
  "Indeed",
  "Correct!",
  "Well Done!",
  "Ole!",
  "Detective skills : 100%",
  "You REALLY spent too much time on Netflix",
  "Perfecto",
  "Excellent!",
  "Wonderful!",
  "Fabulous!",
  "Hooray!",
  "Top Notch",
  "Are you cheating?",
  "Woohoo!",
  "Amazing!",
  "Superstar!",
  "You're good!",
  "You got it!",
  "Great Job!",
  "Good!",
  "Great!",
  "Totally",
]

//Success and error toasts
function successToast() {
  // Get the snackbar DIV
  toast.src = "https://img.icons8.com/3d-fluency/94/null/best-seller.png";
  var x = document.getElementById("snackbar");
  
  // Add the "show" class to DIV
  x.className = "show";
    
  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
} 

function errorToast() {
  // Get the snackbar DIV
  toast.src = "https://img.icons8.com/3d-fluency/94/null/disappointed.png";
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";
    
  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
} 

function refreshPage(){
  window.location.reload();
} 

// Modal icon hover animation

function hover(element) {
  element.src = "https://img.icons8.com/ios-glyphs/30/ffc700/info-squared.png";
}
  
function unhover(element) {
  element.src = 'https://img.icons8.com/ios-glyphs/30/null/info-squared.png';
}


//MODAL BOX

infoIndex.textContent = `You have ${movies.length} pieces to find and each mistake makes you start again from the beginning. Several spellings are accepted,
and the game does not take into account capital letters.`;


  document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.keyCode === 27) { // Escape key
        closeAllModals();
      }
    });
  });

hint.addEventListener("click", function() {
 if (hintDiv.classList.contains("is-hidden")){
  hintDiv.classList.remove("is-hidden");
  hint.textContent = "Hide hint"
 } else {
  hintDiv.classList.add("is-hidden");
  hint.textContent = "Hint"
 }

 
 
});