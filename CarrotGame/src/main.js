"use strict";

import GameBulder from "./game.js";
import PopUp from "./popup.js";

const game = new GameBulder()
  .withGameDuration(10)
  .withCarrotCount(10)
  .withBugCount(10)
  .build();

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
