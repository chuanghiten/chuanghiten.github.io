var bodyElement = window.document.querySelector("body");
function addScreenSizeToBodyElement() {
  bodyElement.setAttribute(
    "style",
    `--innerWidth:${window.innerWidth}px;--innerHeight:${window.innerHeight}px;`
  );
}
addScreenSizeToBodyElement();
bodyElement.onresize = addScreenSizeToBodyElement;
window.document.querySelector("input#fileInput").onchange = function (input) {
  let uploadedFile = input.target.files;
  if (uploadedFile) {
    let readFile = new FileReader();
    readFile.readAsText(uploadedFile[0], "utf-8");
    readFile.onload = function () {
      console.log(readFile.result);
      bodyElement.setAttribute("editing", "");
    };
  } else {
    alert("Upload Failed!");
  }
};
window.document.querySelector('.buttons .newFile').onclick=function(){
	bodyElement.setAttribute('editing','');
}