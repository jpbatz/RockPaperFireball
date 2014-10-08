// computer chooses

(function() { // self-invoking anonymous function
  // all code goes here

var userChoice,
    compChoice,
    userWins = 0,
    compWins = 0;

// noprotect
function userChooses() {
  
  do {
    userChoice = prompt("Select [R]ock, [P]aper or [F]ireball:","Type 'R', 'P', or 'F'");
    if ((userChoice.toUpperCase() !== "R") && (userChoice.toUpperCase() !== "P") && (userChoice.toUpperCase() !== "F")) {
      alert("Try using R, P, or F. No messing around!");
    }
  } while ((userChoice.toUpperCase() !== "R") && (userChoice.toUpperCase() !== "P") && (userChoice.toUpperCase() !== "F"));
  
  return userChoice.toUpperCase();
}

function computerChooses() {
  var wag = Math.floor(Math.random()*3);
  switch(wag) {
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
  var userPick = userChooses();
  var compPick = computerChooses();
  
  switch(userPick) {
    case "R":
      display("User: Rock");
      if(compPick === "P") {
        display("Computer: Paper");
        display("Paper covers Rock");
        display("Computer Wins!");
        compWins++;
      } else if(compPick === "F") {
        display("Computer: Fireball");
        display("Rock blocks Fireball");
        display("User Wins!");
        userWins++;
      } else if(compPick === "R") {
        display("Computer: Rock");
        display("Tied! User and Computer both picked Rock.");
      }
      break;
    case "P":
      display("User: Paper");
      if(compPick === "R") {
        display("Computer: Rock");
        display("Paper covers Rock");
        display("User Wins!");
        userWins++;
      } else if(compPick === "F") {
        display("Computer: Fireball");
        display("Fireball engulfs Paper");
        display("Computer Wins!");
        compWins++;
      } if(compPick === "P") {
        display("Computer: Paper");
        display("Tied! User and Computer both picked Paper.");
      }
      break;
    case "F":
      display("User: Fireball");      
      if(compPick === "R") {
        display("Computer: Rock");
        display("Rock blocks Fireball");
        display("Computer Wins!");
        compWins++;
      } else if(compPick === "P") {
        display("Computer: Paper");
        display("Fireball engulfs Paper");
        display("User Wins!");
        userWins++;
      } if(compPick === "F") {
        display("Computer: Fireball");
        display("Tied! User and Computer both picked Fireball.");
      }
      break;
    default:
  }

  displayScoreboard("      User Wins = " + userWins + "<br>Computer Wins = " + compWins);

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

