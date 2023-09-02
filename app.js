let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('userScore');
const computerScore_span = document.getElementById('compScore');
const scoreBoard_div = document.querySelector('.scoreBoard');
const result_id = document.getElementById('result');
const rock_div = document.getElementById("r");
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const actionMessage_div = document.querySelector('#actionMessage');
const popupContainer_div = document.querySelector('.popupContainer');
const computerImageChoice = document.getElementById('computer_image_choice');
const computerSelection = document.getElementById('computerSelection');



rock_div.addEventListener('click', () => 
{
    game('r');
})

paper_div.addEventListener('click', () => 
{
    game('p');
})

scissors_div.addEventListener('click', () => 
{
    game('s');
})

function checkGameOver() {
    if (userScore === 10 || computerScore === 10) {
        // Game over, show the overlay and play again pop-up
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('playAgainPopup').style.display = 'block';

        // Disable Rock, Paper, Scissors buttons
        rock_div.removeEventListener('click', game);
        paper_div.removeEventListener('click', game);
        scissors_div.removeEventListener('click', game);
    }
}
document.getElementById('playAgainButton').addEventListener('click', () => {
    // Reload the page to start a new game
    location.reload();
});

function game(userChoice){
    compChoices = ['r', 'p','s'];
    compChoice = compChoices[Math.floor(Math.random() * 3)];
    let wordChoices = wordChoice(userChoice, compChoice); // First element is the user choice, second element is the computer choice.
    popup(compChoice);

    if(userChoice === compChoice){
        tie();
    }
    else if(userChoice === 'r' && compChoice ==='s'){
        userWin(wordChoices);
    }
    else if(userChoice === 'r' && compChoice === 'p'){
        userLose(wordChoices);
    }
    else if(userChoice === 'p' && compChoice === 'r'){
        userWin(wordChoices);
    }
    else if(userChoice === 'p' && compChoice ==='s'){
        userLose(wordChoices);
    }
    else if(userChoice ==='s' && compChoice === 'p'){
        userWin(wordChoices);
    }
    else if(userChoice ==='s' && compChoice === 'r'){
        userLose(wordChoices);
    }

    if (userScore === 10 || computerScore === 10) {
            checkGameOver();
     }
}

function endGame(){
    if(userScore === 10){
        
        location.reload();
    }
    else if(computerScore === 10){
        location.reload();
    }
}

function wordChoice( userWord, compWord ){
    let wordChoices = [];
    switch(userWord){
        case 'r': wordChoices.push('Rock'); break;
        case 'p': wordChoices.push('Paper'); break;
        case's': wordChoices.push('Scissors'); break;
    }
    switch(compWord){
        case 'r': wordChoices.push('Rock'); break;
        case 'p': wordChoices.push('Paper'); break;
        case's': wordChoices.push('Scissors'); break;
    }
    return wordChoices;
}

function popup(compChoice){
    switch(compChoice){
        case 'r': 
        computerImageChoice.src = 'assets/rock.png';
        computerSelection.innerHTML = `Computer chooses Rock!`; 
        break;
        case 'p': 
        computerImageChoice.src = 'assets/paper.png';
        computerSelection.innerHTML = `Computer chooses Paper!`; 
        break;
        case's': 
        computerImageChoice.src = 'assets/scissors.png';
        computerSelection.innerHTML = `Computer chooses Scissors!`; 
        break;
    }
    popupContainer_div.style.display  = 'block';
}

function userWin (wordChoices){
    console.log('User wins');
    userScore++;
    userScore_span.innerHTML = userScore;
    result_id.innerHTML = `${wordChoices[0]} beats ${wordChoices[1]}!`;
    

}

function userLose (wordChoices){
    console.log('User loses')
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_id.innerHTML = `${wordChoices[0]} loses to ${wordChoices[1]}!`;

}

function tie (){
    console.log('Tie');
    result_id.innerHTML = `It's a tie!`;
}
