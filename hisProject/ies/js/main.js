var bodyElement = window.document.querySelector('body');
function addScreenSizeToBodyElement () {
	bodyElement.setAttribute('style',`--innerWidth:${window.innerWidth}px;--innerHeight:${window.innerHeight}px;`);
}
addScreenSizeToBodyElement();
bodyElement.onresize = addScreenSizeToBodyElement;