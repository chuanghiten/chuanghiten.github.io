let mainDom = window.document.querySelector("html body .main"),
	mainDomWidth,
	htmlDom = window.document.querySelector("html"),
	secondProgressDom = window.document.querySelector("html body .main .contents .time .clock .secondProgress"),
	htmlFontsize,
	secondProgressDomRotate = window.document.querySelector("html body .main .contents .time .clock .secondProgress .progress"),
	minutesDom = window.document.querySelector("html body .main .contents .time .clock .minutes"),
	clockDom = window.document.querySelector("html body .main .contents .time .clock"),
	hourDom = window.document.querySelector("html body .main .contents .time .clock .hour"),
	minutesArrow = window.document.querySelector("html body .main .contents .time .clock .minutesArrow"),
	hoursArrow = window.document.querySelector("html body .main .contents .time .clock .hoursArrow");

function updateTime(name, value) {
	switch (name) {
		case "second":
			clockDom.setAttribute("style", `--deg: ${360 * (value / 60)}deg`);
			break;
		case "minutes":
			if (value < 10) minutesDom.innerHTML = `0${value}`;
			else minutesDom.innerHTML = value;
			break;
		case "hour":
			if (value < 10) hourDom.innerHTML = `0${value}`;
			else hourDom.innerHTML = value;
			break;
		case "minutesArrow":
			minutesArrow.setAttribute("style", `--minutesDeg: ${value}deg`);
			break;
		case "hoursArrow":
			hoursArrow.setAttribute("style", `--hoursDeg: ${value}deg`);
			break;
	}
}

function resize(width, height) {
	if ((width / height) >= 0.480410447761194) {
		mainDomWidth = height * 0.480410447761194;
	} else {
		mainDomWidth = width;
	}
	mainDom.style.width = `${mainDomWidth}px`;
	mainDom.style.height = `${height}px`;
	// console.log(6.25 * mainDomWidth / 515);
	htmlFontsize = 6.25 * mainDomWidth / 515;
	htmlDom.style.fontSize = `${htmlFontsize}%`;
	secondProgressDom.setAttribute("style", `clip-path: path('M 0 0 H ${secondProgressDom.offsetWidth} V ${secondProgressDom.offsetWidth} H 0 V ${secondProgressDom.offsetWidth / 2} H ${(.16 * htmlFontsize) * 5} C ${(.16 * htmlFontsize) * 5}  ${secondProgressDom.offsetWidth - ((.16 * htmlFontsize) * 41.9)} ${(.16 * htmlFontsize) * 41.9} ${secondProgressDom.offsetWidth - ((.16 * htmlFontsize) * 5)} ${secondProgressDom.offsetWidth / 2} ${secondProgressDom.offsetWidth - ((.16 * htmlFontsize) * 5)} C ${secondProgressDom.offsetWidth - ((.16 * htmlFontsize) * 41.9)} ${secondProgressDom.offsetWidth - ((.16 * htmlFontsize) * 5)} ${secondProgressDom.offsetWidth - ((.16 * htmlFontsize) * 5)} ${secondProgressDom.offsetWidth - ((.16 * htmlFontsize) * 41.9)} ${secondProgressDom.offsetWidth - ((.16 * htmlFontsize) * 5)} ${secondProgressDom.offsetWidth / 2} C ${secondProgressDom.offsetWidth - ((.16 * htmlFontsize) * 5)} ${(.16 * htmlFontsize) * 41.9} ${secondProgressDom.offsetWidth - ((.16 * htmlFontsize) * 41.9)} ${(.16 * htmlFontsize) * 5} ${secondProgressDom.offsetWidth / 2} ${(.16 * htmlFontsize) * 5} C ${(.16 * htmlFontsize) * 41.9} ${(.16 * htmlFontsize) * 5} ${(.16 * htmlFontsize) * 5} ${(.16 * htmlFontsize) * 41.9} ${(.16 * htmlFontsize) * 5} ${secondProgressDom.offsetWidth / 2} H 0 Z')`);
}

function main() {
	let fullscreen = 0,
		time, oldSeconds, oldMinutes, oldHours, oldDate, oldMonth, oldYear, newSeconds, newMinutes, newHours;
	resize(window.innerWidth, window.innerHeight);
	window.addEventListener("resize", () => { resize(window.innerWidth, window.innerHeight) });
	htmlDom.addEventListener("click", () => {
		if (fullscreen) {
			if (document.exitFullscreen) document.exitFullscreen();
			else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
			else if (document.msExitFullscreen) document.msExitFullscreen();
			fullscreen = 0;
		} else {
			if (htmlDom.requestFullscreen) htmlDom.requestFullscreen();
			else if (htmlDom.webkitRequestFullscreen) htmlDom.webkitRequestFullscreen();
			else if (htmlDom.msRequestFullscreen) htmlDom.msRequestFullscreen();
			fullscreen = 1;
		};
	});
	setInterval(() => {
		time = new Date();
		newSeconds = time.getSeconds();
		if (oldSeconds != newSeconds) {
			oldSeconds = newSeconds;
			newHours = time.getHours();
			newMinutes = time.getMinutes();
			updateTime("second", newSeconds);
			updateTime("minutesArrow", 360 * ((newMinutes / 60) + ((newSeconds / 60) / 60)))
			if (oldHours != newHours) {
				oldHours = newHours;
				updateTime("hour", newHours);
			}
			if (oldMinutes != newMinutes) {
				oldMinutes = newMinutes;
				updateTime("minutes", newMinutes);
				updateTime("hoursArrow", 360 * ((newHours / 12) + ((newMinutes / 60) / 60)));
			};
		};
	}, 1);
}

window.addEventListener("load", () => { main() });
