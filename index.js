//initializing some values
let totalAttempts = 5;
let attempts = 0 ;
let totalWon = 0 ;
let totalLost = 0 ;


//selecting element
const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const guessingNumber = document.querySelector('#guessingNumber');
const checkButton = document.querySelector('#checkBtn');
const resultText = cardBody.querySelector('.resultText');
const lostWonMsg = document.createElement("p")
const remainingAttempts = cardBody.querySelector('.remainingAttempts');

form.addEventListener("submit", function(event){
    event.preventDefault()
    // console.log('submitted');
    checkResult(guessingNumber.value);
    attempts++;
    
    if(attempts === 5) {
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    else{
        // checkResult(guessingNumber.value);
        remainingAttempts.innerHTML =`Remaining Attempts ${totalAttempts - attempts}`
    }
    guessingNumber.value ="";

})

function checkResult(guessingNumber){
    // console.log(guessingNumber);
    const randomNumber = getRandomNumber(5)
    // console.log(randomNumber);
    if(guessingNumber == randomNumber){
        resultText.innerHTML = 'You have won!'
        totalWon = totalWon + 1;
    }else{
        resultText.innerHTML = `You have lost! The number was ${randomNumber}.`
        totalLost = totalLost + 1;
    }

    lostWonMsg.innerHTML = `Won: ${totalWon}, Lost: ${totalLost}`
    lostWonMsg.classList.add("large-text")
    cardBody.appendChild(lostWonMsg)
}

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit) + 1;
}