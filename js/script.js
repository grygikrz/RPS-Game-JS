/**
 * Author:    KrzysiekG
 * Created:   22.05.2019
 *
 **/

var userChoice;
let card = document.getElementById("card");
var container = document.getElementById("game");


var random = 0;

var chooseOne = {
  rock : 'https://img.icons8.com/ios/50/000000/rock-filled.png',
  paper: 'https://img.icons8.com/ios/50/000000/rules-filled.png',
  scissors: 'https://img.icons8.com/ios/50/000000/cut-filled.png'
};

//Generating random number
var getRandom = function(){
  return Math.floor(Math.random() * 3);
}
//statistics
var params = {
  roundsPlayed : 0,
  progress : [],
  userWins: 0,
  computerWins: 0
};
 //generate items
var displayCard = function (){
    Object.keys(chooseOne).forEach(function (item, key){
        random = getRandom();
        container.innerHTML += '<div id="card" data-move="'+Object.keys(chooseOne)[random]+'" class="'+Object.keys(chooseOne)[random]+' show-modal player-move"><img src="'+chooseOne[Object.keys(chooseOne)[random]]+'"></div>';
    });
}

function choose (userChoice) {

  // Computer choice
  var computerChoice = getRandom();

  // Info about result
  var info = document.getElementById("info");
  var result = document.getElementById("result");
  params.roundsPlayed += 1;



        if (computerChoice === 2) {
            computerChoice = "rock";
            result.innerHTML = "<p>Your choice:" + " " + userChoice + "</p><br><div id='card' class='open'><img src='"+chooseOne[userChoice]+"'></div><br>";
            result.innerHTML += '<br><div id="compCard"><img src="'+chooseOne.rock+'"></div>';
        } else if(computerChoice === 1) {
            computerChoice = "paper";
                result.innerHTML = "<p>Your choice:" + " " + userChoice + "</p><br><div id='card' class='open'><img src='"+chooseOne[userChoice]+"'></div><br>";
            result.innerHTML += '<br><div id="compCard"><img src="'+chooseOne.paper+'"></div>';
        } else {
            computerChoice = "scissors";
            result.innerHTML = "<p>Your choice:" + " " + userChoice + "</p><br><div id='card' class='open'><img src='"+chooseOne[userChoice]+"'></div><br>";
            result.innerHTML += '<br><div id="compCard"><img src="'+chooseOne.scissors+'"></div>';
        }

        // Display computer choice
        result.innerHTML += "<p>Computer:" + " " + computerChoice + "</p>";
            if (computerChoice == userChoice){
                params.userWins += 1;
                params.computerWins += 1;
                info.innerHTML = "It's a tie! :/ <br><br><button type='button' id='reset'>Try again</button>";
                info.innerHTML += '<h3>Statistics:</h3><p>Ronds played: '+params.roundsPlayed+'</p>';
                info.innerHTML += '<br><p>Your Score:<b> '+params.userWins+' - '+params.computerWins+' </b>: Computer Score</p>';
                return 'done';
                }

        // Compare user vs computer
            if (userChoice === "rock") {
                if (computerChoice === "scissors") {
                    params.userWins += 1;
                    // rock wins
                    info.innerHTML = 'You Win! :) <b>Cogratulations!</b><br><br><button type="button" id="reset">Try again</button><br>';
                    info.innerHTML += '<h3>Statistics:</h3><p>Ronds played: '+params.roundsPlayed+'</p>';
                    info.innerHTML += '<br><p>Your Score:<b> '+params.userWins+' - '+params.computerWins+' </b> : Computer Score</p>';
                } else {
                    // paper wins
                    params.computerWins += 1;
                    info.innerHTML = 'You lose! :( <br><br><button type="button" id="reset">Try again</button>';
                    info.innerHTML += '<h3>Statistics:</h3><p>Ronds played: '+params.roundsPlayed+'</p>';
                    info.innerHTML += '<br><p>Your Score: <b> '+params.userWins+' - '+params.computerWins+' </b> : Computer Score</p>';
                }
            }
            if (userChoice === "paper") {
                if (computerChoice === "rock") {
                    // paper wins
                    params.userWins += 1;
                    info.innerHTML = 'You Win! :) <br><br><b>Cogratulations!</b><br><button type="button" id="reset">Try again</button>';
                    info.innerHTML += '<h3>Statistics:</h3><p>Ronds played: '+params.roundsPlayed+'</p>';
                    info.innerHTML += '<br><p>Your Score: <b> '+params.userWins+' - '+params.computerWins+' </b> : Computer Score</p>';
                } else {
                    // scissors wins
                    params.computerWins += 1;
                    info.innerHTML = 'You lose! :(<br><br><button type="button" id="reset">Try again</button>';
                    info.innerHTML += '<h3>Statistics:</h3><p>Ronds played: '+params.roundsPlayed+'</p>';
                    info.innerHTML += '<br><p>Your Score: <b> '+params.userWins+' - '+params.computerWins+' </b> : Computer Score</p>';                }
            }

            if (userChoice === "scissors") {
                if (computerChoice === "rock") {
                    // rock wins
                    params.computerWins += 1;
                    info.innerHTML = 'You lose! :( <br><br><button type="button" id="reset">Try again</button>';
                    info.innerHTML += '<h3>Statistics:</h3><p>Ronds played: '+params.roundsPlayed+'</p>';
                    info.innerHTML += '<br><p>Your Score: <b> '+params.userWins+' - '+params.computerWins+' </b> : Computer Score</p>';                } else {
                    // scissors wins
                    params.userWins += 1;
                    info.innerHTML = 'You Win! :) <b>Cogratulations!<br></b><br><button type="button" id="reset">Try again</button>';
                    info.innerHTML += '<h3>Statistics:</h3><p>Ronds played: '+params.roundsPlayed+'</p>';
                    info.innerHTML += '<br><p>Your Score: <b> '+params.userWins+' - '+params.computerWins+' </b> : Computer Score</p>';
                }
            }
        }


function move() {

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
}

function run() {

      var showModal = function(event){
      		event.preventDefault();
          var viewModal = document.querySelector('#modal-overlay');
      		viewModal.classList.add('show');


          var hideModal = function(event){
        		event.preventDefault();
        		document.querySelector('#modal-overlay').classList.remove('show');

              //Reset result
              container.innerHTML = '';
              document.querySelector('#result').classList.remove('show');
              document.querySelector('#result').innerHTML = '';

              //Run game once again
              displayCard();
              move();
              run();
            };

        	var closeButton = document.getElementById("reset");


        	closeButton.addEventListener('click', hideModal);

        	document.querySelector('#modal-overlay').addEventListener('click', hideModal);

        	var modal = document.querySelector('.modal');

        		modal.addEventListener('click', function(event){
        			event.stopPropagation();
        		});
      	};


      	var modalLinks = document.querySelectorAll('.show-modal');

      	for(var i = 0; i < modalLinks.length; i++){
      		modalLinks[i].addEventListener('click', showModal);
      	}

      // statistics

      var mLinks = document.querySelectorAll('.player-move');

      var sModal = function(event){

          for(var i = 0; i < mLinks.length; i++){
            console.log(mLinks[i].getAttribute("data-move"));
          }
      	};

      for(var i = 0; i < mLinks.length; i++){
        mLinks[i].addEventListener('click', sModal);
      }

}


displayCard();
move();
run();
