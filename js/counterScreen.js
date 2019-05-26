var countersAttack = document.getElementById("countersAttack");
var countersDefense = document.getElementById("countersDefense");
var hardCounters = document.getElementsByClassName("hardCounters");
var hardCountersF;
function setHardCounter(){
  console.log(hardCountersF);
  for(i=0;i<hardCountersF.length;i++){
    hardCounters.innerHTML = hardCounters.innerHTML +
    "<img class='operatorBadgeB' src='https://4d617474.github.io/siegeTool/badges/"
    + hardCountersF[i] + ".svg'>";
  }
}
function setCounter(op)
{

  //if(atkSide.style.display == "none"){
  //  countersDefense.innerHTML = countersDefense.innerHTML + "<div class='row'></div>";
  //}
  //if (op == ""){
  //setHardCounter("");
  //setSoftCounter("");
  if (op == "kapkan"){
  hardCountersF = ["iq","thatcher","twitch"];
  }
  setHardCounter();
  //setSoftCounter();
}
