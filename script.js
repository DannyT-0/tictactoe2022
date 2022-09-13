const container = document.querySelector(".boardContainer");
const btnContainer = document.querySelector(".buttonContainer");
const nameContainer = document.querySelector(".nameContainer");
const playerOne = document.querySelector("#playerOne");
const playerTwo = document.querySelector("#playerTwo");
const startBtn = document.querySelector(".startGame");
const resetBtn = document.querySelector(".resetGame");
const rowBox = document.querySelectorAll(".rowBox");
const results = document.querySelector(".announceResult");

container.style.visibility = "hidden";

alert("Please enter the player names below to start the game!");

const players = (name, symbol) => {
	return {
		name,
		symbol,
	};
};

const gameBoard = (function () {
	let xCount = 0;
	let oCount = 0;

	const player1 = players(playerOne.value, "X");
	const player2 = players(playerTwo.value, "O");

	function addEvents() {
		for (let i = 0; i < rowBox.length; i++) {
			rowBox[i].addEventListener("click", (e) => {
				if (xCount == 0 || xCount <= oCount || e.target.value == "X") {
					e.target.textContent = player1.symbol;
					e.target.value = e.target.textContent;
					xCount++;
				} else if (
					(xCount > 0 && oCount == 0) ||
					oCount < xCount ||
					e.target.value == "O"
				) {
					e.target.textContent = player2.symbol;
					e.target.value = e.target.textContent;
					oCount++;
				}
				winConditions();
			});
		}
	}

	function winConditions() {
		if (
			(rowBox[0].textContent == "X" &&
				rowBox[1].textContent == "X" &&
				rowBox[2].textContent == "X") ||
			(rowBox[3].textContent == "X" &&
				rowBox[4].textContent == "X" &&
				rowBox[5].textContent == "X") ||
			(rowBox[6].textContent == "X" &&
				rowBox[7].textContent == "X" &&
				rowBox[8].textContent == "X") ||
			(rowBox[0].textContent == "X" &&
				rowBox[3].textContent == "X" &&
				rowBox[6].textContent == "X") ||
			(rowBox[1].textContent == "X" &&
				rowBox[4].textContent == "X" &&
				rowBox[7].textContent == "X") ||
			(rowBox[2].textContent == "X" &&
				rowBox[5].textContent == "X" &&
				rowBox[8].textContent == "X") ||
			(rowBox[0].textContent == "X" &&
				rowBox[4].textContent == "X" &&
				rowBox[8].textContent == "X") ||
			(rowBox[2].textContent == "X" &&
				rowBox[4].textContent == "X" &&
				rowBox[6].textContent == "X")
		) {
			results.textContent = `${playerOne.value} wins!`;
			xCount = 0;
			oCount = 0;
		} else if (
			(rowBox[0].textContent == "O" &&
				rowBox[1].textContent == "O" &&
				rowBox[2].textContent == "O") ||
			(rowBox[3].textContent == "O" &&
				rowBox[4].textContent == "O" &&
				rowBox[5].textContent == "O") ||
			(rowBox[6].textContent == "O" &&
				rowBox[7].textContent == "O" &&
				rowBox[8].textContent == "O") ||
			(rowBox[0].textContent == "O" &&
				rowBox[3].textContent == "O" &&
				rowBox[6].textContent == "O") ||
			(rowBox[1].textContent == "O" &&
				rowBox[4].textContent == "O" &&
				rowBox[7].textContent == "O") ||
			(rowBox[2].textContent == "O" &&
				rowBox[5].textContent == "O" &&
				rowBox[8].textContent == "O") ||
			(rowBox[0].textContent == "O" &&
				rowBox[4].textContent == "O" &&
				rowBox[8].textContent == "O") ||
			(rowBox[2].textContent == "O" &&
				rowBox[4].textContent == "O" &&
				rowBox[6].textContent == "O")
		) {
			results.textContent = `${playerTwo.value} wins!`;
			xCount = 0;
			oCount = 0;
		} else if (xCount + oCount == 9) {
			results.textContent = "It's a tie game! Please press reset";
			xCount = 0;
			oCount = 0;
		}
	}

	return {
		addEvents,
	};
})();

gameBoard.addEvents();

const gameControl = (function () {
	let playBox = ["", "", "", "", "", "", "", "", ""];

	for (let i = 0; i < rowBox.length; i++) {
		playBox[i] == rowBox[i].value;
	}

	startBtn.addEventListener("click", () => {
		if (
			playerOne.value !== "" &&
			playerTwo.value !== "" &&
			container.style.visibility === "hidden"
		) {
			container.style.visibility = "visible";
		}
	});

	resetBtn.addEventListener("click", () => {
		rowBox.forEach((box) => {
			box.textContent = "";
			box.value = "";
			results.textContent = "";
		});
	});

	return {};
})();
