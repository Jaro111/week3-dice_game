
// Dom varioables
const diceImage = document.getElementById("diceImage");
const diceSpace = document.getElementById("diceSpace");
const roll = document.getElementById("roll");
const diceScorePlayer1 = document.getElementById("diceScorePlayer1");
const totalScorePlayer1 = document.getElementById("totalScorePlayer1");
const diceScorePlayer2 = document.getElementById("diceScorePlayer2");
const totalScorePlayer2 = document.getElementById("totalScorePlayer2");
const messageField = document.getElementById("currentPlayer");
const hold = document.getElementById("hold");
const resetBtn = document.getElementById("newGame");
const border1 = document.getElementById("player1Field");
const border2 = document.getElementById("player2Field");

// Class with numbers and assigned strings for the link change
const classNumbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six"
};

// Game variables
let score = 0;
let score1 = 0;
let totalPlayer1 = 0;
let score2 = 0;
let totalPlayer2 = 0;
let finalScore1 = 0;
let finalScore2 = 0;
playing = true;


// Random function which chosing random number for the dice roll between 1 - 6
const randomDice = () => {
    randomNumber = Math.ceil((Math.random() * 6));
    return randomNumber;
}

// Cube picture function. If random number is chosen picture of the dice is changed. Parameter is randomnumber
// And number string word is from the class value where key is integer number
const displayCube = (randomNumber) => {
    diceImage.src = `./images/dice-six-faces-${classNumbers[randomNumber]}.png`;
    diceSpace.style.opacity = '1';
}

// Roll button will be disactvated so player can't play anymore
const disactivateButton = () => {
    roll.setAttribute("disabled", "");
    
}


// Result resultCondition. If score one of the players will be greater than 20 player wins

const resultCondition = () => {
    {
        if (finalScore1 > 20 && finalScore1 > finalScore2 ) {
            messageField.textContent = `Player 1 wins 🏆`;
            border1.style.border = '2px solid yellow';
            disactivateButton()

        } else if (finalScore2 > 20 && finalScore2 > finalScore1) {
            messageField.textContent = `Player 2 wins 🏆`;
            border2.style.border = '2px solid yellow';
            disactivateButton()
             
        } 

               
}
}

// Function to swich players. If playing = true player 1 rolls. Else player 2 turn
// Player can roll as many tines as he want but if he will get 1 result will be reseted to 0
// Player can press hold any time to save the current score and let player 2 to play
// Player wins if score will be greater than 20. But player have to press hold to and the game and win if result is over 20
// Player 1 start the game
const switchPlayer = () => {
        if (playing) {
            border1.style.border = '1px solid red';
            score = randomDice();
            displayCube(score);
            messageField.textContent = `PLAYER 1`;
            score1 = score;
            displayCube(score1);
            // Total is counted by adding score of rice rolls
            totalPlayer1 += score1;
            diceScorePlayer1.textContent = totalPlayer1;
            // If dice score is 1 result is reseted to 0
            

            if (score1 === 1) {
                // If dice score is 1 result is reseted to 0
                totalPlayer1 = 0;
                totalScorePlayer1.style.opacity = '1';
                totalScorePlayer1.textContent = finalScore1;
                diceScorePlayer1.textContent = 0;
                messageField.textContent = `PLAYER 2`;
                // Condition playing = false so player 2 turn
                playing = false;
                border1.style.border = '1px solid white';
                border2.style.border = '2px solid red';
            }
        } else {

            score = randomDice();
            displayCube(score);
            score2 = score;
            displayCube(score2);
            // Total is counted by adding score of rice rolls
            totalPlayer2 += score2;
            diceScorePlayer2.textContent = totalPlayer2
            


            // If dice score is 1 result is reseted to 0
            if (score2 === 1) {
                // If dice score is 1 result is reseted to 0
                totalPlayer2 = 0;
                totalScorePlayer2.style.opacity = '1';
                totalScorePlayer2.textContent = finalScore2;
                diceScorePlayer2.textContent = 0;
                messageField.textContent = `PLAYER 1`;
                // Condition playing = true so player 1 turn
                playing = true;
                border1.style.border = '1px solid red';
                border2.style.border = '2px solid white';      
            }
        }
           
    }


// Hold button. If player press hold current score is saved and added to total score if player have any saved score
hold.addEventListener('click', () =>{
    if (playing) {
        finalScore1 += totalPlayer1;
        totalPlayer1 = 0;
        diceScorePlayer1.textContent = 0;
        totalScorePlayer1.textContent = finalScore1;
        totalScorePlayer1.style.opacity = '1';
        border1.style.border = '1px solid white';
        border2.style.border = '2px solid red';
        messageField.textContent = `PLAYER 2`;
        // result condition check
        resultCondition();
        // Condition playing = false so player 2 turn
        playing = false;
    }
        

    else {
        finalScore2 += totalPlayer2;
        totalPlayer2 = 0;
        diceScorePlayer2.textContent = 0;
        totalScorePlayer2.textContent = finalScore2;
        totalScorePlayer2.style.opacity = '1';
        border1.style.border = '1px solid red';
        border2.style.border = '2px solid white';
        messageField.textContent = `PLAYER 1`;
        // result condition check
        resultCondition();
        // Condition playing = true so player 1 turn
        playing = true;

    }
    
})


// New game function. If roll is pressed "Player 1" message is displayed. So player 1 start the game
const newGame = () => {
    roll.addEventListener('click', () => {
        switchPlayer()
        messageField.style.opacity = '1';

})}

newGame();

// Reset button which is refreshing the page and reseting all scores
resetBtn.addEventListener('click', () => {
    location.reload();
})

    








