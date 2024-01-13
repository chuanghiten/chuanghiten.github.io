let mainDom = window.document.querySelector("html body .main");

function resize(width, height) {
	if ((width / height) >= 0.480410447761194) {
		mainDom.setAttribute("style", `width: ${height * 0.480410447761194}px; height: ${height}px`);
		// mainDom.style.height = height;
		// mainDom.style.width = height * 0.480410447761194;
	} else {
		mainDom.setAttribute("style", `height: ${width * 2.0815533980582526}px; width: ${width}px`);
		// mainDom.style.width = width;
		// mainDom.style.height = width * 2.0815533980582526;
	}
}

function main() {
	resize(window.innerWidth, window.innerHeight);
	window.addEventListener("resize", () => { resize(window.innerWidth, window.innerHeight) });
}

window.addEventListener("load", () => { main() });
