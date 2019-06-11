function menu(state){
  var siegeTool = document.getElementById("siegeTool");
  var challenges = document.getElementById("challenges");
  var challenges = document.getElementById("menuA");
  var challenges = document.getElementById("menuB");
  if (state == 0)
  {
    challenges.style.display = "block";
    siegeTool.style.display = "none";
    menuA.style.boxShadow = "0px 0px 0px 99px rgba(0,0,0, 0.2) inset";
    menuB.style.boxShadow = "none";

  }
  if (state == 1)
  {
    siegeTool.style.display = "block";
    challenges.style.display = "none";
    menuB.style.boxShadow = "0px 0px 0px 99px rgba(0,0,0, 0.2) inset";
    menuA.style.boxShadow = "none";
  }
}
