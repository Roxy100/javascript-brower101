"use strict";

import { GameBulder, Reason } from "./game.js";
import PopUp from "./popup.js";

const game = new GameBulder()
  .withGameDuration(10)
  .withCarrotCount(10)
  .withBugCount(10)
  .build();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = "Replay ❓";
      break;
    case Reason.win:
      message = "YOU WON 🎉";
      break;
    case Reason.lose:
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
