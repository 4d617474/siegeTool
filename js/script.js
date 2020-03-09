
function setOperators(side){
  var txt = "";
  var hmm = "";
  if (side==0){
    for(i=0;i<operators.length/2;i++){
      txt += "<div class='operator list'><img class='operatorBadge' alt='"
      + operators[i] + "' src='badges/"
      + operators[i] + ".svg'><span class='tooltiptext list'>" + operators[i]
      + "</div>"
    }
  } else {

    for(i=operators.length/2;i<operators.length;i++){
      txt += "<div class='operator list'><img class='operatorBadge' alt='"
      + operators[i] + "' src='badges/"
      + operators[i] + ".svg'><span class='tooltiptext list'>" + operators[i]
      + "</div>"
    }
  }
  return txt;
}

var opOnScreen, elem, ttes;

function pickOp(oper){
  var pane = event.target.closest('.operatorBadge');
  var elem = document.getElementById(oper);
  if (elem==undefined){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var xmlK = xhttp.responseXML;
        var side, path, pathA, pathB, desc;
        var txt = "";
          function getNames(side,xml) {
            if(side=="countered"){
              path = "/operators/target/name[text()]";
              pathA = "/operators/target/description[text()]";
            }else{
              path = "/operators/" + side + "/name[text()]";
              pathA = "/operators/" + side + "/description[text()]";
            }
            if (xml.evaluate) {
              txt = "";
              var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
              var result = nodes.iterateNext();
              var nodesA = xml.evaluate(pathA, xml, null, XPathResult.ANY_TYPE, null);
              var resultA = nodesA.iterateNext();
              while (result) {
                desc = "<span class='tooltiptext'>" + resultA.childNodes[0].nodeValue + "</span>";
                txt += "<div class='operator " + side + "'> <img class='operatorBadge' src='badges/" +
                 result.childNodes[0].nodeValue + ".svg'>" + desc + "</div>";
                resultA = nodesA.iterateNext();
                result = nodes.iterateNext();
              }
              return txt;
            }
        }
        document.getElementsByClassName("countersBoard")[opListSide].innerHTML +=
        "<div class='row' id='" + opOnScreen + "'>" +
        "<div class='block countered'>" + getNames("countered",xmlK) + "</div>" +
        "<div class='block hardCounter'>" + getNames("hardCounter",xmlK) + "</div>" +
        "<div class='block softCounter'>" + getNames("softCounter",xmlK) + "</div>";
      }
    };

    xhttp.open("GET", "operators/" + oper + ".xml", true);
    xhttp.send();
    opOnScreen = oper;
    if (atkSide.style.display == "block") {
        pane.style.backgroundColor="#eb7116";
      } else {
        pane.style.backgroundColor="#1489e0";
      }
  } else {
    pane.style.backgroundColor="transparent";
    elem.remove();
  }
}

function showResult(xml) {
    var side = "";
    var path = "";
    var xmlK = xml;
    var desc = "";
    var txt = "";
    function getNames(side,xml) {
      path = "/operators/" + side + "/name[text()]";
      pathA = "/operators/" + side + "/description[text()]";
      if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        var result = nodes.iterateNext();
        var nodesA = xml.evaluate(pathA, xml, null, XPathResult.ANY_TYPE, null);
        var resultA = nodesA.iterateNext();
        while (result) {
          desc = "<span class='tooltiptext'>" + resultA.childNodes[0].nodeValue + "</span>";
          txt += "<div class='operator " + side + "'> <img class='operatorBadge' src='badges/" + result.childNodes[0].nodeValue + ".svg'>" + desc + "</div>";
          resultA = nodesA.iterateNext();
          result = nodes.iterateNext();
        }
      }
    }
    getNames("hardCounter",xmlK);
    getNames("softCounter",xmlK);
    document.getElementsByClassName("countersBoard")[opListSide].innerHTML +=
    "<div class='row' id='" + opOnScreen + "'>" + txt + "</div>";
}

var atkSide = document.getElementById("operatorsAttack");
var defSide = document.getElementById("operatorsDefense");
var operatorBadge = document.getElementsByClassName("operatorBadge");
var opListSide = "";
var row = document.getElementsByClassName("row");

function switchSide(side){
  var countersAttack = document.getElementsByClassName("countersBoard")[0];
  var countersDefense = document.getElementsByClassName("countersBoard")[1];
  defSide.style.display = "none";
  atkSide.style.display = "none";
   if (side == "a"){
     defSide.style.display = "none";
     atkSide.style.display = "block";
     opListSide = "0";
     countersAttack.style.display = "block";
     countersDefense.style.display = "none";
   } else {
     defSide.style.display = "block";
     atkSide.style.display = "none";
     opListSide = "1";
     countersDefense.style.display = "block";
     countersAttack.style.display = "none";
   }
}
function resetAll()
{
  for (i = 0; i < operators.length; i++){
    operatorBadge[i].style.backgroundColor = "transparent";
  }
  currentRows = row.length;
  if(typeof(row[0]) != 'undefined'){
    for(i=0;i!=currentRows;i++){
    row[0].remove();
  }}
}
