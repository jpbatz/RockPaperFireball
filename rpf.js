// computer chooses

var compChoice;
var userChoice;

function userChooses() {
  prompt("Rock, Paper or Fireball?");
  console.log(userChoice);
}

function computerChooses() {
  compChoice = Math.floor(Math.random()*3);
  console.log(compChoice);
}

function result () {
  //if?
}

function display (result) {
  console.log();
}