var CHALLENGES_CONTAINER_ID = 'challenge-app';
var CHALLENGE_MENU_TOGGLE_ID = 'challenge-toggle';
var LICHESS_ARC_ID = 'lichess-arc';

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

  var settings_dialog = document.createElement("div");
  settings_dialog.id = LICHESS_ARC_ID + "-settings-dialog";
  settings_dialog.style.visibility = "hidden";
  settings_dialog.onclick = function() {
    console.log("hide");
    settings_dialog.style.visibility = "hidden";
  }

  var settings = document.createElement("div");
  settings.id = LICHESS_ARC_ID + "-settings";
  settings.setAttribute("data-icon", "n");
  settings.onclick = function() {
    console.log("show");
    settings_dialog.style.visibility = "visible";
  }

  document.body.appendChild(settings_dialog);
  div.appendChild(settings);

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

if (!document.getElementById(LICHESS_ARC_ID)) {
  initWhenContainerLoaded();
}
