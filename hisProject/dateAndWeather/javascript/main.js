var bodyElement = window.document.querySelector("body"),fullScreenButton = window.document.querySelector(".fullScreenButton");
function addScreenSizeToBodyElement() {
  bodyElement.setAttribute(
    "style",
    `--innerWidth:${window.innerWidth}px;--innerHeight:${window.innerHeight}px;`
  );
}
function fullScreen(){
	if (document.documentElement.requestFullscreen) {
		document.documentElement.requestFullscreen
	}
}
function consoleTest(){
	console.log(true);
}
addScreenSizeToBodyElement();
bodyElement.onresize = addScreenSizeToBodyElement;
window.document.querySelector(".background").onclick = fullScreen;
