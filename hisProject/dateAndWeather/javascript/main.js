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
    forecastDate = window.document.querySelector(
      ".weatherForecastContents .forecastDate"
    ),
    weatherUpdateTimeElement = window.document.querySelector(
      ".weatherContents .weatherUpdateTime"
    ),
    t7TemperatureText = window.document.querySelector(
      ".weatherForecastContents .t7 .temperature"
    ),
    t10TemperatureText = window.document.querySelector(
      ".weatherForecastContents .t10 .temperature"
    ),
    t13TemperatureText = window.document.querySelector(
      ".weatherForecastContents .t13 .temperature"
    ),
    t16TemperatureText = window.document.querySelector(
      ".weatherForecastContents .t16 .temperature"
    ),
    t19TemperatureText = window.document.querySelector(
      ".weatherForecastContents .t19 .temperature"
    ),
    t7TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .t7 .icon"
    ),
    t10TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .t10 .icon"
    ),
    t13TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .t13 .icon"
    ),
    t16TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .t16 .icon"
    ),
    t19TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .t19 .icon"
    ),
    t7TimeText = window.document.querySelector(
      ".weatherForecastContents .t7 .time"
    ),
    t10TimeText = window.document.querySelector(
      ".weatherForecastContents .t10 .time"
    ),
    t13TimeText = window.document.querySelector(
      ".weatherForecastContents .t13 .time"
    ),
    t16TimeText = window.document.querySelector(
      ".weatherForecastContents .t16 .time"
    ),
    t19TimeText = window.document.querySelector(
      ".weatherForecastContents .t19 .time"
    ),
    oldClockForClockPulse,
    oldDayOfWeek,
    oldWeatherContentsElementHeight,
    latitude,
    longitude,
    weatherData,
    screenStatus,
    keepScreenOnStatus = 0,
    getWeatherStatus,
    demo = false;
  if (/demo/.test(window.location.href)) {
    demo = true;
  } else {
    demo = false;
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
  function updateWeatherContents(
    temperature,
    icon,
    time,
    t7Temperature,
    t7Icon,
    t7Time,
    t10Temperature,
    t10Icon,
    t10Time,
    t13Temperature,
    t13Icon,
    t13Time,
    t16Temperature,
    t16Icon,
    t16Time,
    t19Temperature,
    t19Icon,
    t19Time
  ) {
    function returnIcon(data) {
      if (data == 200) {
        return [
          weatherDescriptionThunderstorm[0],
          "./images/thunderstorm2.svg",
        ];
      } else if (data == 201) {
        return [
          weatherDescriptionThunderstorm[1],
          "./images/thunderstorm2.svg",
        ];
      } else if (data == 202) {
        return [
          weatherDescriptionThunderstorm[2],
          "./images/thunderstorm2.svg",
        ];
      } else if (data == 210) {
        return [
          weatherDescriptionThunderstorm[3],
          "./images/thunderstorm1.svg",
        ];
      } else if (data == 211) {
        return [
          weatherDescriptionThunderstorm[4],
          "./images/thunderstorm1.svg",
        ];
      } else if (data == 212) {
        return [
          weatherDescriptionThunderstorm[5],
          "./images/thunderstorm1.svg",
        ];
      } else if (data == 221) {
        return [
          weatherDescriptionThunderstorm[6],
          "./images/thunderstorm1.svg",
        ];
      } else if (data == 230) {
        return [
          weatherDescriptionThunderstorm[7],
          "./images/thunderstorm1.svg",
        ];
      } else if (data == 231) {
        return [
          weatherDescriptionThunderstorm[8],
          "./images/thunderstorm2.svg",
        ];
      } else if (data == 232) {
        return [
          weatherDescriptionThunderstorm[9],
          "./images/thunderstorm2.svg",
        ];
      } else if (data == 300) {
        return [weatherDescriptionDrizzle[0], "./images/drizzle1.svg"];
      } else if (data == 301) {
        return [weatherDescriptionDrizzle[1], "./images/drizzle1.svg"];
      } else if (data == 302) {
        return [weatherDescriptionDrizzle[2], "./images/drizzle1.svg"];
      } else if (data == 310) {
        return [weatherDescriptionDrizzle[3], "./images/drizzle1.svg"];
      } else if (data == 311) {
        return [weatherDescriptionDrizzle[4], "./images/drizzle2.svg"];
      } else if (data == 312) {
        return [weatherDescriptionDrizzle[5], "./images/drizzle2.svg"];
      } else if (data == 313) {
        return [weatherDescriptionDrizzle[6], "./images/drizzle2.svg"];
      } else if (data == 314) {
        return [weatherDescriptionDrizzle[7], "./images/drizzle2.svg"];
      } else if (data == 321) {
        return [weatherDescriptionDrizzle[8], "./images/drizzle2.svg"];
      } else if (data == 500) {
        return [weatherDescriptionRain[0], "./images/rain1.svg"];
      } else if (data == 501) {
        return [weatherDescriptionRain[1], "./images/rain1.svg"];
      } else if (data == 502) {
        return [weatherDescriptionRain[2], "./images/rain1.svg"];
      } else if (data == 503) {
        return [weatherDescriptionRain[3], "./images/rain1.svg"];
      } else if (data == 504) {
        return [weatherDescriptionRain[4], "./images/rain2.svg"];
      } else if (data == 511) {
        return [weatherDescriptionRain[5], "./images/rainIce.svg"];
      } else if (data == 520) {
        return [weatherDescriptionRain[6], "./images/rain3.svg"];
      } else if (data == 521) {
        return [weatherDescriptionRain[7], "./images/rain3.svg"];
      } else if (data == 522) {
        return [weatherDescriptionRain[8], "./images/rain3.svg"];
      } else if (data == 531) {
        return [weatherDescriptionRain[9], "./images/rain3.svg"];
      } else if (data == 600) {
        return [weatherDescriptionSnow[0], "./images/snow1.svg"];
      } else if (data == 601) {
        return [weatherDescriptionSnow[1], "./images/snow1.svg"];
      } else if (data == 602) {
        return [weatherDescriptionSnow[2], "./images/snow2.svg"];
      } else if (data == 611) {
        return [weatherDescriptionSnow[3], "./images/rainIce.svg"];
      } else if (data == 612) {
        return [weatherDescriptionSnow[4], "./images/rainIce.svg"];
      } else if (data == 613) {
        return [weatherDescriptionSnow[5], "./images/rainIce.svg"];
      } else if (data == 615) {
        return [weatherDescriptionSnow[6], "./images/rainIce.svg"];
      } else if (data == 616) {
        return [weatherDescriptionSnow[7], "./images/rainIce.svg"];
      } else if (data == 620) {
        return [weatherDescriptionSnow[8], "./images/rainIce.svg"];
      } else if (data == 621) {
        return [weatherDescriptionSnow[9], "./images/rainIce.svg"];
      } else if (data == 622) {
        return [weatherDescriptionSnow[10], "./images/rainIce.svg"];
      } else if (data == 701) {
        return [weatherDescriptionAtmosphere[0], "./images/atmosphere.svg"];
      } else if (data == 711) {
        return [weatherDescriptionAtmosphere[1], "./images/atmosphere.svg"];
      } else if (data == 721) {
        return [weatherDescriptionAtmosphere[2], "./images/atmosphere.svg"];
      } else if (data == 731) {
        return [weatherDescriptionAtmosphere[3], "./images/undefined.svg"];
      } else if (data == 741) {
        return [weatherDescriptionAtmosphere[4], "./images/undefined.svg"];
      } else if (data == 751) {
        return [weatherDescriptionAtmosphere[5], "./images/undefined.svg"];
      } else if (data == 761) {
        return [weatherDescriptionAtmosphere[6], "./images/undefined.svg"];
      } else if (data == 762) {
        return [weatherDescriptionAtmosphere[7], "./images/undefined.svg"];
      } else if (data == 771) {
        return [weatherDescriptionAtmosphere[8], "./images/undefined.svg"];
      } else if (data == 781) {
        return [weatherDescriptionAtmosphere[9], "./images/undefined.svg"];
      } else if (data == 800) {
        return [weatherDescriptionClear, "./images/clearSky.svg"];
      } else if (data == 801) {
        return [weatherDescriptionClouds[0], "./images/cloud1.svg"];
      } else if (data == 802) {
        return [weatherDescriptionClouds[1], "./images/cloud1.svg"];
      } else if (data == 803) {
        return [weatherDescriptionClouds[2], "./images/cloud2.svg"];
      } else if (data == 804) {
        return [weatherDescriptionClouds[3], "./images/cloud2.svg"];
      }
    }
    if (
      temperature &&
      icon &&
      time &&
      t7Temperature &&
      t7Icon &&
      t7Time &&
      t10Temperature &&
      t10Icon &&
      t10Time &&
      t13Temperature &&
      t13Icon &&
      t13Time &&
      t16Temperature &&
      t16Icon &&
      t16Time &&
      t19Temperature &&
      t19Icon &&
      t19Time
    ) {
      window.document
        .querySelector(".weatherForecastContents")
        .removeAttribute("style");
      temperatureTextElement.innerHTML =
        "<span>" + (temperature - 273.15).toFixed(0) + "</span>℃";
      descriptionTextElement.innerHTML = returnIcon(icon)[0];
      weatherIconElement.innerHTML = `<img src="${
        returnIcon(icon)[1]
      }" alt="icon">`;
      forecastDate.innerHTML =
        "Mai: " +
        new Date(t7Time * 1000).getDate() +
        " / " +
        (new Date(t7Time * 1000).getMonth() + 1);
      t7TemperatureText.innerHTML = (t7Temperature - 273.15).toFixed(0) + "℃";
      t10TemperatureText.innerHTML = (t10Temperature - 273.15).toFixed(0) + "℃";
      t13TemperatureText.innerHTML = (t13Temperature - 273.15).toFixed(0) + "℃";
      t16TemperatureText.innerHTML = (t16Temperature - 273.15).toFixed(0) + "℃";
      t19TemperatureText.innerHTML = (t19Temperature - 273.15).toFixed(0) + "℃";
      t7TemperatureIcon.innerHTML = `<img src="${
        returnIcon(t7Icon)[1]
      }" alt="icon">`;
      t10TemperatureIcon.innerHTML = `<img src="${
        returnIcon(t10Icon)[1]
      }" alt="icon">`;
      t13TemperatureIcon.innerHTML = `<img src="${
        returnIcon(t13Icon)[1]
      }" alt="icon">`;
      t16TemperatureIcon.innerHTML = `<img src="${
        returnIcon(t16Icon)[1]
      }" alt="icon">`;
      t19TemperatureIcon.innerHTML = `<img src="${
        returnIcon(t19Icon)[1]
      }" alt="icon">`;
      function returnTime(data) {
        if (new Date(data * 1000).getMinutes() <= 9) {
          return (
            new Date(data * 1000).getHours() +
            ":0" +
            new Date(data * 1000).getMinutes()
          );
        } else {
          return (
            new Date(data * 1000).getHours() +
            ":" +
            new Date(data * 1000).getMinutes()
          );
        }
      }
      t7TimeText.innerHTML = returnTime(t7Time);
      t10TimeText.innerHTML = returnTime(t10Time);
      t13TimeText.innerHTML = returnTime(t13Time);
      t16TimeText.innerHTML = returnTime(t16Time);
      t19TimeText.innerHTML = returnTime(t19Time);
      printWeatherUpdateTime(time);
    } else if (demo) {
      window.document
        .querySelector(".weatherForecastContents")
        .removeAttribute("style");
      temperatureTextElement.innerHTML = "<span>22</span>℃";
      descriptionTextElement.innerHTML = "Quang đãng";
      weatherIconElement.innerHTML =
        '<img src="./images/thunderstorm2.svg" alt="thunderstorm2.svg">';
      t7TimeText.innerHTML = "7:00";
      t10TimeText.innerHTML = "10:00";
      t13TimeText.innerHTML = "13:00";
      t16TimeText.innerHTML = "16:00";
      t19TimeText.innerHTML = "19:00";
      t7TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      t10TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      t13TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      t16TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      t19TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      t7TemperatureText.innerHTML = "22℃";
      t10TemperatureText.innerHTML = "22℃";
      t13TemperatureText.innerHTML = "22℃";
      t16TemperatureText.innerHTML = "22℃";
      t19TemperatureText.innerHTML = "22℃";
      forecastDate.innerHTML = "Mai: 21 / 11";
      printWeatherUpdateTime(1678878405);
    } else {
      temperatureTextElement.innerHTML = "";
      descriptionTextElement.innerHTML = "";
      weatherIconElement.innerHTML = "";
      t7TimeText.innerHTML = "";
      t10TimeText.innerHTML = "";
      t13TimeText.innerHTML = "";
      t16TimeText.innerHTML = "";
      t19TimeText.innerHTML = "";
      t7TemperatureIcon.innerHTML = "";
      t10TemperatureIcon.innerHTML = "";
      t13TemperatureIcon.innerHTML = "";
      t16TemperatureIcon.innerHTML = "";
      t19TemperatureIcon.innerHTML = "";
      t7TemperatureText.innerHTML = "";
      t10TemperatureText.innerHTML = "";
      t13TemperatureText.innerHTML = "";
      t16TemperatureText.innerHTML = "";
      t19TemperatureText.innerHTML = "";
      forecastDate.innerHTML = "";
      printWeatherUpdateTime(false);
      window.document
        .querySelector(".weatherForecastContents")
        .setAttribute("style", "display: none");
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
      "i t(w){u=w}M i h(L,K){3=J I(`H:)[2[1]]((c)=>{G c[2[0]]()});b(3[2[6]]!=F||3[2[6]]!=E){D(3[2[7]],3[2[8]],3[2[C]],3.4.q.f,3.4.q.e,3.4.q.d,3.4.p.f,3.4.p.e,3.4.p.d,3.4.o.f,3.4.o.e,3.4.o.d,3.4.n.f,3.4.n.e,3.4.n.d,3.4.m.f,3.4.m.e,3.4.m.d)}}i j(c){a=c[2[v]][2[9]];5=c[2[v]][2[B]];h(a,5)}i A(){b(u!=1){t(1);b(g[2[k]][2[z]]){b(a&&5){h(a,5)}l{g[2[k]][2[s]][2[r]](j)}}l{g[2[y]](2[x],()=>{b(a&&5){h(a,5)}l{g[2[k]][2[s]][2[r]](j)}})}}}",
      49,
      49,
      "\x7C\x7C\x5F\x30\x78\x61\x62\x33\x36\x7C\x77\x65\x61\x74\x68\x65\x72\x44\x61\x74\x61\x7C\x64\x47\x39\x74\x62\x33\x4A\x79\x62\x33\x63\x7C\x6C\x6F\x6E\x67\x69\x74\x75\x64\x65\x7C\x7C\x7C\x7C\x7C\x6C\x61\x74\x69\x74\x75\x64\x65\x7C\x69\x66\x7C\x5F\x30\x78\x35\x33\x62\x30\x78\x36\x7C\x64\x47\x6C\x74\x5A\x51\x7C\x61\x57\x51\x7C\x64\x47\x56\x74\x63\x47\x56\x79\x59\x58\x52\x31\x63\x6D\x55\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x67\x65\x74\x57\x65\x61\x74\x68\x65\x72\x44\x61\x74\x61\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x67\x65\x74\x50\x6F\x73\x69\x74\x69\x6F\x6E\x7C\x31\x33\x7C\x65\x6C\x73\x65\x7C\x74\x31\x39\x7C\x74\x31\x36\x7C\x74\x31\x33\x7C\x74\x31\x30\x7C\x74\x37\x7C\x31\x34\x7C\x31\x35\x7C\x73\x65\x74\x47\x65\x74\x57\x65\x61\x74\x68\x65\x72\x53\x74\x61\x74\x75\x73\x7C\x67\x65\x74\x57\x65\x61\x74\x68\x65\x72\x53\x74\x61\x74\x75\x73\x7C\x31\x30\x7C\x5F\x30\x78\x35\x33\x62\x30\x78\x32\x7C\x31\x36\x7C\x31\x37\x7C\x31\x32\x7C\x67\x65\x74\x57\x65\x61\x74\x68\x65\x72\x7C\x31\x31\x7C\x31\x38\x7C\x75\x70\x64\x61\x74\x65\x57\x65\x61\x74\x68\x65\x72\x43\x6F\x6E\x74\x65\x6E\x74\x73\x7C\x34\x30\x31\x7C\x34\x32\x39\x7C\x72\x65\x74\x75\x72\x6E\x7C\x68\x74\x74\x70\x73\x7C\x66\x65\x74\x63\x68\x7C\x61\x77\x61\x69\x74\x7C\x5F\x30\x78\x35\x33\x62\x30\x78\x35\x7C\x5F\x30\x78\x35\x33\x62\x30\x78\x34\x7C\x61\x73\x79\x6E\x63".split(
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
  updateWeatherContents();
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
