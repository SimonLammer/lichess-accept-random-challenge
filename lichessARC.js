var CHALLENGES_CONTAINER_ID = 'challenge-app';
var CHALLENGE_MENU_TOGGLE_ID = 'challenge-toggle';

function acceptChallenge() {
  var challenges = document.getElementsByClassName("challenge");
  var challenge = challenges[Math.floor(Math.random() * challenges.length)]
  challenge.getElementsByClassName("accept")[0].click();
}
function init(container) {
  var div = document.createElement("div");
  div.innerText = "Accept random challenge";
  div.id = "lichess-arc";
  div.onclick = acceptChallenge;
  container.prepend(div);
}
function loadContainer() {
  e = document.getElementById(CHALLENGE_MENU_TOGGLE_ID);
  if (!e) {
    console.error("lichessARC could not find challenge menu toggle (element with id " + CHALLENGE_MENU_TOGGLE_ID + ")");
  }
  e.click(); // open challanges menu
  e.click(); // close challanges menu
}
function initWhenContainerLoaded() {
  var container = document.getElementById(CHALLENGES_CONTAINER_ID);
  if (!container) {
    console.error("lichessARC could not find challenges container (element with id " + CHALLENGES_CONTAINER_ID + ")");
  }
  if (container.className.indexOf("rendered") > 0) {
    init(container);
  } else {
    loadContainer();
    setTimeout(initWhenContainerLoaded, 100);
  }
}

initWhenContainerLoaded();
