
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
playing = true;

// Random function which chosing random number for the dice roll between 1 - 6
const randomDice = () => {
    randomNumber = Math.ceil((Math.random() * 6));
    return randomNumber;
}

// Cube picture function. If random number is chosen picture of the dice is changed
const displayCube = (randomNumber) => {
    diceImage.src = `./images/dice-six-faces-${classNumbers[randomNumber]}.png`;
    diceSpace.style.opacity = '1';
}

// Function to check the resunt of the game
const resultCondition = () => {
    {
        if (totalPlayer2 > totalPlayer1) {
            messageField.textContent = `Player 2 wins 🏆`;
            border2.style.border = '2px solid yellow';

        } else if (totalPlayer2 === totalPlayer1){
            messageField.textContent = `DRAW ⚡`;
            border1.style.border = '2px solid green'; 
            border2.style.border = '2px solid green';  
                    
        }else {messageField.textContent = `Player 1 wins 🏆`;
            border1.style.border = '2px solid yellow';
        }
        // After result check roll buton is being disabled
        roll.setAttribute("disabled", "");
}
}


const switchPlayer = (choice) => {
    const player1 = () => {
        score = randomDice();
        displayCube(score);
        messageField.textContent = `PLAYER 1`;
        score1 = score;
        displayCube(score1);
        // Total is counted by adding score 
        totalPlayer1 += score1;
        diceScorePlayer1.textContent = totalPlayer1;
        // Hold button. If pressed total score is saved. Player 1 can't playe
        // anymore. Player 2 turn
        hold.addEventListener('click', () =>{
            const finalScore1 = totalPlayer1;
            totalScorePlayer1.textContent = finalScore1;
            totalScorePlayer1.style.opacity = '1';
            messageField.textContent = `PLAYER 2`;
            // playing is changed to false so player 2 turn
            playing = false;
            border1.style.border = '1px solid white';
            border2.style.border = '2px solid red';
        } 
        
        ) 
        
        if (score1 === 1) {
            // If dice score is 1 result is reseted to 0
            // and player can't play anymore
            totalPlayer1 = 0;
            totalScorePlayer1.textContent = 0;
            diceScorePlayer1.textContent = 0;
            totalScorePlayer1.style.opacity = '1';
            messageField.textContent = `PLAYER 2`;
            playing = false;
            border1.style.border = '1px solid white';
            border2.style.border = '2px solid red';
        }
    }

    const player2 = () => {
        score = randomDice();
        displayCube(score);
        score2 = score;
        displayCube(score2);
        totalPlayer2 += score2;
        diceScorePlayer2.textContent = totalPlayer2;

        hold.addEventListener('click', () =>{
            const finalScore2 = totalPlayer2;
            totalScorePlayer2.textContent = finalScore2;
            totalScorePlayer2.style.opacity = '1';
            if (totalScorePlayer1.style.opacity === '1' && totalScorePlayer2.style.opacity === '1');
            // Result condition check
            {resultCondition()};

        } 
        
        ) 
    
        if (score2 === 1) {
            totalPlayer2 = 0;
            totalScorePlayer2.textContent = 0;
            diceScorePlayer2.textContent = 0;
            totalScorePlayer2.style.opacity = '1';
            // Result condition check
            resultCondition();
        }
    }
    // If pareamter is 1 in switch function player 1 is playing
    // else player2
    if (choice === 1) {    
        border1.style.border = '2px solid red';
        player1();
    }
    
    else{
        player2(); 
    }


}   
    

// New game function with the condition. If playing = true player 1 is playing. Else 
// player 2 turn
const newGame = () => {
    roll.addEventListener('click', () => {
        messageField.style.opacity = '1';
        if (playing) {     
            switchPlayer(1);
        } else {
            
            switchPlayer(2);          
        }
    })
}

newGame();

// Reset button which is refreshing the page
resetBtn.addEventListener('click', () => {
    location.reload();
})







    









