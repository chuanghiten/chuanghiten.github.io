var bodyElement = window.document.querySelector("body"),goFS = document.getElementById("goFS");
function addScreenSizeToBodyElement() {
  bodyElement.setAttribute(
    "style",
    `--innerWidth:${window.innerWidth}px;--innerHeight:${window.innerHeight}px;`
  );
}
bodyElement.addEventListener("click", () => {if (document.documentElement.requestFullscreen) {document.documentElement.requestFullscreen()}}, false);
addScreenSizeToBodyElement();
bodyElement.onresize = addScreenSizeToBodyElement;

