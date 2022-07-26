alert("Type 'game()' in console to start match.");

function game(){

let userScore = 0;
let pcScore = 0;

for(let i = 0; i < 5; i++){
  let rResult = round();
  if (typeof rResult === "string"){
    console.log(rResult)
    if (rResult.slice(0, 7) === "You Win"){
      userScore++;
      console.log(`You: ${userScore} Computer: ${pcScore}`);
    }
    else if(rResult.slice(0, 8) === "You Lose"){
      pcScore++;
      console.log(`You: ${userScore} Computer: ${pcScore}`);
    }
    else {
      console.log(`You: ${userScore} Computer: ${pcScore}`);
    }
  }
}
if (userScore > pcScore){
  return(`You: ${userScore} Computer: ${pcScore}. You Win the match!`);
}
else if (pcScore > userScore){
  return(`You: ${userScore} Computer: ${pcScore}. You Lose the match!`);
}
else{
  return(`You: ${userScore} Computer: ${pcScore}. The Match is a Tie!`);
}

}


function getUserChoice() {
let userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors"){
  alert("invalid choice please select rock paper or scissors.");
  getUserChoice();
}
else{
  return userChoice;
}
}



function getComputerChoice() {
  let random = Math.floor(Math.random()*3);
  switch (random){
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}

function round () {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice)
  {
    return(`Tie!, ${userChoice} ties ${computerChoice}`);  
  }
  else{
    switch (userChoice){
      case "rock":
        switch (computerChoice){
          case "paper":
            return("You Lose, rock gets eaten by paper!");
          default:
            return("You Win, rock smashes scissors!");
        }
      case "paper":
        switch (computerChoice){
          case "rock":
            return("You Win, paper eats rock!");
          default:
            return("You Lose, paper gets cut up by scissors!");
        }
      //scissors option below
      default:
        switch (computerChoice){
          case "rock":
            return("You Lose, scissors gets smashes by rock!");
          default:
            return("You Win, scissors cuts up paper!");
        }
    }
  }
}

