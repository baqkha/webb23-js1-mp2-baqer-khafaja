let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let name = "";


function displayName() {
    name = document.getElementById("nameInput").value;
    document.getElementById("nameDisplay").textContent = "Okej " + name + "! " + "Nu kör vi";

    let displayButton = document.getElementById("displayButtonAfterName");
    displayButton.classList.remove("hidden");
    
    let displayInput = document.getElementById("displayInput");
    displayInput.style.display = "none";
}


// Enter knapp
document.getElementById("displayInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        displayName();
    }
});

// Submit knapp
document.getElementById("displayInput").addEventListener("submit", function(event) {
    event.preventDefault();
    displayName();
});


function savePlayerChoice() {
    playerChoice = this.dataset.choice;
    let displayPlayerChoice = document.getElementById("displayPlayerChoice");
    displayPlayerChoice.textContent = name + "s val: " + playerChoice;

    computerChoiceAndDisplay();
}

function computerChoiceAndDisplay() {
    const choices = ["Sten", "Sax", "Påse"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];

    let displayComputerChoice = document.getElementById("displayComputerChoice");
    displayComputerChoice.textContent = "Datorns val: " + computerChoice;

    determineWinner();
}

function determineWinner() {
    let displayResult = document.getElementById("displayResult");

    if (playerChoice === computerChoice) {
        displayResult.textContent = "Oavgjort!";
        displayResult.style.display = "inline-block";
        displayResult.style.backgroundColor = "orange";
        displayResult.style.color = "black";
    }

    else if (
        playerChoice === "Sten" && computerChoice === "Sax" ||
        (playerChoice === "Sax" && computerChoice === "Påse") ||
        (playerChoice === "Påse" && computerChoice === "Sten")) {
            displayResult.textContent = name + " vann!"

            playerScore++;
            displayResult.style.display = "inline-block";
            displayResult.style.backgroundColor = "green";
            displayResult.style.color = "white";
        }

    else {
        displayResult.textContent = "Dator vann!"
        computerScore++;
        displayResult.style.display = "inline-block";
        displayResult.style.backgroundColor = "red";
        displayResult.style.color = "black";
    }

    let displayPlayerScore = document.getElementById("displayPlayerScore");
    displayPlayerScore.textContent = name + "s poäng: " + playerScore;


    let displayComputerScore = document.getElementById("displayComputerScore");
    displayComputerScore.textContent = "Datorns poäng: " + computerScore;

    if (playerScore === 3) {
        displayWinner(name);
        hideChoiceButtons()
    }

    else if (computerScore === 3) {
        displayWinner("Dator");
        hideChoiceButtons();
    }
}

function displayWinner(winner) {
    let displayWinner = document.getElementById("displayWinner");
    displayWinner.textContent = winner + " vann spelet!"


    if (winner === name) {
        displayWinner.style.color = "green";
    }

    else {
        displayWinner.style.color = "red";
    }

    let restartButton = document.getElementById("restartButton");
    restartButton.classList.remove("hidden");

    let displayContainer = document.getElementById("displayContainer");
    displayContainer.classList.add("hidden");
}

function restartGame() {
    playerChoice = null;
    computerChoice = null;
    playerScore = 0;
    computerScore = 0;

    let displayPlayerChoice = document.getElementById("displayPlayerChoice");
    displayPlayerChoice.textContent = name + "s val: ";


    let displayComputerChoice = document.getElementById("displayComputerChoice");
    displayComputerChoice.textContent = "Datorns val: ";

    let displayResult = document.getElementById("displayResult");
    displayResult.textContent = "";

    let displayPlayerScore = document.getElementById("displayPlayerScore");
    displayPlayerScore.textContent = name + "s poäng: " + playerScore;


    let displayComputerScore = document.getElementById("displayComputerScore");
    displayComputerScore.textContent = "Datorns poäng: " + computerScore;

    let displayWinner = document.getElementById("displayWinner");
    displayWinner.textContent = "";

    showChoiceButtons()

    let restartButton = document.getElementById("restartButton");
    restartButton.classList.add("hidden");

    let displayContainer = document.getElementById("displayContainer");
    displayContainer.classList.remove("hidden");
}

function hideChoiceButtons() {
    let choiceButtons = document.querySelectorAll(".choice-button");
    
    for (let button of choiceButtons) {
        button.disabled = true;
    }
}

function showChoiceButtons() {
    let choiceButtons = document.querySelectorAll(".choice-button");

    for (let button of choiceButtons) {
        button.disabled = false;
    }
}

function gameStart() {
    let gameButton = document.getElementById("gameButton");
    gameButton.style.display = "none";

    let hideNameDisplay = document.getElementById("nameDisplay");
    hideNameDisplay.style.display = "none";

    let displayChoices = document.getElementById("choiceButtons");
    displayChoices.classList.remove("hidden");

    let choiceButtons = document.querySelectorAll(".choice-button");

    for (let button of choiceButtons) {
        button.addEventListener("click", savePlayerChoice);
    }
}

