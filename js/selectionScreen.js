var operatorSelected;
var operatorBadge = document.getElementsByClassName("operatorBadge");
var operatorSelect = document.getElementsByClassName("operatorSelect");
var atkSide = document.getElementById("operatorsAttack");
var defSide = document.getElementById("operatorsDefense");

function setOperators()
{
  for (i = 0; i < operators.length; i++)
  {
    operatorBadge[i].src = "badges/" + operators[i] + ".svg";
    operatorBadge[i].alt = operators[i];
  }
}
function resetA()
{
  for (i = 0; i < operators.length; i++){
    operatorBadge[i].style.backgroundColor = "transparent";
  }
  //console.log(typeof(row[0]));
  currentRows = row.length;
  if(typeof(row[0]) != 'undefined'){
    for(i=0;i!=currentRows;i++){
    row[0].remove();
  }}
}
function clickOperator(){
  //console.log(event.target.alt);
  var pane = event.target.closest('.operatorBadge');
  //console.log(pane.style.backgroundColor);
  if (pane.style.backgroundColor == "transparent"){
    if (atkSide.style.display == "block") {
      toggleCounter(event.target.alt,1,1);
      pane.style.backgroundColor="#eb7116";
    } else {
      toggleCounter(event.target.alt,1,2);
      pane.style.backgroundColor="#1489e0";
    }
  } else {
    toggleCounter(event.target.alt,0,1);
    pane.style.backgroundColor="transparent";}
}
function switchSide(isdefside){
defSide.style.display = "none";
atkSide.style.display = "none";
 if (isdefside == 0){
   atkSide.style.display = "block";
   defSide.style.display = "none";
   countersAttack.style.display = "block";
   countersDefense.style.display = "none";

 } else {
   defSide.style.display = "block";
   atkSide.style.display = "none";
   countersDefense.style.display = "block";
   countersAttack.style.display = "none";
 }
}
