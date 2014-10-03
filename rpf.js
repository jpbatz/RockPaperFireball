// computer chooses

var userChoice;
var compChoice;
var winner;
var loser;
// noprotect
function userChooses() {
  
  do {
    userChoice = prompt("Select [R]ock, [P]aper or [F]ireball ('R', 'P', or 'F'):");
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
  var userPick = userChooses();
  var compPick = computerChooses();
  
  console.log("User: " + userPick);
  console.log("computer: " + compPick);
  
  switch(userPick) {
    case "R":
      console.log("User: " + userPick);
      console.log("computer: " + compPick);
      if(compPick === "P") {
        console.log("Paper covers Rock");
        console.log("Computer Wins!");
      } else if(compPick === "F") {
        console.log("Rock blocks Fireball");
        console.log("User Wins!");
      } else if(compPick === "R") {
        console.log("Tied! User and Computer both picked Rock.");
      }
      break;
    case "P":
      console.log("User: " + userPick);
      console.log("computer: " + compPick);
      if(compPick === "R") {
        console.log("Paper covers Rock");
        console.log("User Wins!");
      } else if(compPick === "F") {
        console.log("Fireball engulfs Paper");
        console.log("Computer Wins!");
      } if(compPick === "P") {
        console.log("Tied! User and Computer both picked Paper.");
      }
      break;
    case "F":
      console.log("User: " + userPick);
      console.log("computer: " + compPick);      
      if(compPick === "R") {
        console.log("Rock blocks Fireball");
        console.log("Computer Wins!");
      } else if(compPick === "P") {
        console.log("Fireball engulfs Paper");
        console.log("User Wins!");
      } if(compPick === "F") {
        console.log("Tied! User and Computer both picked Fireball.");
      }
      break;
    default:
  }
  
  
}

function display(result) {
  console.log();
  var winner = result();
}

result();
