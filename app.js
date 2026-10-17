//we assume at the starting the score is 0
let userScore = 0;
let computerScore = 0;

//connecting the choices
const choices = document.querySelectorAll(".choice");

//connecting msg box
const msg = document.querySelector("#msg");

//connecting score-board
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

//click event add to the choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) => {
    console.log("userchoice=",userChoice);
    //generate computer choice
    const computerChoice = genComputerChoice();
    console.log("computerchoice=",computerChoice);

    //lose and win conditions
    if(userChoice === computerChoice){
        console.log("game is draw");
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors,paper
            userWin = computerChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock,scissors
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            //rock,paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin); 
    }
}

//computer generate random choice
const genComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

//draw game
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
}

//this condition is use for score-board and msg should be print
const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You Win.";
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = "You Lose.";
        msg.style.backgroundColor = "red";
    }
}