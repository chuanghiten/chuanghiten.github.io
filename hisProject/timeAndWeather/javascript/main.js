let mainDom = window.document.querySelector("html body .main"), mainDomWidth;
let htmlDom = window.document.querySelector("html");

function resize(width, height) {
	if ((width / height) >= 0.480410447761194) {
		mainDomWidth = height * 0.480410447761194;
	} else {
		mainDomWidth = width;
	}
	mainDom.style.width = `${mainDomWidth}px`;
	mainDom.style.height = `${height}px`;
	// console.log(6.25 * mainDomWidth / 515);
	htmlDom.style.fontSize = `${6.25 * mainDomWidth / 515}%`;

}

function main() {
	resize(window.innerWidth, window.innerHeight);
	window.addEventListener("resize", () => { resize(window.innerWidth, window.innerHeight) });
}

window.addEventListener("load", () => { main() });
