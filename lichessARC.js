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
  e = document.getElementById('challenge_notifications_tag');
  e.click(); // open challanges menu
  e.click(); // close challanges menu
}
function initWhenContainerLoaded() {
  var container = document.getElementById("challenge_app");
  if (container.className.indexOf("rendered") > 0) {
    init(container);
  } else {
    loadContainer();
    setTimeout(initWhenContainerLoaded, 100);
  }
}

initWhenContainerLoaded();