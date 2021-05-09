const submitBtnEl = document.querySelector("#submit-btn");
submitBtnEl.addEventListener("click", event => {
  event.preventDefault();
  const gameName = document.querySelector("#name").value;
  const playtime = document.querySelector("#time").value;
  const rating = document.querySelector("#score").value;
  const hasDice = document.querySelector("#piece1").checked;
  const hasCards = document.querySelector("#piece2").checked;
  const hasTokens = document.querySelector("#piece3").checked;
  const hasPawns = document.querySelector("#piece4").checked;
  const hasBoard = document.querySelector("#piece5").checked;
  const hasSpinner = document.querySelector("#piece6").checked;
  const hasMarbles = document.querySelector("#piece7").checked;

  const gamePieces = [];
  if (hasDice) { gamePieces.push("dice")};
  if (hasCards) { gamePieces.push("cards")};
  if (hasTokens) { gamePieces.push("tokens")};
  if (hasPawns) { gamePieces.push("pawns")};
  if (hasBoard) { gamePieces.push("board")};
  if (hasSpinner) { gamePieces.push("spinner")};
  if (hasMarbles) { gamePieces.push("marbles")};

  const newGame = {
    name: gameName,
    playtime: playtime,
    rating: rating,
    pieces: gamePieces
  };

  console.log(newGame);
});