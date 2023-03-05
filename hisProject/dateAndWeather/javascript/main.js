var bodyElement = window.document.querySelector("body"),
  dayText = window.document.querySelector(".dateContents .day"),
  solarText = window.document.querySelector(".dateContents .calendar .solar"),
  lunarText = window.document.querySelector(".dateContents .calendar .lunar"),
  weatherContentsElement = window.document.querySelector(".weatherContents"),
  backgroundFooterElement = window.document.querySelector(
    ".background .backgroundFooter"
  ),
  temperatureTextElement = window.document.querySelector(
    ".weatherContents .text .temperature"
  ),
  descriptionTextElement = window.document.querySelector(
    ".weatherContents .text .description"
  ),
  weatherIconElement = window.document.querySelector(".weatherContents .icon"),
  weatherDescriptionThunderstorm = [
    "Mưa giông nhẹ",
    "Mưa giông",
    "Mưa giông lớn",
    "Giông nhẹ",
    "Giông",
    "Giông lớn",
    "Giông ngắt quãng",
    "Giông và một ít mưa bay",
    "Mưa bay và giông",
    "Mưa bụi và giông",
  ],
  weatherDescriptionDrizzle = [
    "Mưa bay nhẹ",
    "Mưa bay",
    "Mưa bụi",
    "Mưa phùn nhẹ",
    "Mưa phùn",
    "Mưa nặng hạt",
    "Mưa phùn nặng hạt",
    "Mưa phùn và một chút mưa nặng hạt",
    "Mưa phùn và mưa nặng hạt",
    "Mưa rào nhỏ",
  ],
  weatherDescriptionRain = [
    "Mưa nhẹ",
    "Mưa vừa",
    "Mưa lớn",
    "Mưa rất lớn",
    "Mưa to",
    "Mưa lạnh",
    "Mưa phùn và mưa nhẹ",
    "Mưa rào",
    "Mưa rào lớn",
    "Mưa rào ngắt quãng",
  ],
  weatherDescriptionSnow = [
    "Tuyết nhẹ",
    "Tuyết",
    "Tuyết dày",
    "Mưa đá",
    "Mưa đá nhẹ",
    "Mưa đá",
    "Mưa và tuyết",
    "Mưa và tuyết dày",
    "Mưa và tuyết mỏng",
    "Mưa và tuyết lớn",
  ],
  weatherDescriptionAtmosphere = [
    "Sương ",
    "Sương mờ",
    "Sương mù",
    "Bão cát",
    "Sương",
    "Cát",
    "Bụi đất",
    "Tro núi lửa",
    "Gió to",
    "Cuồng phong",
  ],
  weatherDescriptionClear = "Quang đãng",
  weatherDescriptionClouds = ["Ít mây", "Mây rải rác", "Nhiều mây", "Mây dày"],
  oldClockForClockPulse,
  oldDayOfWeek,
  oldWeatherContentsElementHeight,
  latitude,
  longitude,
  weatherData;
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
function updateWeatherContents(temperature, icon) {
  if (temperature && icon) {
    temperatureTextElement.innerHTML =
      "<span>" + (temperature - 273.15).toFixed(0) + "</span>℃";
    if (icon == 200) {
      descriptionTextElement.innerHTML = weatherDescriptionThunderstorm[0];
      weatherIconElement.innerHTML =
        '<img src="./images/thunderstorm2.svg" alt="thunderstorm2.svg">';
    } else if (icon == 201) {
      descriptionTextElement.innerHTML = weatherDescriptionThunderstorm[1];
      weatherIconElement.innerHTML =
        '<img src="./images/thunderstorm2.svg" alt="thunderstorm2.svg">';
    } else if (icon == 202) {
      descriptionTextElement.innerHTML = weatherDescriptionThunderstorm[2];
      weatherIconElement.innerHTML =
        '<img src="./images/thunderstorm2.svg" alt="thunderstorm2.svg">';
    } else if (icon == 210) {
      descriptionTextElement.innerHTML = weatherDescriptionThunderstorm[3];
      weatherIconElement.innerHTML =
        '<img src="./images/thunderstorm1.svg" alt="thunderstorm1.svg">';
    } else if (icon == 211) {
      descriptionTextElement.innerHTML = weatherDescriptionThunderstorm[4];
      weatherIconElement.innerHTML =
        '<img src="./images/thunderstorm1.svg" alt="thunderstorm1.svg">';
    } else if (icon == 212) {
      descriptionTextElement.innerHTML = weatherDescriptionThunderstorm[5];
      weatherIconElement.innerHTML =
        '<img src="./images/thunderstorm1.svg" alt="thunderstorm1.svg">';
    } else if (icon == 221) {
      descriptionTextElement.innerHTML = weatherDescriptionThunderstorm[6];
      weatherIconElement.innerHTML =
        '<img src="./images/thunderstorm1.svg" alt="thunderstorm1.svg">';
    } else if (icon == 230) {
      descriptionTextElement.innerHTML = weatherDescriptionThunderstorm[7];
      weatherIconElement.innerHTML =
        '<img src="./images/thunderstorm2.svg" alt="thunderstorm2.svg">';
    } else if (icon == 231) {
      descriptionTextElement.innerHTML = weatherDescriptionThunderstorm[8];
      weatherIconElement.innerHTML =
        '<img src="./images/thunderstorm2.svg" alt="thunderstorm2.svg">';
    } else if (icon == 232) {
      descriptionTextElement.innerHTML = weatherDescriptionThunderstorm[9];
      weatherIconElement.innerHTML =
        '<img src="./images/thunderstorm2.svg" alt="thunderstorm2.svg">';
    } else if (icon == 300) {
      descriptionTextElement.innerHTML = weatherDescriptionDrizzle[0];
      weatherIconElement.innerHTML =
        '<img src="./images/drizzle1.svg" alt="drizzle1.svg">';
    } else if (icon == 301) {
      descriptionTextElement.innerHTML = weatherDescriptionDrizzle[1];
      weatherIconElement.innerHTML =
        '<img src="./images/drizzle1.svg" alt="drizzle1.svg">';
    } else if (icon == 302) {
      descriptionTextElement.innerHTML = weatherDescriptionDrizzle[2];
      weatherIconElement.innerHTML =
        '<img src="./images/drizzle1.svg" alt="drizzle1.svg">';
    } else if (icon == 310) {
      descriptionTextElement.innerHTML = weatherDescriptionDrizzle[3];
      weatherIconElement.innerHTML =
        '<img src="./images/drizzle1.svg" alt="drizzle1.svg">';
    } else if (icon == 311) {
      descriptionTextElement.innerHTML = weatherDescriptionDrizzle[4];
      weatherIconElement.innerHTML =
        '<img src="./images/drizzle2.svg" alt="drizzle2.svg">';
    } else if (icon == 312) {
      descriptionTextElement.innerHTML = weatherDescriptionDrizzle[5];
      weatherIconElement.innerHTML =
        '<img src="./images/drizzle2.svg" alt="drizzle2.svg">';
    } else if (icon == 313) {
      descriptionTextElement.innerHTML = weatherDescriptionDrizzle[6];
      weatherIconElement.innerHTML =
        '<img src="./images/drizzle2.svg" alt="drizzle2.svg">';
    } else if (icon == 314) {
      descriptionTextElement.innerHTML = weatherDescriptionDrizzle[7];
      weatherIconElement.innerHTML =
        '<img src="./images/drizzle2.svg" alt="drizzle2.svg">';
    } else if (icon == 321) {
      descriptionTextElement.innerHTML = weatherDescriptionDrizzle[8];
      weatherIconElement.innerHTML =
        '<img src="./images/drizzle2.svg" alt="drizzle2.svg">';
    } else if (icon == 500) {
      descriptionTextElement.innerHTML = weatherDescriptionRain[0];
      weatherIconElement.innerHTML =
        '<img src="./images/rain1.svg" alt="rain1.svg">';
    } else if (icon == 501) {
      descriptionTextElement.innerHTML = weatherDescriptionRain[1];
      weatherIconElement.innerHTML =
        '<img src="./images/rain1.svg" alt="rain1.svg">';
    } else if (icon == 502) {
      descriptionTextElement.innerHTML = weatherDescriptionRain[2];
      weatherIconElement.innerHTML =
        '<img src="./images/rain1.svg" alt="rain1.svg">';
    } else if (icon == 503) {
      descriptionTextElement.innerHTML = weatherDescriptionRain[3];
      weatherIconElement.innerHTML =
        '<img src="./images/rain2.svg" alt="rain2.svg">';
    } else if (icon == 504) {
      descriptionTextElement.innerHTML = weatherDescriptionRain[4];
      weatherIconElement.innerHTML =
        '<img src="./images/rain2.svg" alt="rain2.svg">';
    } else if (icon == 511) {
      descriptionTextElement.innerHTML = weatherDescriptionRain[5];
      weatherIconElement.innerHTML =
        '<img src="./images/rainIce.svg" alt="rainIce.svg">';
    } else if (icon == 520) {
      descriptionTextElement.innerHTML = weatherDescriptionRain[6];
      weatherIconElement.innerHTML =
        '<img src="./images/rain3.svg" alt="rain3.svg">';
    } else if (icon == 521) {
      descriptionTextElement.innerHTML = weatherDescriptionRain[7];
      weatherIconElement.innerHTML =
        '<img src="./images/rain3.svg" alt="rain3.svg">';
    } else if (icon == 522) {
      descriptionTextElement.innerHTML = weatherDescriptionRain[8];
      weatherIconElement.innerHTML =
        '<img src="./images/rain3.svg" alt="rain3.svg">';
    } else if (icon == 531) {
      descriptionTextElement.innerHTML = weatherDescriptionRain[9];
      weatherIconElement.innerHTML =
        '<img src="./images/rain3.svg" alt="rain3.svg">';
    } else if (icon == 600) {
      descriptionTextElement.innerHTML = weatherDescriptionSnow[0];
      weatherIconElement.innerHTML =
        '<img src="./images/snow1.svg" alt="snow1.svg">';
    } else if (icon == 601) {
      descriptionTextElement.innerHTML = weatherDescriptionSnow[1];
      weatherIconElement.innerHTML =
        '<img src="./images/snow1.svg" alt="snow1.svg">';
    } else if (icon == 602) {
      descriptionTextElement.innerHTML = weatherDescriptionSnow[2];
      weatherIconElement.innerHTML =
        '<img src="./images/snow2.svg" alt="snow2.svg">';
    } else if (icon == 611) {
      descriptionTextElement.innerHTML = weatherDescriptionSnow[3];
      weatherIconElement.innerHTML =
        '<img src="./images/rainIce.svg" alt="rainIce.svg">';
    } else if (icon == 612) {
      descriptionTextElement.innerHTML = weatherDescriptionSnow[4];
      weatherIconElement.innerHTML =
        '<img src="./images/rainIce.svg" alt="rainIce.svg">';
    } else if (icon == 613) {
      descriptionTextElement.innerHTML = weatherDescriptionSnow[5];
      weatherIconElement.innerHTML =
        '<img src="./images/rainIce.svg" alt="rainIce.svg">';
    } else if (icon == 615) {
      descriptionTextElement.innerHTML = weatherDescriptionSnow[6];
      weatherIconElement.innerHTML =
        '<img src="./images/rainIce.svg" alt="rainIce.svg">';
    } else if (icon == 616) {
      descriptionTextElement.innerHTML = weatherDescriptionSnow[7];
      weatherIconElement.innerHTML =
        '<img src="./images/rainIce.svg" alt="rainIce.svg">';
    } else if (icon == 620) {
      descriptionTextElement.innerHTML = weatherDescriptionSnow[8];
      weatherIconElement.innerHTML =
        '<img src="./images/rainIce.svg" alt="rainIce.svg">';
    } else if (icon == 621) {
      descriptionTextElement.innerHTML = weatherDescriptionSnow[9];
      weatherIconElement.innerHTML =
        '<img src="./images/rainIce.svg" alt="rainIce.svg">';
    } else if (icon == 622) {
      descriptionTextElement.innerHTML = weatherDescriptionSnow[10];
      weatherIconElement.innerHTML =
        '<img src="./images/rainIce.svg" alt="rainIce.svg">';
    } else if (icon == 701) {
      descriptionTextElement.innerHTML = weatherDescriptionAtmosphere[0];
      weatherIconElement.innerHTML =
        '<img src="./images/atmosphere.svg" alt="atmosphere.svg">';
    } else if (icon == 711) {
      descriptionTextElement.innerHTML = weatherDescriptionAtmosphere[1];
      weatherIconElement.innerHTML =
        '<img src="./images/atmosphere.svg" alt="atmosphere.svg">';
    } else if (icon == 721) {
      descriptionTextElement.innerHTML = weatherDescriptionAtmosphere[2];
      weatherIconElement.innerHTML =
        '<img src="./images/atmosphere.svg" alt="atmosphere.svg">';
    } else if (icon == 731) {
      descriptionTextElement.innerHTML = weatherDescriptionAtmosphere[3];
      weatherIconElement.innerHTML =
        '<img src="./images/undefined.svg" alt="undefined.svg">';
    } else if (icon == 741) {
      descriptionTextElement.innerHTML = weatherDescriptionAtmosphere[4];
      weatherIconElement.innerHTML =
        '<img src="./images/undefined.svg" alt="undefined.svg">';
    } else if (icon == 751) {
      descriptionTextElement.innerHTML = weatherDescriptionAtmosphere[5];
      weatherIconElement.innerHTML =
        '<img src="./images/undefined.svg" alt="undefined.svg">';
    } else if (icon == 761) {
      descriptionTextElement.innerHTML = weatherDescriptionAtmosphere[6];
      weatherIconElement.innerHTML =
        '<img src="./images/undefined.svg" alt="undefined.svg">';
    } else if (icon == 762) {
      descriptionTextElement.innerHTML = weatherDescriptionAtmosphere[7];
      weatherIconElement.innerHTML =
        '<img src="./images/undefined.svg" alt="undefined.svg">';
    } else if (icon == 771) {
      descriptionTextElement.innerHTML = weatherDescriptionAtmosphere[8];
      weatherIconElement.innerHTML =
        '<img src="./images/undefined.svg" alt="undefined.svg">';
    } else if (icon == 781) {
      descriptionTextElement.innerHTML = weatherDescriptionAtmosphere[9];
      weatherIconElement.innerHTML =
        '<img src="./images/undefined.svg" alt="undefined.svg">';
    } else if (icon == 800) {
      descriptionTextElement.innerHTML = weatherDescriptionClear;
      weatherIconElement.innerHTML =
        '<img src="./images/clearSky.svg" alt="clearSky.svg">';
    } else if (icon == 801) {
      descriptionTextElement.innerHTML = weatherDescriptionClouds[0];
      weatherIconElement.innerHTML =
        '<img src="./images/cloud1.svg" alt="cloud1.svg">';
    } else if (icon == 802) {
      descriptionTextElement.innerHTML = weatherDescriptionClouds[1];
      weatherIconElement.innerHTML =
        '<img src="./images/cloud1.svg" alt="cloud1.svg">';
    } else if (icon == 803) {
      descriptionTextElement.innerHTML = weatherDescriptionClouds[2];
      weatherIconElement.innerHTML =
        '<img src="./images/cloud2.svg" alt="cloud2.svg">';
    } else if (icon == 804) {
      descriptionTextElement.innerHTML = weatherDescriptionClouds[3];
      weatherIconElement.innerHTML =
        '<img src="./images/cloud2.svg" alt="cloud2.svg">';
    }
  } else {
    temperatureTextElement.innerHTML = "";
    descriptionTextElement.innerHTML = "";
    weatherIconElement.innerHTML = "";
  }
}
async function getWeatherData(lat, long) {
  // console.log("getting");
  weatherData = await fetch(
    "https:/" +
      "/api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      long +
      "&appid=5298f9131293054b9041c1008d027218&lang=en"
  )
    .then(
      (data) => {
        return data.json();
      }
      // console.log(data);
    )
    .catch((error) => console.log(error));
  console.log(weatherData);
  if (weatherData.cod == 429 || weatherData.cod == 401) {
    weatherData = await fetch(
      "https:/" +
        "/api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        long +
        "&appid=a54f9198d868a2a698d450de7cb80b45&lang=en"
    )
      .then(
        (data) => {
          return data.json();
        }
        // console.log(data);
      )
      .catch((error) => console.log(error));
  }
  if (weatherData.cod == 429 || weatherData.cod == 401) {
    weatherData = await fetch(
      "https:/" +
        "/api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        long +
        "&appid=ce53f707aec2d95610f20b98cecc0571&lang=en"
    )
      .then(
        (data) => {
          return data.json();
        }
        // console.log(data);
      )
      .catch((error) => console.log(error));
  }
  if (weatherData.cod == 429 || weatherData.cod == 401) {
    weatherData = await fetch(
      "https:/" +
        "/api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        long +
        "&appid=7c541caef5fc7467fc7267e2f75649a9&lang=en"
    )
      .then(
        (data) => {
          return data.json();
        }
        // console.log(data);
      )
      .catch((error) => console.log(error));
  }
  if (weatherData.cod != 429) {
    updateWeatherContents(weatherData.main.temp, weatherData.weather[0].id);
  }
}
function getPosition(data) {
  latitude = data.coords.latitude;
  longitude = data.coords.longitude;
  getWeatherData(latitude, longitude);
  // console.log(latitude + " " + longitude);
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
  if (
    (timeData.getHours() >= 5 && timeData.getHours() <= 7) ||
    (timeData.getHours() >= 11 && timeData.getHours() <= 13) ||
    (timeData.getHours() >= 16 && timeData.getHours() <= 23)
  ) {
    if (
      (timeData.getHours() == 5 && timeData.getMinutes() == 0) ||
      (timeData.getHours() == 11 && timeData.getMinutes() == 0) ||
      (timeData.getHours() == 16 && timeData.getMinutes() == 0)
    ) {
      if (window.navigator.onLine) {
        if (latitude && longitude) {
          getWeatherData(latitude, longitude);
        } else {
          window.navigator.geolocation.getCurrentPosition(getPosition);
        }
      } else {
        window.addEventListener("online", () => {
          if (latitude && longitude) {
            getWeatherData(latitude, longitude);
          } else {
            window.navigator.geolocation.getCurrentPosition(getPosition);
          }
        });
      }
    }
  }
}
function setHeightFormWeatherContentsElementToBackgroundFooterElement(data) {
  backgroundFooterElement.setAttribute(
    "style",
    "--height: " + (data - 1.5) + "px"
  );
}
updateWeatherContents(false, false, false);
addScreenSizeToBodyElement();
bodyElement.onresize = addScreenSizeToBodyElement;
bodyElement.onclick = fullScreen;
setInterval(clockPulse, 1);
clockPulse();
if (window.navigator.onLine) {
  if (latitude && longitude) {
    getWeatherData(latitude, longitude);
  } else {
    window.navigator.geolocation.getCurrentPosition(getPosition);
  }
} else {
  window.addEventListener("online", () => {
    if (latitude && longitude) {
      getWeatherData(latitude, longitude);
    } else {
      window.navigator.geolocation.getCurrentPosition(getPosition);
    }
  });
}
