// computer chooses

(function() { // self-invoking anonymous function
  // all code goes here

var userChoice;
var compChoice;

// noprotect
function userChooses() {
  
  do {
    userChoice = prompt("Select [R]ock, [P]aper or [F]ireball ('R', 'P', or 'F'):");
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
  
  //display("User: " + userPick);
  //display("computer: " + compPick);
  
  switch(userPick) {
    case "R":
      display("User: " + userPick);
      display("computer: " + compPick);
      if(compPick === "P") {
        display("Paper covers Rock");
        display("Computer Wins!");
      } else if(compPick === "F") {
        display("Rock blocks Fireball");
        display("User Wins!");
      } else if(compPick === "R") {
        display("Tied! User and Computer both picked Rock.");
      }
      break;
    case "P":
      display("User: " + userPick);
      display("computer: " + compPick);
      if(compPick === "R") {
        display("Paper covers Rock");
        display("User Wins!");
      } else if(compPick === "F") {
        display("Fireball engulfs Paper");
        display("Computer Wins!");
      } if(compPick === "P") {
        display("Tied! User and Computer both picked Paper.");
      }
      break;
    case "F":
      display("User: " + userPick);
      display("computer: " + compPick);      
      if(compPick === "R") {
        display("Rock blocks Fireball");
        display("Computer Wins!");
      } else if(compPick === "P") {
        display("Fireball engulfs Paper");
        display("User Wins!");
      } if(compPick === "F") {
        display("Tied! User and Computer both picked Fireball.");
      }
      break;
    default:
  }
  
  
}
var result_div = document.getElementById('results');
var startButton = document.createElement('button');
  startButton.innerHTML = "start";
  startButton.onclick = result;
  
  controls.appendChild(startButton);

function display(mssg) {
  // var result_div = document.getElementById('results');
  var result_p = document.createElement('p');
  result_p.innerHTML += mssg; 
  result_div.appendChild(result_p);
}

function clearDisplay () {
  result_div.innerHTML = "";
}
// do {
//   result();
// }
// while();

})();

