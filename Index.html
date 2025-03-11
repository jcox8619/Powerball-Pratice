<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PowerBall Practice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: linear-gradient(90deg, #0d1b2a, #1b263b);
            color: white;
        }
        h1 {
            color: #ffcc00;
        }
        .container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
        }
        input {
            width: 50px;
            padding: 5px;
            font-size: 16px;
            text-align: center;
        }
        button {
            padding: 10px;
            margin-top: 10px;
            background-color: #ffcc00;
            border: none;
            cursor: pointer;
            font-size: 18px;
        }
        .lottery-balls {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
        .ball {
            width: 40px;
            height: 40px;
            line-height: 40px;
            margin: 5px;
            border-radius: 50%;
            background-color: white;
            color: black;
            font-size: 20px;
            font-weight: bold;
            display: inline-block;
        }
        .powerball {
            background-color: red;
            color: white;
        }
    </style>
</head>
<body>

    <h1>PowerBall Practice</h1>
    <div class="container">
        <p>Pick 5 numbers (1-69) and 1 Powerball (1-26)</p>
        <div id="inputs">
            <input type="number" id="num1" min="1" max="69">
            <input type="number" id="num2" min="1" max="69">
            <input type="number" id="num3" min="1" max="69">
            <input type="number" id="num4" min="1" max="69">
            <input type="number" id="num5" min="1" max="69">
            <input type="number" id="powerball" min="1" max="26" class="powerball">
        </div>
        <button onclick="playGame()">Play</button>
        <div id="result"></div>
    </div>

    <script>
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function generateWinningNumbers() {
            let numbers = new Set();
            while (numbers.size < 5) {
                numbers.add(getRandomNumber(1, 69));
            }
            let powerball = getRandomNumber(1, 26);
            return { numbers: Array.from(numbers), powerball };
        }

        function playGame() {
            let userNumbers = [];
            for (let i = 1; i <= 5; i++) {
                let num = parseInt(document.getElementById(`num${i}`).value);
                if (isNaN(num) || num < 1 || num > 69 || userNumbers.includes(num)) {
                    alert("Please enter 5 unique numbers between 1 and 69.");
                    return;
                }
                userNumbers.push(num);
            }

            let userPowerball = parseInt(document.getElementById("powerball").value);
            if (isNaN(userPowerball) || userPowerball < 1 || userPowerball > 26) {
                alert("Please enter a valid Powerball number between 1 and 26.");
                return;
            }

            let winningNumbers = generateWinningNumbers();
            displayResults(userNumbers, userPowerball, winningNumbers);
        }

        function displayResults(userNumbers, userPowerball, winningNumbers) {
            let resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `
                <h2>Winning Numbers:</h2>
                <div class="lottery-balls">
                    ${winningNumbers.numbers.map(num => `<div class="ball">${num}</div>`).join('')}
                    <div class="ball powerball">${winningNumbers.powerball}</div>
                </div>
                <h2>Your Picks:</h2>
                <div class="lottery-balls">
                    ${userNumbers.map(num => `<div class="ball">${num}</div>`).join('')}
                    <div class="ball powerball">${userPowerball}</div>
                </div>
            `;
        }
    </script>

</body>
</html>
