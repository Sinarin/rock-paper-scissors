function game(){

let userScore = 0;
let pcScore = 0;

for(let i = 0; i < 5; i++){
  let rResult = round();
  if (typeof rResult === "string"){
    if (rResult.slice(0, 7) === "You Win"){
      userScore++;
      alert(`You: ${userScore} Computer: ${pcScore}`);
    }
    if(rResult.slice(0, 8) === "You Lose"){
      pcScore++;
      alert(`You: ${userScore} Computer: ${pcScore}`);
    }
    else {
      return(`You: ${userScore} Computer: ${pcScore}`);
    }
  }
}
if (userScore > pcScore){
  alert(`You: ${userScore} Computer: ${pcScore}
You Win the match!`);
}
else if (pcScore > userScore){
  alert(`You: ${userScore} Computer: ${pcScore}
You Lose the match!`);
}
else{
  alert(`You: ${userScore} Computer: ${pcScore}
The Match is a Tie!`);
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
    alert(`Tie!, ${userChoice} ties ${computerChoice}`);
    return(`Tie!, ${userChoice} ties ${computerChoice}`);
  }
  else{
    switch (userChoice){
      case "rock":
        switch (computerChoice){
          case "paper":
            alert("You Lose, rock gets eaten by paper!");
            return("You Lose, rock gets eaten by paper!");
            break;
          default:
            alert("You Win, rock smashes scissors!");
            return("You Win, rock smashes scissors!");
        }break;
      case "paper":
        switch (computerChoice){
          case "rock":
            alert("You Win, paper eats rock!");
            break;
          default:
            alert("You Lose, paper gets cut up by scissors!");
        }break;
      //scissors option below
      default:
        switch (computerChoice){
          case "rock":
            alert("You Lose, scissors gets smashes by rock!");
            break;
          default:
            alert("You Win, scissors cuts up paper!");
        }
    }
  }
}

