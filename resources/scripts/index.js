// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userNameInput = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  const scoreParagraph = document.querySelector(`#score`);

  const username = game.username;
  const userScore = game.score.user;
  const cpuScore = game.score.cpu;

  scoreParagraph.innerText = `${username}: ${userScore}  v  CPU: ${cpuScore}`;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.innerHTML = ``;

  for (let entry of game.gameHistoryLog) {
    gameHistoryParagraph.innerHTML += entry + `<br>`;
  }
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function (e) {
  const username = username.value;
  game = new RockPaperScissors(username);
  welcomeScreen.classList.add(`d-none`);
  gameScreen.classList.remove(`d-none`);
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  const selectedOption = userSelection.value;

  game.play(selectedOption);

  updateScoreTallyUI();
  updateGameHistoryUI();
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });