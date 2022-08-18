// create an array that will store the gameboard inside of the gameboard Object
// Store players inside of an object as well
// an object will also control the game flow as well
// create the game flow and board with modules
//create players with factory function
// set up gameboard visually on screen
//

const gameBox = document.querySelectorAll(".gameBox");

const tokensInPlay = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
const players = {};
const gameFlow = {};

const playerFactory = (name, token) => {
	const playerObj = () => name.push(players);
	const tokenObj = () => token.push(players);
	return { name, token };
};

const danny = playerFactory("danny", "X");

gameBox.forEach((box) => {
	box.addEventListener("click", () => {
		box.innerText = "X";
	});
});
