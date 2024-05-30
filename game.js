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
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");


function selectKnockout(number) {
    knockoutNumber = number;
    document.getElementById('knockout-number').textContent = knockoutNumber;
    document.getElementById('select-knockout').style.display = 'none';
    document.getElementById('game-play').style.display = 'block';
    document.getElementById('game-play').style.opacity = '1';
}

function rollDice() {
    const dice1_value = Math.floor(Math.random() * 6)+1;
    const dice2_value = Math.floor(Math.random() * 6)+1;
    const result = dice1_value + dice2_value;
    let images = ["d1.png", "d2.png", "d3.png", "d4.png", "d5.png", "d6.png"];

    dice1.src = images[dice1_value - 1];
    dice2.src = images[dice2_value - 1];

    document.getElementById('dice-result').textContent = `You rolled ${dice1_value} and ${dice2_value}. Total: ${result}.`;

    if (result === knockoutNumber) {
        document.getElementById('final-score').textContent = totalScore;
        document.getElementById('game-play').style.opacity = '0.5';
        document.getElementById("rollBtn").disabled = true;
        document.getElementById('game-over').style.display = 'block';
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
    document.getElementById('game-over').style.display = 'none';
    document.getElementById("rollBtn").disabled = false;
}
