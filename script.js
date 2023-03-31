

let stage = document.getElementById('stage');
let currentIndex = 0;
let img = document.getElementById("img");
const nextButton = document.querySelector("#next-button");
const input = document.querySelector("#userInput");
let toastIcon = document.getElementById("toast");



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function showSeries(index) {
    img.src = movies[index].image;
    stage.textContent = `Current score : ${currentIndex} / ${movies.length}`;
    document.getElementById("myProgress").value = currentIndex; 
  }

showSeries(currentIndex);

function checkSeries() {
  const userInput = input.value.toLowerCase();
  const possibleNames = movies[currentIndex].name;


  for (let i = 0; i < possibleNames.length; i++) {
    if (userInput === possibleNames[i].toLowerCase()) {
      successToast();
      document.getElementById("message").textContent = yesses[getRandomInt(0, yesses.length - 1)];
      currentIndex++;
      input.value = "";
      showSeries(currentIndex);
      return;
    }
  }

  // si aucune correspondance n'est trouvée
  errorToast();
  document.getElementById("message").textContent = `Your final score is ${currentIndex}. Try again!` 
  currentIndex = 0;
  input.value = "";
  showSeries(currentIndex);
}


input.addEventListener("keydown", function(event) {
    if (event.code === "Enter") {
      checkSeries();
    }
  });
  


 nextButton.addEventListener("click", checkSeries);

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



  var yesses = [
    "Yes! Yes! Yes!",
    "Indeed",
    "Correct!",
    "Well Done!",
    "Ole!",
    ":)",
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
