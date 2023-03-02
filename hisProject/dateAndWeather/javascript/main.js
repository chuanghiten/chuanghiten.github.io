var bodyElement = window.document.querySelector("body"),
  dayText = window.document.querySelector(".dateContents .day"),
  solarText = window.document.querySelector(".dateContents .calendar .solar"),
  lunarText = window.document.querySelector(".dateContents .calendar .lunar"),
  weatherContentsElement = window.document.querySelector(".weatherContents"),
  backgroundFooterElement = window.document.querySelector(".background .backgroundFooter"),
  oldClockForClockPulse,
  oldDayOfWeek,
  oldWeatherContentsElementHeight;
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
function setOldClockForClockPulse(data) {
  oldClockForClockPulse = data;
}
function setOldDayOfWeek(data) {
  oldDayOfWeek = data;
}
function updateDateContent(data) {
  let dayName = [
      "Chủ Nhật",
      "Thứ Hai",
      "Thứ Ba",
      "Thứ Tư",
      "Thứ Năm",
      "Thứ Sáu",
      "Thứ Bảy",
    ],
    dateSolarName,
    monthSolarName,
    timeZone,
    lunarData,
    dateLunarName,
    monthLunarName;
  dayText.innerHTML = dayName[data.getDay()];
  //  if (data.getDate() <= 9) {
  //    dateSolarName = "0" + data.getDate();
  //  } else {
  dateSolarName = data.getDate();
  //  }
  //  if (data.getMonth() + 1 <= 9) {
  //    monthSolarName = "0" + (1 + data.getMonth());
  //  } else {
  monthSolarName = data.getMonth() + 1;
  //  }
  solarText.innerHTML =
    dateSolarName + " / " + monthSolarName + " / " + data.getFullYear();
  timeZone =
    Number(
      data
        .toString()
        .slice(
          data.toString().indexOf("GMT") + 3,
          data.toString().indexOf("GMT") + 6
        )
    ) +
    Number(
      data
        .toString()
        .slice(
          data.toString().indexOf("GMT") + 6,
          data.toString().indexOf("GMT") + 8
        )
    ) /
      60;
  lunarData = getLunar(
    data.getDate(),
    data.getMonth() + 1,
    data.getFullYear(),
    timeZone
  );
  //  if (lunarData[0] <= 9) {
  //    dateLunarName = "0" + lunarData[0];
  //  } else {
  dateLunarName = lunarData[0];
  //  }
  //  if (lunarData[1] + 1 <= 9) {
  //    monthLunarName = "0" + lunarData[1];
  //  } else {
  monthLunarName = lunarData[1];
  //  }
  if (data.getFullYear() != lunarData[2]) {
    lunarText.innerHTML =
      dateLunarName + " / " + monthLunarName + " âm lịch " + lunarData[2];
  } else {
    lunarText.innerHTML = dateLunarName + " / " + monthLunarName + " âm lịch";
  }
}
function setOldWeatherContentsElementHeight(data) {
  oldWeatherContentsElementHeight = data;
}
function clockPulse() {
  let timeData = new Date();
  if (timeData.getMinutes() != oldClockForClockPulse) {
    setOldClockForClockPulse(timeData.getMinutes());
    if (timeData.getDay() != oldDayOfWeek) {
      setOldDayOfWeek(timeData.getDay());
      updateDateContent(timeData);
    }
  }
  if (weatherContentsElement.offsetHeight != oldWeatherContentsElementHeight) {
    setOldWeatherContentsElementHeight(weatherContentsElement.offsetHeight);
    setHeightFormWeatherContentsElementToBackgroundFooterElement(
      weatherContentsElement.offsetHeight
    );
  }
}
function setHeightFormWeatherContentsElementToBackgroundFooterElement(data) {
	backgroundFooterElement.setAttribute("style", "--height: " + (data - 1.5) +"px");
}
addScreenSizeToBodyElement();
bodyElement.onresize = addScreenSizeToBodyElement;
bodyElement.onclick = fullScreen;
setInterval(clockPulse, 1);
clockPulse();
