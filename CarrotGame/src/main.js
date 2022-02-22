"use strict";

import { GameBulder, Reason } from "./game.js";
import * as sound from "./sound.js";
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
      sound.playAlert();
      break;
    case Reason.win:
      message = "YOU WON 🎉";
      sound.playWin();
      break;
    case Reason.lose:
      message = "YOU LOST 💩";
      sound.playBug();
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
