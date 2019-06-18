/**
 * Author:    KrzysiekG
 * Created:   22.05.2019
 * 
 **/

var userChoice;
let card = document.getElementById("card");
var container = document.getElementById("game");
var result = document.getElementById("result");
var info = document.getElementById("info");
var random = 0;

var chooseOne = {
  rock : 'https://img.icons8.com/ios/50/000000/rock-filled.png',
  paper: 'https://img.icons8.com/ios/50/000000/rules-filled.png',
  scissors: 'https://img.icons8.com/ios/50/000000/cut-filled.png'
};
var getRandom = function(){
  return Math.floor(Math.random() * 3);
  
}

 //generate items
var displayCard = function (){
    Object.keys(chooseOne).forEach(function (item, key){
        random = getRandom();
        container.innerHTML += '<div id="card" class="'+Object.keys(chooseOne)[random]+'"><img src="'+chooseOne[Object.keys(chooseOne)[random]]+'"></div>';
    });
}

function choose (userChoice) {
       
  container.innerHTML += "<br><p>Your choice:" + " " + userChoice + "</p>";

        // Computer choice
        var computerChoice = getRandom();
  console.log(computerChoice);
        if (computerChoice === 2) {
            computerChoice = "rock";
            result.innerHTML += '<div id="compCard"><img src="'+chooseOne.rock+'"></div>';
        } else if(computerChoice === 1) {
            computerChoice = "paper";
            result.innerHTML += '<div id="compCard"><img src="'+chooseOne.paper+'"></div>';
        } else {
            computerChoice = "scissors";
            result.innerHTML += '<div id="compCard"><img src="'+chooseOne.scissors+'"></div>';
        }

        // Display computer choice
        result.innerHTML += "<p>Computer:" + " " + computerChoice + "</p>";
            if (computerChoice == userChoice){
                info.innerHTML = "It's a tie! :/ <br><br><button type='button' id='reset'>Try again</button>";
                reset();
                die();
                }
  
        // Compare user vs computer
            if (userChoice === "rock") {
                if (computerChoice === "scissors") {
                    // rock wins
                    info.innerHTML = 'You Win! :) <b>Cogratulations!</b><br><br><button type="button" id="reset">Try again</button><br>';
                  reset();
                } else {
                    // paper wins
                    info.innerHTML = 'You lose! :( <br><br><button type="button" id="reset">Try again</button>';
                  reset();
                }
            }
            if (userChoice === "paper") {
                if (computerChoice === "rock") {
                    // paper wins
                    info.innerHTML = 'You Win! :) <br><br><b>Cogratulations!</b><br><button type="button" id="reset">Try again</button>';
                  reset();
                } else {
                    // scissors wins
                    info.innerHTML = 'You lose! :(<br><br><button type="button" id="reset">Try again</button>';
                  reset();
                  
                }
            }
  
            if (userChoice === "scissors") {
                if (computerChoice === "rock") {
                    // rock wins
                    info.innerHTML = 'You lose! :( <br><br><button type="button" id="reset">Try again</button>';
                  reset();
                } else {
                    // scissors wins
                    info.innerHTML = 'You Win! :) <b>Cogratulations!<br></b><br><button type="button" id="reset">Try again</button>';
                  reset();
                }
            }
        }

displayCard();


var rock = document.getElementsByClassName("rock");
var paper = document.getElementsByClassName("paper");
var scissors = document.getElementsByClassName("scissors");
  
  if(rock){
        for (i = 0; i < rock.length; i++) {
          rock[i].addEventListener("click", function(){
          this.classList.toggle("open");
          result.classList.toggle("show");
          document.querySelectorAll('#card').forEach(el => el.classList.add('disable'));
          choose("rock");
    });                                                   
  }
 }

    if(paper){
        for (i = 0; i < paper.length; i++) {
          paper[i].addEventListener("click", function(){
            this.classList.toggle("open");
            result.classList.toggle("show");
            document.querySelectorAll('#card').forEach(el => el.classList.add('disable'));
            choose("paper");
    });                                                   
  }
 }
    if(scissors){
        for (i = 0; i < scissors.length; i++) {
          scissors[i].addEventListener("click", function(){
          this.classList.toggle("open");
          result.classList.toggle("show");
          document.querySelectorAll('#card').forEach(el => el.classList.add('disable'));
          choose("scissors");
    });                                                   
  }
 }
function reset(){
    var reset = document.getElementById("reset");
    reset.addEventListener("click", function(){
      location.reload(true);
    });
}