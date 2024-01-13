let body = window.document.querySelector("body");

function resize(width, height) {
	console.log(`width: ${width}, height: ${height}`);
	body.innerHTML = `width: ${width}, height: ${height}`;
}

function main() {
	window.addEventListener("resize", () => { resize(window.innerWidth, window.innerHeight) });
}

window.addEventListener("load", () => { main() });
