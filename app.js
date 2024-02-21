let choices = document.querySelectorAll(".choice");
let message = document.querySelector(".msg");
let userScorecard = document.querySelector("#user-score");
let compScorecard = document.querySelector("#comp-score");

let userScore = 0; // stores user score.
let compScore = 0; // stores computer score.

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        let compChoice = generateCompChoice();

        playGame(userChoice, compChoice);
    });
});

const playGame = (userChoice, compChoice) => {
    // no one wins.
    if (userChoice == compChoice) {
        message.innerHTML = `Game Tied! Play Again. <p>You: ${userChoice}, Computer: ${compChoice}</p>`;
        message.setAttribute("class", "msg draw");
    }
    // user wins.
    else if ((userChoice == "rock" && compChoice == "scissors")
        || (userChoice == "paper" && compChoice == "rock")
        || (userChoice == "scissors" && compChoice == "paper")) {
        message.innerHTML = `You Win! 🎉 <p>You: ${userChoice}, Computer: ${compChoice}</p>`;
        userScore++;
        userScorecard.innerHTML = userScore;
        message.setAttribute("class", "msg win");
    }
    // computer wins.
    else {
        message.innerHTML = `You Lose! ☹️ <p>You: ${userChoice}, Computer: ${compChoice}</p>`;
        compScore++;
        compScorecard.innerHTML = compScore;
        message.setAttribute("class", "msg lose");
    }
};

const generateCompChoice = () => {
    // array of all possible choices [rock, paper, scissors]
    const options = ["rock", "paper", "scissors"];

    // generates a random number from 0 to 2. Using it as array index.
    const random = Math.floor(Math.random() * 3);

    return options[random];
};
