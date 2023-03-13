document.addEventListener("DOMContentLoaded", () => {
  let bodyElement = window.document.querySelector("body"),
    dayText = window.document.querySelector(".dateContents .day"),
    solarText = window.document.querySelector(".dateContents .calendar .solar"),
    lunarText = window.document.querySelector(".dateContents .calendar .lunar"),
    weatherContentsElement = window.document.querySelector(".weatherContents"),
    backgroundFooterElement = window.document.querySelector(
      ".background .backgroundFooter"
    ),
    temperatureTextElement = window.document.querySelector(
      ".weatherContents .weatherMainContents .text .temperature"
    ),
    descriptionTextElement = window.document.querySelector(
      ".weatherContents .weatherMainContents .text .description"
    ),
    weatherIconElement = window.document.querySelector(
      ".weatherContents .weatherMainContents .icon"
    ),
    screenOffElement = window.document.querySelector(".screenOff"),
    mainContentsElement = window.document.querySelector(".mainContents"),
    backgroundElement = window.document.querySelector(".background"),
    weatherUpdateTimeElement = window.document.querySelector(
      ".weatherContents .weatherUpdateTime"
    ),
    oldClockForClockPulse,
    oldDayOfWeek,
    oldWeatherContentsElementHeight,
    latitude,
    longitude,
    weatherData,
    screenStatus,
    keepScreenOnStatus = 0,
    getWeatherStatus,demo=false;
  if(/demo/.test(window.location.href)){
  	demo=true
  }else{
  	demo = false
  }
  eval(
    (function (p, a, c, k, e, d) {
      e = function (c) {
        return c.toString(36);
      };
      if (!"".replace(/^/, String)) {
        while (c--) {
          d[c.toString(a)] = k[c] || c.toString(a);
        }
        k = [
          function (e) {
            return d[e];
          },
        ];
        e = function () {
          return "\\w+";
        };
        c = 1;
      }
      while (c--) {
        if (k[c]) {
          p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
        }
      }
      return p;
    })(
      'm l=["k","j","/.i/h/g?f=","e","&d=","","c","b","a","9","8","7","6","5","4","3","2","1","0",];',
      23,
      23,
      "\x64\x47\x6C\x74\x5A\x51\x7C\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72\x7C\x6F\x6E\x6C\x69\x6E\x65\x7C\x67\x65\x6F\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x67\x65\x74\x43\x75\x72\x72\x65\x6E\x74\x50\x6F\x73\x69\x74\x69\x6F\x6E\x7C\x6E\x61\x76\x69\x67\x61\x74\x6F\x72\x7C\x6F\x6E\x4C\x69\x6E\x65\x7C\x6C\x6F\x6E\x67\x69\x74\x75\x64\x65\x7C\x63\x6F\x6F\x72\x64\x73\x7C\x6C\x61\x74\x69\x74\x75\x64\x65\x7C\x61\x57\x51\x7C\x64\x47\x56\x74\x63\x47\x56\x79\x59\x58\x52\x31\x63\x6D\x55\x7C\x63\x33\x52\x68\x64\x48\x56\x7A\x51\x32\x39\x6B\x5A\x51\x7C\x5A\x6D\x39\x75\x64\x45\x52\x68\x64\x47\x45\x7C\x62\x74\x6F\x61\x7C\x5A\x6D\x39\x75\x64\x45\x35\x68\x62\x57\x55\x7C\x66\x6F\x6E\x74\x73\x46\x61\x6D\x69\x6C\x79\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x73\x7C\x6E\x65\x74\x6C\x69\x66\x79\x7C\x74\x68\x65\x6E\x7C\x6A\x73\x6F\x6E\x7C\x5F\x30\x78\x61\x62\x33\x36\x7C\x76\x61\x72".split(
        "|"
      ),
      0,
      {}
    )
  );

  eval(
    ((p, a, c, k, e, d) => {
      e = (c) => {
        return (
          (c < a ? "" : e(parseInt(c / a))) +
          ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        );
      };
      if (!"".replace(/^/, String)) {
        while (c--) {
          d[e(c)] = k[c] || e(c);
        }
        k = [
          (e) => {
            return d[e];
          },
        ];
        e = () => {
          return "\\w+";
        };
        c = 1;
      }
      while (c--) {
        if (k[c]) {
          p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
        }
      }
      return p;
    })(
      '\x47\x20\x46\x3D\x5B"\x30\u01B0\x61\x20\x35\xF4\x31\x20\x32\u1EB9"\x2C"\x30\u01B0\x61\x20\x35\xF4\x31"\x2C"\x30\u01B0\x61\x20\x35\xF4\x31\x20\x6C\u1EDB\x6E"\x2C"\x33\xF4\x31\x20\x32\u1EB9"\x2C"\x33\xF4\x31"\x2C"\x33\xF4\x31\x20\x6C\u1EDB\x6E"\x2C"\x33\xF4\x31\x20\x31\u1EAF\x74\x20\x66\xE3\x31"\x2C"\x33\xF4\x31\x20\x76\xE0\x20\x6D\u1ED9\x74\x20\xED\x74\x20\x6D\u01B0\x61\x20\x38"\x2C"\x30\u01B0\x61\x20\x38\x20\x76\xE0\x20\x35\xF4\x31"\x2C"\x30\u01B0\x61\x20\x62\u1EE5\x69\x20\x76\xE0\x20\x35\xF4\x31"\x2C\x5D\x2C\x45\x3D\x5B"\x30\u01B0\x61\x20\x38\x20\x32\u1EB9"\x2C"\x30\u01B0\x61\x20\x38"\x2C"\x30\u01B0\x61\x20\x62\u1EE5\x69"\x2C"\x30\u01B0\x61\x20\x34\xF9\x6E\x20\x32\u1EB9"\x2C"\x30\u01B0\x61\x20\x34\xF9\x6E"\x2C"\x30\u01B0\x61\x20\x6E\u1EB7\x31\x20\x68\u1EA1\x74"\x2C"\x30\u01B0\x61\x20\x34\xF9\x6E\x20\x6E\u1EB7\x31\x20\x68\u1EA1\x74"\x2C"\x30\u01B0\x61\x20\x34\xF9\x6E\x20\x76\xE0\x20\x6D\u1ED9\x74\x20\x44\xFA\x74\x20\x6D\u01B0\x61\x20\x6E\u1EB7\x31\x20\x68\u1EA1\x74"\x2C"\x30\u01B0\x61\x20\x34\xF9\x6E\x20\x76\xE0\x20\x6D\u01B0\x61\x20\x6E\u1EB7\x31\x20\x68\u1EA1\x74"\x2C"\x30\u01B0\x61\x20\x72\xE0\x6F\x20\x32\u1ECF"\x2C\x5D\x2C\x41\x3D\x5B"\x30\u01B0\x61\x20\x32\u1EB9"\x2C"\x30\u01B0\x61\x20\x76\u1EEB\x61"\x2C"\x30\u01B0\x61\x20\x6C\u1EDB\x6E"\x2C"\x30\u01B0\x61\x20\x72\u1EA5\x74\x20\x6C\u1EDB\x6E"\x2C"\x30\u01B0\x61\x20\x65"\x2C"\x30\u01B0\x61\x20\x6C\u1EA1\x32"\x2C"\x30\u01B0\x61\x20\x34\xF9\x6E\x20\x76\xE0\x20\x6D\u01B0\x61\x20\x32\u1EB9"\x2C"\x30\u01B0\x61\x20\x72\xE0\x6F"\x2C"\x30\u01B0\x61\x20\x72\xE0\x6F\x20\x6C\u1EDB\x6E"\x2C"\x30\u01B0\x61\x20\x72\xE0\x6F\x20\x31\u1EAF\x74\x20\x66\xE3\x31"\x2C\x5D\x2C\x7A\x3D\x5B"\x39\u1EBF\x74\x20\x32\u1EB9"\x2C"\x39\u1EBF\x74"\x2C"\x39\u1EBF\x74\x20\x64\xE0\x79"\x2C"\x30\u01B0\x61\x20\u0111\xE1"\x2C"\x30\u01B0\x61\x20\u0111\xE1\x20\x32\u1EB9"\x2C"\x30\u01B0\x61\x20\u0111\xE1"\x2C"\x30\u01B0\x61\x20\x76\xE0\x20\x37\u1EBF\x74"\x2C"\x30\u01B0\x61\x20\x76\xE0\x20\x37\u1EBF\x74\x20\x64\xE0\x79"\x2C"\x30\u01B0\x61\x20\x76\xE0\x20\x37\u1EBF\x74\x20\x6D\u1ECF\x31"\x2C"\x30\u01B0\x61\x20\x76\xE0\x20\x37\u1EBF\x74\x20\x6C\u1EDB\x6E"\x2C\x5D\x2C\x78\x3D\x5B"\x36\u01B0\u01A1\x31\x20"\x2C"\x36\u01B0\u01A1\x31\x20\x6D\u1EDD"\x2C"\x36\u01B0\u01A1\x31\x20\x6D\xF9"\x2C"\x42\xE3\x6F\x20\x63\xE1\x74"\x2C"\x36\u01B0\u01A1\x31"\x2C"\x43\xE1\x74"\x2C"\x42\u1EE5\x69\x20\u0111\u1EA5\x74"\x2C"\x77\x20\x6E\xFA\x69\x20\x6C\u1EED\x61"\x2C"\x33\xF3\x20\x65"\x2C"\x73\u1ED3\x31\x20\x71"\x2C\x5D\x2C\x70\x3D"\x6B\x20\u0111\xE3\x31"\x2C\x6A\x3D\x5B"\xCD\x74\x20\x6D\xE2\x79"\x2C"\x30\xE2\x79\x20\x72\u1EA3\x69\x20\x72\xE1\x63"\x2C"\x67\u1EC1\x75\x20\x6D\xE2\x79"\x2C"\x30\xE2\x79\x20\x64\xE0\x79"\x5D\x3B',
      43,
      43,
      "\x4D\x7C\x6E\x67\x7C\x6E\x68\x7C\x47\x69\x7C\x70\x68\x7C\x67\x69\x7C\x53\x7C\x74\x75\x79\x7C\x62\x61\x79\x7C\x54\x75\x79\x7C\x7C\x7C\x7C\x7C\x74\x6F\x7C\x71\x75\x7C\x4E\x68\x69\x7C\x7C\x7C\x77\x65\x61\x74\x68\x65\x72\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x43\x6C\x6F\x75\x64\x73\x7C\x51\x75\x61\x6E\x67\x7C\x7C\x7C\x7C\x7C\x77\x65\x61\x74\x68\x65\x72\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x43\x6C\x65\x61\x72\x7C\x70\x68\x6F\x6E\x67\x7C\x7C\x43\x75\x7C\x7C\x7C\x7C\x54\x72\x6F\x7C\x77\x65\x61\x74\x68\x65\x72\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x41\x74\x6D\x6F\x73\x70\x68\x65\x72\x65\x7C\x7C\x77\x65\x61\x74\x68\x65\x72\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x53\x6E\x6F\x77\x7C\x77\x65\x61\x74\x68\x65\x72\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x52\x61\x69\x6E\x7C\x7C\x7C\x63\x68\x7C\x77\x65\x61\x74\x68\x65\x72\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x44\x72\x69\x7A\x7A\x6C\x65\x7C\x77\x65\x61\x74\x68\x65\x72\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x54\x68\x75\x6E\x64\x65\x72\x73\x74\x6F\x72\x6D\x7C\x76\x61\x72".split(
        "\x7C"
      ),
      0,
      {}
    )
  );

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
  function printWeatherUpdateTime(data) {
    let timeData, minute, month;
    if (data) {
      timeData = new Date(data * 1000);
      if (timeData.getMinutes() <= 9) {
        minute = "0" + timeData.getMinutes();
      } else {
        minute = timeData.getMinutes();
      }
      if (timeData.getMonth() <= 9) {
        month = "0" + (timeData.getMonth() + 1);
      } else {
        month = timeData.getMonth() + 1;
      }
      weatherUpdateTimeElement.innerHTML =
        "Update: " +
        timeData.getHours() +
        ":" +
        minute +
        " - " +
        timeData.getDate() +
        "/" +
        month +
        "/" +
        timeData.getFullYear();
    } else {
      weatherUpdateTimeElement.innerHTML = "";
    }
  }
  function updateWeatherContents(temperature, icon, time) {
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
      printWeatherUpdateTime(time);
    } else if(demo){
      temperatureTextElement.innerHTML = "<span>22</span>℃";
      descriptionTextElement.innerHTML = "Quang đãng";
      weatherIconElement.innerHTML = '<img src="./images/thunderstorm2.svg" alt="thunderstorm2.svg">';
      printWeatherUpdateTime(1600000000000);
    }else {
      temperatureTextElement.innerHTML = "";
      descriptionTextElement.innerHTML = "";
      weatherIconElement.innerHTML = "";
      printWeatherUpdateTime(false);
    }
  }
  eval(
    (function (p, a, c, k, e, d) {
      e = function (c) {
        return (
          (c < a ? "" : e(parseInt(c / a))) +
          ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        );
      };
      if (!"".replace(/^/, String)) {
        while (c--) {
          d[e(c)] = k[c] || e(c);
        }
        k = [
          function (e) {
            return d[e];
          },
        ];
        e = function () {
          return "\\w+";
        };
        c = 1;
      }
      while (c--) {
        if (k[c]) {
          p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
        }
      }
      return p;
    })(
      "i o(u){p=u}H i h(t,s){e=G F(`${a[2]}${b[a[3]](t.r())}${a[4]}${b[a[3]](s.r())}${a[5]}`)[a[1]]((g)=>{E g[a[0]]()});f(e[a[6]]!=D||e[a[6]]!=C){B(e[a[7]],e[a[8]],e[a[A]])}}i j(g){d=g[a[q]][a[9]];c=g[a[q]][a[z]];h(d,c)}i y(){f(p!=1){o(1);f(b[a[k]][a[x]]){f(d&&c){h(d,c)}l{b[a[k]][a[n]][a[m]](j)}}l{b[a[w]](a[v],()=>{f(d&&c){h(d,c)}l{b[a[k]][a[n]][a[m]](j)}})}}}",
      44,
      44,
      "\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x7C\x5F\x30\x78\x61\x62\x33\x36\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x6C\x6F\x6E\x67\x69\x74\x75\x64\x65\x7C\x6C\x61\x74\x69\x74\x75\x64\x65\x7C\x77\x65\x61\x74\x68\x65\x72\x44\x61\x74\x61\x7C\x69\x66\x7C\x5F\x30\x78\x35\x33\x62\x30\x78\x36\x7C\x67\x65\x74\x57\x65\x61\x74\x68\x65\x72\x44\x61\x74\x61\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x67\x65\x74\x50\x6F\x73\x69\x74\x69\x6F\x6E\x7C\x31\x33\x7C\x65\x6C\x73\x65\x7C\x31\x34\x7C\x31\x35\x7C\x73\x65\x74\x47\x65\x74\x57\x65\x61\x74\x68\x65\x72\x53\x74\x61\x74\x75\x73\x7C\x67\x65\x74\x57\x65\x61\x74\x68\x65\x72\x53\x74\x61\x74\x75\x73\x7C\x31\x30\x7C\x74\x6F\x53\x74\x72\x69\x6E\x67\x7C\x5F\x30\x78\x35\x33\x62\x30\x78\x35\x7C\x5F\x30\x78\x35\x33\x62\x30\x78\x34\x7C\x5F\x30\x78\x35\x33\x62\x30\x78\x32\x7C\x31\x36\x7C\x31\x37\x7C\x31\x32\x7C\x67\x65\x74\x57\x65\x61\x74\x68\x65\x72\x7C\x31\x31\x7C\x31\x38\x7C\x75\x70\x64\x61\x74\x65\x57\x65\x61\x74\x68\x65\x72\x43\x6F\x6E\x74\x65\x6E\x74\x73\x7C\x34\x30\x31\x7C\x34\x32\x39\x7C\x72\x65\x74\x75\x72\x6E\x7C\x66\x65\x74\x63\x68\x7C\x61\x77\x61\x69\x74\x7C\x61\x73\x79\x6E\x63".split(
        "|"
      ),
      0,
      {}
    )
  );

  function setScreenStatus(status) {
    screenStatus = status;
  }
  function offScreen() {
    if (screenStatus != 0) {
      setScreenStatus(0);
      screenOffElement.setAttribute("style", "display: block");
      mainContentsElement.setAttribute("style", "display: none");
      backgroundElement.setAttribute("style", "display: none");
    }
  }
  function onScreen() {
    if (screenStatus != 1) {
      setScreenStatus(1);
      screenOffElement.removeAttribute("style");
      mainContentsElement.removeAttribute("style");
      backgroundElement.removeAttribute("style");
    }
  }
  function setKeepScreenOnStatus(status) {
    keepScreenOnStatus = status;
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
    if (
      weatherContentsElement.offsetHeight != oldWeatherContentsElementHeight
    ) {
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
      onScreen();
      if (
        (timeData.getHours() == 5 && timeData.getMinutes() == 0) ||
        (timeData.getHours() == 6 && timeData.getMinutes() == 0) ||
        (timeData.getHours() == 11 && timeData.getMinutes() == 0) ||
        (timeData.getHours() == 12 && timeData.getMinutes() == 0) ||
        (timeData.getHours() == 16 && timeData.getMinutes() == 0) ||
        (timeData.getHours() == 18 && timeData.getMinutes() == 0) ||
        (timeData.getHours() == 20 && timeData.getMinutes() == 0) ||
        (timeData.getHours() == 22 && timeData.getMinutes() == 0)
      ) {
        getWeather();
      } else {
        setGetWeatherStatus(0);
      }
    } else {
      if (keepScreenOnStatus == 0) {
        offScreen();
      } else {
        if (
          (timeData.getHours() == 0 && timeData.getMinutes() == 0) ||
          (timeData.getHours() == 2 && timeData.getMinutes() == 0) ||
          (timeData.getHours() == 4 && timeData.getMinutes() == 0) ||
          (timeData.getHours() == 8 && timeData.getMinutes() == 0) ||
          (timeData.getHours() == 10 && timeData.getMinutes() == 0) ||
          (timeData.getHours() == 14 && timeData.getMinutes() == 0)
        ) {
          getWeather();
        } else {
          setGetWeatherStatus(0);
        }
      }
    }
    if (
      keepScreenOnStatus == 1 &&
      timeData.getHours() == 0 &&
      timeData.getMinutes() == 0
    ) {
      if (keepScreenOnStatus != 0) {
        setKeepScreenOnStatus(0);
      }
    }
  }
  function setHeightFormWeatherContentsElementToBackgroundFooterElement(data) {
    backgroundFooterElement.setAttribute(
      "style",
      "--height: " + (data - 1.5) + "px"
    );
  }
  updateWeatherContents(false, false);
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
  screenOffElement.addEventListener("click", () => {
    setKeepScreenOnStatus(1);
    onScreen();
  });
});
