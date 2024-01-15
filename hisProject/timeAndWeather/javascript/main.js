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
	hoursArrow = window.document.querySelector("html body .main .contents .time .clock .hoursArrow"),
	ngayDuong = window.document.querySelector("html body .main .contents .time .date .ngayThang .duong .ngay"),
	thangDuong = window.document.querySelector("html body .main .contents .time .date .ngayThang .duong .thang"),
	thangAm = window.document.querySelector("html body .main .contents .time .date .ngayThang .am .thang"),
	ngayAm = window.document.querySelector("html body .main .contents .time .date .ngayThang .am .ngay"),
	thu = window.document.querySelector("html body .main .contents .time .date .thu .text"),
	namDuong = window.document.querySelector("html body .main .contents .time .date .thu .nam .duong"),
	namAm = window.document.querySelector("html body .main .contents .time .date .thu .nam .am"),
	progressDay = window.document.querySelector("html body .main .contents .time .date .ngayThang .progressbar");

function updateTime(name, value) {
	switch (name) {
		case "progressDay":
			progressDay.setAttribute("style", `--progress: ${(value / 86399) * 100}%`);
			break;
		case "namDuong":
			namDuong.innerHTML = value;
			break;
		case "namAm":
			namAm.innerHTML = ` / ${value}`;
			break;
		case "thu":
			if (value == 1) thu.innerHTML = "Cn";
			else thu.innerHTML = `<span class="t">t</span>${value}`;
			break;
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
		case "ngayDuong":
			if (value < 10) ngayDuong.innerHTML = `0${value}`;
			else ngayDuong.innerHTML = value;
			break;
		case "thangDuong":
			if (value < 10) thangDuong.innerHTML = `0${value}`;
			else thangDuong.innerHTML = value;
			break;
		case "ngayAm":
			if (value < 10) ngayAm.innerHTML = `0${value}`;
			else ngayAm.innerHTML = value;
			break;
		case "thangAm":
			if (value < 10) thangAm.innerHTML = `0${value}`;
			else thangAm.innerHTML = value;
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
		time, oldSeconds, oldMinutes, oldHours, oldDate, oldMonth, oldYear, newSeconds, newMinutes, newHours, newDate, newMonth, newYear;
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
	time = new Date();
	newDate = time.getDate();
	newMonth = time.getMonth() + 1;
	newYear = time.getFullYear();
	setInterval(() => {
		time = new Date();
		newSeconds = time.getSeconds();
		if (oldSeconds != newSeconds) {
			oldSeconds = newSeconds;
			newMinutes = time.getMinutes();
			updateTime("second", newSeconds);
			updateTime("minutesArrow", 6 * (newMinutes + (newSeconds / 60)));
			updateTime("progressDay", (newHours * 3600) + (newMinutes * 60) + newSeconds);
			if (oldMinutes != newMinutes) {
				oldMinutes = newMinutes;
				newHours = time.getHours();
				updateTime("minutes", newMinutes);
				updateTime("hoursArrow", 30 * (newHours + (newMinutes / 60)));
				if (oldHours != newHours) {
					oldHours = newHours;
					newDate = time.getDate();
					updateTime("hour", newHours);
					if (oldDate != newDate) {
						oldDate = newDate;
						newMonth = time.getMonth() + 1;
						updateTime("ngayAm", getLunar(newDate, newMonth, newYear, 7)[0]);
						updateTime("ngayDuong", newDate);
						updateTime("thu", time.getDay() + 1);
						if (oldMonth != newMonth) {
							oldMonth = newMonth;
							newYear = time.getFullYear();
							updateTime("thangAm", getLunar(newDate, newMonth, newYear, 7)[1]);
							updateTime("thangDuong", newMonth);
							if (oldYear != newYear) {
								oldYear = newYear;
								if (newYear == getLunar(newDate, newMonth, newYear, 7)[2]) {
									namAm.style.display = "none";
									updateTime("namDuong", newYear);
								} else {
									namAm.style.display = "inline";
									updateTime("namDuong", newYear);
									updateTime("namAm", getLunar(newDate, newMonth, newYear, 7)[2]);
								}
							}
						}
					}
				}
			};
		};
	}, 1);
}

window.addEventListener("load", () => { main() });
