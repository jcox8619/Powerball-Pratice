document.getElementById("play-btn").addEventListener("click", function () {
    let playerNumbers = document.querySelectorAll(".player-number");
    let powerball = document.querySelector(".powerball");

    let chosenNumbers = [];
    playerNumbers.forEach(input => {
        let num = parseInt(input.value);
        if (num >= 1 && num <= 69) {
            chosenNumbers.push(num);
        }
    });

    let chosenPowerball = parseInt(powerball.value);
    if (!(chosenPowerball >= 1 && chosenPowerball <= 26)) {
        alert("Invalid PowerBall number!");
        return;
    }

    if (chosenNumbers.length !== 5) {
        alert("Please select 5 numbers between 1 and 69.");
        return;
    }

    let winningNumbers = generateWinningNumbers();
    let winningPowerball = Math.floor(Math.random() * 26) + 1;

    document.getElementById("winning-numbers").textContent = winningNumbers.join(", ") + " | " + winningPowerball;
    document.getElementById("your-picks").textContent = chosenNumbers.join(", ") + " | " + chosenPowerball;
    
    checkWin(chosenNumbers, chosenPowerball, winningNumbers, winningPowerball);

    // Clear input fields after showing the results
    setTimeout(() => {
        playerNumbers.forEach(input => input.value = "");
        powerball.value = "";
    }, 3000);
});

function generateWinningNumbers() {
    let numbers = new Set();
    while (numbers.size < 5) {
        numbers.add(Math.floor(Math.random() * 69) + 1);
    }
    return [...numbers];
}

function checkWin(playerNums, playerPB, winNums, winPB) {
    let matchCount = playerNums.filter(num => winNums.includes(num)).length;
    let powerballMatch = playerPB === winPB;
    let resultMessage = `You matched ${matchCount} number(s)${powerballMatch ? " and the PowerBall!" : "."}`;

    document.getElementById("result-message").textContent = resultMessage;
}
