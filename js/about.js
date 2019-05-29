function aboutFunction(){
  var abt = document.getElementById("about");
  var abtFrame = document.getElementById("aboutFrame");
  var abtCont = document.getElementById("aboutContainer");
  var sgTool = document.getElementById("siegeTool");
  if (abtFrame.style.display == "none"){
    abtFrame.style.display = "block";
    abtCont.classList.add("aboutIntro");
    sgTool.style.filter = "blur(20px)";
    abt.style.backgroundImage = 'url("back.png")';
  } else {
    abtFrame.style.display = "none";
    abtCont.classList.remove("aboutIntro");
    sgTool.style.filter = "none";
    abt.style.backgroundImage = 'url("info.png")';
  }
}
