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
addScreenSizeToBodyElement();
bodyElement.onresize = addScreenSizeToBodyElement;
/*
bodyElement.addEventListener("click", function(){
	const elem=document.documentElement;
	if (elem.) {elem.requestFullscreen()}
}, false);
*/
