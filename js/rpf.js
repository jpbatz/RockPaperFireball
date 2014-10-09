// computer chooses

(function() { // self-invoking anonymous function
  // all code goes here

var playerChoice,
    compChoice,
    playerWins = 0,
    compWins = 0,
    tieCount = 0;

// noprotect
function playerChooses() {
  
  do {
    playerChoice = prompt("Select [R]ock, [P]aper or [F]ireball:","Type 'R', 'P', or 'F'");
    if ((playerChoice.toUpperCase() !== "R") && (playerChoice.toUpperCase() !== "P") && (playerChoice.toUpperCase() !== "F")) {
      alert("Try using R, P, or F. No messing around!");
    }
  } while ((playerChoice.toUpperCase() !== "R") && (playerChoice.toUpperCase() !== "P") && (playerChoice.toUpperCase() !== "F"));
  
  return playerChoice.toUpperCase();
}

function computerChooses() {
  var randomGen = Math.floor(Math.random()*3);
  switch(randomGen) {
    case 0:
      compChoice = "R";
      break;
    case 1:
      compChoice = "P";
      break;
    case 2:
      compChoice = "F";
      break;
    default:
  }

  return compChoice;
}


function result() {
  clearDisplay();
  var playerPick = playerChooses();
  var compPick = computerChooses();
  
  switch(playerPick) {
    case "R":
      display("Player: Rock");
      if(compPick === "P") {
        display("Computer: Paper");
        display("<i>Paper covers Rock</i>");
        display("<strong>Computer Wins!</srong>");
        compWins++;
      } else if(compPick === "F") {
        display("Computer: Fireball");
        display("<i>Rock blocks Fireball</i>");
        display("<strong>Player Wins!</strong>");
        playerWins++;
      } else if(compPick === "R") {
        display("Computer: Rock");
        display("<strong>Tie! Player and Computer both picked Rock.</srong>");
        tieCount++;
      }
      break;
    case "P":
      display("Player: Paper");
      if(compPick === "R") {
        display("Computer: Rock");
        display("<i>Paper covers Rock</i>");
        display("<strong><i>Player Wins!</i></strong>");
        playerWins++;
      } else if(compPick === "F") {
        display("Computer: Fireball");
        display("<i>Fireball engulfs Paper</i>");
        display("<strong>Computer Wins!</srong>");
        compWins++;
      } if(compPick === "P") {
        display("Computer: Paper");
        display("<strong>Tie! Player and Computer both picked Paper.</srong>");
        tieCount++;
      }
      break;
    case "F":
      display("Player: Fireball");      
      if(compPick === "R") {
        display("Computer: Rock");
        display("<i>Rock blocks Fireball</i>");
        display("<strong>Computer Wins!</srong>");
        compWins++;
      } else if(compPick === "P") {
        display("Computer: Paper");
        display("<i>Fireball engulfs Paper</i>");
        display("<strong>Player Wins!</strong>");
        playerWins++;
      } if(compPick === "F") {
        display("Computer: Fireball");
        display("<strong>Tie! Player and Computer both picked Fireball.</srong>");
        tieCount++;
      }
      break;
    default:
  }

  displayScoreboard("<strong>SCOREBOARD<strong><HR>");
  displayScoreboard("Player Wins = " + playerWins + "<br>Computer Wins = " + compWins + "<br>Ties: " + tieCount);

}

var controls_div = document.getElementById('controls');
var result_div = document.getElementById('results');
var scoreboard_div = document.getElementById('scoreboard');
var playButton = document.createElement('button');
  playButton.innerHTML = "Play";
  playButton.onclick = result;
  
  controls_div.appendChild(playButton);

function display(mssg) {
  var result_p = document.createElement('p');
  result_p.innerHTML += mssg; 
  result_div.appendChild(result_p);
}

function displayScoreboard(score) {
  var scoreboard_p = document.createElement('p');
  scoreboard_p.innerHTML += score;
  scoreboard_div.appendChild(scoreboard_p);
}

function clearDisplay () {
  result_div.innerHTML = "";
  scoreboard_div.innerHTML = "";
}

})();

