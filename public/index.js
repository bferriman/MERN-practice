async function postGame(game) {
  const res = await fetch("/api/games", {
    method: "POST",
    body: JSON.stringify(game),
    headers: { "Content-Type": "application/json" }
  });

  const json = await res.json();
  return json;
}

async function getGamesData() {
  const res = await fetch("/api/games", {
    method: "GET"
  });
  const json = await res.json();
  return json;
}

async function displayGames() {
  const gamesData = await getGamesData();
  const gamesListEl = $("#games-list");
  gamesListEl.empty();
  gamesData.forEach( game => {
    const gameEl = $("<div>");
    gameEl.attr("class", "game");

    const titleEl = $("<h3>");
    titleEl.text(game.name);

    const playTimeEl = $("<p>");
    playTimeEl.text("Play Time: " + game.playtime + " min");

    const ratingEl = $("<p>");
    ratingEl.text("Rating: " + game.rating);

    const piecesTitleEl = $("<h4>");
    piecesTitleEl.text("Pieces:");

    const piecesListEl = $("<ul>");
    game.pieces.forEach( piece => {
      const listItemEl = $("<li>");
      listItemEl.text(piece);
      piecesListEl.append(listItemEl);
    });

    gameEl.append(titleEl, playTimeEl, ratingEl, piecesTitleEl, piecesListEl);

    gamesListEl.append(gameEl);
  });
}

displayGames();

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
  if (hasDice) { gamePieces.push("Dice")};
  if (hasCards) { gamePieces.push("Cards")};
  if (hasTokens) { gamePieces.push("Tokens")};
  if (hasPawns) { gamePieces.push("Pawns")};
  if (hasBoard) { gamePieces.push("Game Board")};
  if (hasSpinner) { gamePieces.push("Spinner")};
  if (hasMarbles) { gamePieces.push("Marbles")};

  const newGame = {
    name: gameName,
    playtime: playtime,
    rating: rating,
    pieces: gamePieces
  };

  postGame(newGame).then( res => {
    console.log(res);
    $("#name").val("");
    $("#time").val("");
    $("#score").val("");
    $("#piece1").prop("checked", false);
    $("#piece2").prop("checked", false);
    $("#piece3").prop("checked", false);
    $("#piece4").prop("checked", false);
    $("#piece5").prop("checked", false);
    $("#piece6").prop("checked", false);
    $("#piece7").prop("checked", false);

    displayGames();
  });
});