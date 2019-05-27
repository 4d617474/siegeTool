function randomBg() {
  var randNum = Math.floor(Math.random() * 10) + 1;
  document.getElementById("background").style.backgroundImage= "url('backgrounds/map" + randNum + ".png')";
}
