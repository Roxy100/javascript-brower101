"use strict";

import PopUp from "./popup.js";
import Field from "./field.js";

const CARROT_COUNT = 20;
const BUG_COUNT = 20;
const GAME_DURATION_SEC = 20;

const gameBtn = document.querySelector(".game__button");
const gameTimer = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");

const alertSound = new Audio("./sound/alert.wav");
const bgSound = new Audio("./sound/bg.mp3");
const bugSound = new Audio("./sound/bug_pull.mp3");
const winSound = new Audio("./sound/game_win.mp3");

let gamestarted = false;
let gamescore = 0;
let gametimer = undefined;

const gameFinishBanner = new PopUp();
const gameField = new Field(CARROT_COUNT, BUG_COUNT);

gameField.setClickListener(onItemClick);

function onItemClick(item) {
  if (!gamestarted) {
    return;
  }
  if (item === "carrot") {
    gamescore++;
    updateScoreBoard();
    if (gamescore === CARROT_COUNT) {
      finishGame(true);
    }
  } else if (item === "bug") {
    finishGame(false);
  }
}

gameBtn.addEventListener("click", () => {
  if (gamestarted) {
    stopGame();
  } else {
    startGame();
  }
});

gameFinishBanner.setClickListener(() => {
  startGame();
});

function startGame() {
  gamestarted = true;
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
  playSound(bgSound);
}

function stopGame() {
  gamestarted = false;
  stopGameTimer();
  hideGameButton();
  gameFinishBanner.showWithText("REPLAY❓");
  playSound(alertSound);
  stopSound(bgSound);
}

function finishGame(win) {
  gamestarted = false;
  hideGameButton();
  if (win) {
    playSound(winSound);
  } else {
    playSound(bugSound);
  }
  stopGameTimer();
  stopSound(bgSound);
  gameFinishBanner.showWithText(win ? "YOU WON 🎉" : "YOU LOST 💩");
}

function showStopButton() {
  const btnIcon = gameBtn.querySelector(".fas");
  btnIcon.classList.add("fa-stop");
  btnIcon.classList.remove("fa-play");
  gameBtn.style.visibility = "visible";
}

function hideGameButton() {
  gameBtn.style.visibility = "hidden";
}

function showTimerAndScore() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}

function startGameTimer() {
  let remainingTimeSec = GAME_DURATION_SEC;
  updateTimerText(remainingTimeSec);
  gametimer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval(gametimer);
      finishGame(CARROT_COUNT === gamescore);
      return;
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}

function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${minutes}:${seconds}`;
}

function stopGameTimer() {
  clearInterval(gametimer);
}

function initGame() {
  gamescore = 0;
  gameScore.innerText = CARROT_COUNT;
  gameField.init();
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}

function updateScoreBoard() {
  gameScore.innerText = CARROT_COUNT - gamescore;
}
