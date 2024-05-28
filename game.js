document.addEventListener('DOMContentLoaded', (event) => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (user) {
        document.getElementById('user-name').textContent = user.name;
    } else {
        window.location.href = 'index.html';
    }
});

let knockoutNumber;
let totalScore = 0;

function selectKnockout(number) {
    knockoutNumber = number;
    document.getElementById('knockout-number').textContent = knockoutNumber;
    document.getElementById('select-knockout').style.display = 'none';
    document.getElementById('game-play').style.display = 'block';
}

function rollDice() {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;
    const result = dice1 + dice2;
    document.getElementById('dice-result').textContent = `You rolled ${dice1} and ${dice2}. Total: ${result}.`;

    if (result === knockoutNumber) {
        alert(`You lost! Your total score is ${totalScore}.`);
        resetGame();
    } else {
        totalScore += result;
        document.getElementById('total-score').textContent = totalScore;
    }
}

function resetGame() {
    totalScore = 0;
    document.getElementById('total-score').textContent = totalScore;
    document.getElementById('dice-result').textContent = '';
    document.getElementById('select-knockout').style.display = 'block';
    document.getElementById('game-play').style.display = 'none';
}
