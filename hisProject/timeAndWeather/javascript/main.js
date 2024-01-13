let body = window.document.querySelector("body .fullScreen");

function resize(width, height) {
	console.log(`width: ${width}, height: ${height}`);
	body.innerHTML = `width: ${width}, height: ${height}`;
}

function main() {
	window.addEventListener("resize", () => { resize(window.innerWidth, window.innerHeight) });
	body.addEventListener("click", () => { window.document.querySelector("html").requestFullscreen() });
}

window.addEventListener("load", () => { main() });
