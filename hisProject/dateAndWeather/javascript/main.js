var bodyElement = window.document.querySelector("body"),oldClockForClockFulse;
function addScreenSizeToBodyElement() {
  bodyElement.setAttribute(
    "style",
    `--innerWidth:${window.innerWidth}px;--innerHeight:${window.innerHeight}px;`
  );
}
function fullScreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
}
function setOldClockForClockPulse(data){
	oldClockForClockPulse = data;
};		
function clockPulse(){
	let timeData = new Date();
	if(timeData.getMinutes()!=oldClockForClockPulse){
		setOldClockForClockPulse(timeData.getMinutes());
	};								
}
addScreenSizeToBodyElement();
bodyElement.onresize = addScreenSizeToBodyElement;
bodyElement.onclick = fullScreen;
setInterval(clockPulse, 1);
clockPulse()