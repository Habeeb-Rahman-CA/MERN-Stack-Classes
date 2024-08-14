let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = (message) => {
    document.querySelector(".message").textContent = message
}

document.querySelector(".score").textContent = score;

//Check button
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    if (!guess) {
        displayMessage("⛔ No Number")
    } else if (guess === secretNumber) {
        displayMessage("✅ Correct Number")
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = '#60b347';
        document.querySelector(".number").style.width = "30rem";
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "⬆️ Too High" : "⬇️ Too Low")
            score--
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("You Lost the game")
            document.querySelector("body").style.backgroundColor = '#FF0000';
            document.querySelector(".score").textContent = 0;
        }
    }
})

//Again button
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = score;
    displayMessage("Start guessing...")
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = '#222';
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = ''
})