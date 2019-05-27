var countersAttack = document.getElementById("countersAttack");
var countersDefense = document.getElementById("countersDefense");
var hardCounters = document.getElementsByClassName("hardCounters");
var row = document.getElementsByClassName("row");
var hardCountersF;
function setCounter(letter){
  var countersSum = "";
  var currentCounters;
  if(letter=="B"){currentCounters = hardCountersF
  }else{currentCounters = softCountersF}
  console.log(countersSum);
  //console.log(countersSum);
  for(i=0;i<currentCounters.length;i++){
    console.log(countersSum);
    countersSum += "<img class='operatorBadge" + letter + "' src='badges/"
    + currentCounters[i] + ".svg'>";
  }
  //console.log(countersSum);
  return countersSum;
}
// function sethCounter(){
//   var countersSum;
//   for(i=0;i<hardCountersF.length;i++){
//     console.log(hardCountersF[i]);
//     countersSum += "<img class='operatorBadgeB' src='badges/" +
//     hardCountersF[i] + ".svg'>";
//   }
//   return countersSum;
// }
// function setsCounter(){
//   var countersSum;
//   for(i=0;i<softCountersF.length;i++){
//     countersSum += "<img class='operatorBadgeC' src='badges/" +
//     softCountersF[i] + ".svg'>";
//   }
//  return countersSum;
// }
function toggleCounter(op,state,side)
{
  //console.log(op,state,side);
  if (op == "kapkan"){
    hardCountersF = ["iq","thatcher","twitch"];
    softCountersF = ["blitz","buck","finka","fuze","montagne","sledge","zofia"];
  }
  var sidePicked;
  if (side == 1){
    sidePicked = countersAttack;
  }else{
    sidePicked = countersDefense;
  }
  if(state == 1){
    sidePicked.innerHTML = sidePicked.innerHTML +
    '<div id="' + op + '" class="row">' +
      '<div class="countered">' +
        '<img class="operatorBadgeA" src="badges/' + op  + '.svg">' +
      '</div>' +
      '<div class="hardCounters">' + setCounter("B") + '</div>' +
      '<div class="softCounters">' + setCounter("C") + '</div>' +
      //'<div class="hardCounters">' + sethCounter() + '</div>' +
      //'<div class="softCounters">' + setsCounter() + '</div>' +
    '</div>';
  }else{
    //console.log(document.getElementById(op));
    document.getElementById(op).remove();
  };
  //if(atkSide.style.display == "none"){
  //}
  //if (op == ""){
  //setHardCounter("");
  //setSoftCounter("");
  //setHardCounter();
  //setSoftCounter();
}
