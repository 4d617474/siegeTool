function aboutFunction(){
  var abtFrame = document.getElementById("aboutFrame");
  var sgTool = document.getElementById("siegeTool");
  if (abtFrame.style.display == "none"){
    abtFrame.style.display = "block";
    sgTool.style.filter = "blur(20px)";
  } else {
    abtFrame.style.display = "none";
    sgTool.style.filter = "none";
  }
}
