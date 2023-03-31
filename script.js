
let stage = document.getElementById('stage');
let currentIndex = 0;
let img = document.getElementById("img");
const nextButton = document.querySelector("#next-button");
const input = document.querySelector("#userInput")



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function showSeries(index) {
    img.src = movies[index].image;
    stage.textContent = `Lieux trouvés : ${currentIndex} / ${movies.length}`;
    document.getElementById("myProgress").value = currentIndex; 
  }

showSeries(currentIndex);

function checkSeries() {
    const userInput = input.value;
      if (userInput === movies[currentIndex].name) {
        document.getElementById("message").textContent = yesses[getRandomInt(0, yesses.length - 1)];
        currentIndex++;
        showSeries(currentIndex);
        return;
      
    }
    currentIndex = 0;
    document.getElementById("message").textContent = "Sorry, you'll get better next time..."
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