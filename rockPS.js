let userScore = 0;
let pcScore = 0;


const picks = document.querySelectorAll(".pick")
picks.forEach(function(pick){
  pick.addEventListener('click', round)
})



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

function round (e) {
  const userChoice = this.textContent.toLowerCase();
  const computerChoice = getComputerChoice();
  console.log(userChoice);
  const result = document.querySelector('.result');
  if (userChoice === computerChoice)
  {
    result.innerHTML = `TIE<br><br>USER: ${userScore} | COMPUTER: ${pcScore}`;

  }
  else{
    switch (userChoice){
      case "rock":
        switch (computerChoice){
          case "paper":
            result.innerHTML = `You Lose, rock gets eaten by paper!
            <br><br>USER: ${userScore} | COMPUTER: ${++pcScore}`;
            break;
          default:
            result.innerHTML = `You Win, rock smashes scissors!
            <br><br>USER: ${++userScore} | COMPUTER: ${pcScore}`;
        }break;
      case "paper":
        switch (computerChoice){
          case "rock":
            result.innerHTML = `You Win, paper eats rock!
            <br><br>USER: ${++userScore} | COMPUTER: ${pcScore}`;
            break;
          default:
            result.innerHTML = `You Lose, paper gets cut up by scissors!
            <br><br>USER: ${userScore} | COMPUTER: ${++pcScore}`;
        }break;
      //scissors option below
      default:
        switch (computerChoice){
          case "rock":
            result.innerHTML = `You Lose, scissors gets smashes by rock!
            <br><br>USER: ${userScore} | COMPUTER: ${++pcScore}`;
            break;
          default:
            result.innerHTML = `You Win, scissors cuts up paper!
            <br><br>USER: ${++userScore} | COMPUTER: ${pcScore}`;
        }
    }
  }
  if(userScore === 5){
    result.innerHTML = `You Win The Match!
    <br><br>USER: ${userScore} | COMPUTER: ${pcScore}`;
    picks.forEach(function(pick){
      pick.removeEventListener('click', round)});
  }
  else if (pcScore === 5){
  result.innerHTML = `You Lose The Match
  <br><br>USER: ${userScore} | COMPUTER: ${pcScore}`;
  picks.forEach(function(pick){
    pick.removeEventListener('click', round)});
  };
}

