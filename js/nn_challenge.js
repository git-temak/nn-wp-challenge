let playerScore = 0;
let computerScore = 0;
let computerPreference;

// Set the computer's preference randomly at the start of the game
function setComputerPreference() {
    let preferences = ['cavalry', 'archers', 'pikemen'];
    let index = Math.floor(Math.random() * 3);
    computerPreference = preferences[index];
}
setComputerPreference();

// Game logic for determining the winner of a round
function battle(playerUnit, computerUnit) {
    if (playerUnit === computerUnit) {
        return 'tie';
    } else if (playerUnit === 'cavalry' && computerUnit === 'archers' || playerUnit === 'archers' && computerUnit === 'pikemen' || playerUnit === 'pikemen' && computerUnit === 'cavalry') {
        playerScore++;
        return 'player';
    } else {
        computerScore++;
        return 'computer';
    }
}

// Display the scores on the page
function displayScores() {
    let scores = document.getElementById('scores');
    scores.innerHTML = 'Player: ' + playerScore + ' Computer: ' + computerScore;
}

// Get the units from the HTML
let cavalry = document.getElementById('cavalry');
let archers = document.getElementById('archers');
let pikemen = document.getElementById('pikemen');

// Add event listeners for when the player selects a unit
cavalry.addEventListener('click', function() {
    playRound('cavalry');
});
archers.addEventListener('click', function() {
    playRound('archers');
});
pikemen.addEventListener('click', function() {
    playRound('pikemen');
});

// Play a round of the game
let round = 0;

function playRound(playerUnit) {
    // End the game after 20 rounds
    if (round === 20) {
        alert('Game over! Final scores: Player: ' + playerScore + ' Computer: ' + computerScore + '\nWinner: ' + (playerScore > computerScore ? 'Player' : 'Computer'));
        return;
    }

    // Get the computer's unit choice
    let computerUnit;
    if (Math.random() < 0.5) {
        computerUnit = computerPreference;
    } else {
        let units = ['cavalry', 'archers', 'pikemen'];
        units.splice(units.indexOf(computerPreference), 1);
        let index = Math.floor(Math.random() * 2);
        computerUnit = units[index];
    }

    // Determine the winner of the round
    let result = battle(playerUnit, computerUnit);
    alert('You chose ' + playerUnit + '\nComputer chose ' + computerUnit + '\nResult: ' + (result === 'tie' ? 'Tie' : result === 'player' ? 'You win!' : 'Computer wins.'));

    // Update the scores on the page
    displayScores();

    round++;
}