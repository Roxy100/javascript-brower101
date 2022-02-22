"use strict";

import Game from "./game.js";
import PopUp from "./popup.js";

const game = new Game(20, 20, 20);
game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case "cancel":
      message = "Replay ❓";
      break;
    case "win":
      message = "YOU WON 🎉";
      break;
    case "lose":
      message = "YOU LOST 💩";
      break;
    default:
      throw new Error("not valid reason");
  }
  gameFinishBanner.showWithText(message);
});

const gameFinishBanner = new PopUp();
gameFinishBanner.setClickListener(() => {
  game.start();
});
