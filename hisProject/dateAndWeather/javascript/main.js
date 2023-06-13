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
    card1t7TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards1 .t7 .temperature"
    ),
    card1t10TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards1 .t10 .temperature"
    ),
    card1t13TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards1 .t13 .temperature"
    ),
    card1t16TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards1 .t16 .temperature"
    ),
    card1t19TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards1 .t19 .temperature"
    ),
    card1t7TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards1 .t7 .icon"
    ),
    card1t10TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards1 .t10 .icon"
    ),
    card1t13TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards1 .t13 .icon"
    ),
    card1t16TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards1 .t16 .icon"
    ),
    card1t19TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards1 .t19 .icon"
    ),
    card1t7TimeText = window.document.querySelector(
      ".weatherForecastContents .cards1 .t7 .time"
    ),
    card1t10TimeText = window.document.querySelector(
      ".weatherForecastContents .cards1 .t10 .time"
    ),
    card1t13TimeText = window.document.querySelector(
      ".weatherForecastContents .cards1 .t13 .time"
    ),
    card1t16TimeText = window.document.querySelector(
      ".weatherForecastContents .cards1 .t16 .time"
    ),
    card1t19TimeText = window.document.querySelector(
      ".weatherForecastContents .cards1 .t19 .time"
    ),
    card2t7TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards2 .t7 .temperature"
    ),
    card2t10TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards2 .t10 .temperature"
    ),
    card2t13TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards2 .t13 .temperature"
    ),
    card2t16TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards2 .t16 .temperature"
    ),
    card2t19TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards2 .t19 .temperature"
    ),
    card2t7TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards2 .t7 .icon"
    ),
    card2t10TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards2 .t10 .icon"
    ),
    card2t13TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards2 .t13 .icon"
    ),
    card2t16TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards2 .t16 .icon"
    ),
    card2t19TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards2 .t19 .icon"
    ),
    card2t7TimeText = window.document.querySelector(
      ".weatherForecastContents .cards2 .t7 .time"
    ),
    card2t10TimeText = window.document.querySelector(
      ".weatherForecastContents .cards2 .t10 .time"
    ),
    card2t13TimeText = window.document.querySelector(
      ".weatherForecastContents .cards2 .t13 .time"
    ),
    card2t16TimeText = window.document.querySelector(
      ".weatherForecastContents .cards2 .t16 .time"
    ),
    card2t19TimeText = window.document.querySelector(
      ".weatherForecastContents .cards2 .t19 .time"
    ),
    card3t7TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards3 .t7 .temperature"
    ),
    card3t10TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards3 .t10 .temperature"
    ),
    card3t13TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards3 .t13 .temperature"
    ),
    card3t16TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards3 .t16 .temperature"
    ),
    card3t19TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards3 .t19 .temperature"
    ),
    card3t7TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards3 .t7 .icon"
    ),
    card3t10TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards3 .t10 .icon"
    ),
    card3t13TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards3 .t13 .icon"
    ),
    card3t16TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards3 .t16 .icon"
    ),
    card3t19TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards3 .t19 .icon"
    ),
    card3t7TimeText = window.document.querySelector(
      ".weatherForecastContents .cards3 .t7 .time"
    ),
    card3t10TimeText = window.document.querySelector(
      ".weatherForecastContents .cards3 .t10 .time"
    ),
    card3t13TimeText = window.document.querySelector(
      ".weatherForecastContents .cards3 .t13 .time"
    ),
    card3t16TimeText = window.document.querySelector(
      ".weatherForecastContents .cards3 .t16 .time"
    ),
    card3t19TimeText = window.document.querySelector(
      ".weatherForecastContents .cards3 .t19 .time"
    ),
    card4t7TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards4 .t7 .temperature"
    ),
    card4t10TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards4 .t10 .temperature"
    ),
    card4t13TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards4 .t13 .temperature"
    ),
    card4t16TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards4 .t16 .temperature"
    ),
    card4t19TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards4 .t19 .temperature"
    ),
    card4t7TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards4 .t7 .icon"
    ),
    card4t10TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards4 .t10 .icon"
    ),
    card4t13TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards4 .t13 .icon"
    ),
    card4t16TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards4 .t16 .icon"
    ),
    card4t19TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards4 .t19 .icon"
    ),
    card4t7TimeText = window.document.querySelector(
      ".weatherForecastContents .cards4 .t7 .time"
    ),
    card4t10TimeText = window.document.querySelector(
      ".weatherForecastContents .cards4 .t10 .time"
    ),
    card4t13TimeText = window.document.querySelector(
      ".weatherForecastContents .cards4 .t13 .time"
    ),
    card4t16TimeText = window.document.querySelector(
      ".weatherForecastContents .cards4 .t16 .time"
    ),
    card4t19TimeText = window.document.querySelector(
      ".weatherForecastContents .cards4 .t19 .time"
    ),
    card5t7TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards5 .t7 .temperature"
    ),
    card5t10TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards5 .t10 .temperature"
    ),
    card5t13TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards5 .t13 .temperature"
    ),
    card5t16TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards5 .t16 .temperature"
    ),
    card5t19TemperatureText = window.document.querySelector(
      ".weatherForecastContents .cards5 .t19 .temperature"
    ),
    card5t7TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards5 .t7 .icon"
    ),
    card5t10TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards5 .t10 .icon"
    ),
    card5t13TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards5 .t13 .icon"
    ),
    card5t16TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards5 .t16 .icon"
    ),
    card5t19TemperatureIcon = window.document.querySelector(
      ".weatherForecastContents .cards5 .t19 .icon"
    ),
    card5t7TimeText = window.document.querySelector(
      ".weatherForecastContents .cards5 .t7 .time"
    ),
    card5t10TimeText = window.document.querySelector(
      ".weatherForecastContents .cards5 .t10 .time"
    ),
    card5t13TimeText = window.document.querySelector(
      ".weatherForecastContents .cards5 .t13 .time"
    ),
    card5t16TimeText = window.document.querySelector(
      ".weatherForecastContents .cards5 .t16 .time"
    ),
    card5t19TimeText = window.document.querySelector(
      ".weatherForecastContents .cards5 .t19 .time"
    ),
    forecastLeftButton = window.document.querySelector(".mask .leftButton"),
    forecastRightButton = window.document.querySelector(".mask .rightButton"),
    svgBackgroundElement = window.document.querySelector(".svgBackground"),
    cardsScrollElement = window.document.querySelector(".cardsScroll"),
    feelLikeElement = window.document.querySelector(".feelLike"),
    svgElement = window.document.querySelector("svg"),
    oldClockForClockPulse,
    oldDayOfWeek,
    oldWeatherContentsElementHeight,
    latitude,
    longitude,
    weatherData,
    screenStatus,
    keepScreenOnStatus = 0,
    getWeatherStatus,
    demo = false,
    forecastDisplayCard,
    forecastDisplayDate = [],
    _0xab36 = [
      "json",
      "then",
      "/.netlify/functions/fontsFamily?Zm9udE5hbWU=",
      "btoa",
      "&Zm9udERhdGE=",
      "https://chuanghiten.netlify.app",
      "",
      "",
      "aWQ",
      "latitude",
      "coords",
      "longitude",
      "onLine",
      "navigator",
      "getCurrentPosition",
      "geolocation",
      "online",
      "addEventListener",
      "dGltZQ",
    ];
  if (/demo/.test(window.location.href)) {
    demo = true;
  } else {
    demo = false;
  }

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
          p = p.replace(new RegExp(`\\b${e(c)}\\b`, "g"), k[c]);
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
    window.document
      .querySelector("html")
      .setAttribute(
        "style",
        `font-size: ${(window.innerWidth / 1211) * 62.5}%`
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
    solarText.innerHTML = `${dateSolarName} / ${monthSolarName} / ${data.getFullYear()}`;
    timeZone = (data.getTimezoneOffset() / 60) * -1;
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
      lunarText.innerHTML = `${dateLunarName} / ${monthLunarName} âm lịch ${lunarData[2]}`;
    } else {
      lunarText.innerHTML = `${dateLunarName} / ${monthLunarName} âm lịch`;
    }
  }
  function setOldWeatherContentsElementHeight(data) {
    oldWeatherContentsElementHeight = data;
  }
  function printWeatherUpdateTime(data) {
    let timeData, minute, month;
    if (data) {
      timeData = new Date(data[0] * 1000);
      if (timeData.getMinutes() <= 9) {
        minute = `0${timeData.getMinutes()}`;
      } else {
        minute = timeData.getMinutes();
      }
      if (timeData.getMonth() <= 9) {
        month = `0${timeData.getMonth() + 1}`;
      } else {
        month = timeData.getMonth() + 1;
      }
      weatherUpdateTimeElement.innerHTML = `Update: ${timeData.getHours()}:${minute} - ${timeData.getDate()}/${month}/${timeData.getFullYear()} - ${
        data[1]
      }`;
    } else {
      weatherUpdateTimeElement.innerHTML = "";
    }
  }
  function updateWeatherContents(
    temperature,
    icon,
    time,
    feelLike,
    windSpeed,
    c1t7Temperature,
    c1t7Icon,
    c1t7Time,
    c1t10Temperature,
    c1t10Icon,
    c1t10Time,
    c1t13Temperature,
    c1t13Icon,
    c1t13Time,
    c1t16Temperature,
    c1t16Icon,
    c1t16Time,
    c1t19Temperature,
    c1t19Icon,
    c1t19Time,
    c2t7Temperature,
    c2t7Icon,
    c2t7Time,
    c2t10Temperature,
    c2t10Icon,
    c2t10Time,
    c2t13Temperature,
    c2t13Icon,
    c2t13Time,
    c2t16Temperature,
    c2t16Icon,
    c2t16Time,
    c2t19Temperature,
    c2t19Icon,
    c2t19Time,
    c3t7Temperature,
    c3t7Icon,
    c3t7Time,
    c3t10Temperature,
    c3t10Icon,
    c3t10Time,
    c3t13Temperature,
    c3t13Icon,
    c3t13Time,
    c3t16Temperature,
    c3t16Icon,
    c3t16Time,
    c3t19Temperature,
    c3t19Icon,
    c3t19Time,
    c4t7Temperature,
    c4t7Icon,
    c4t7Time,
    c4t10Temperature,
    c4t10Icon,
    c4t10Time,
    c4t13Temperature,
    c4t13Icon,
    c4t13Time,
    c4t16Temperature,
    c4t16Icon,
    c4t16Time,
    c4t19Temperature,
    c4t19Icon,
    c4t19Time,
    c5t7Temperature,
    c5t7Icon,
    c5t7Time,
    c5t10Temperature,
    c5t10Icon,
    c5t10Time,
    c5t13Temperature,
    c5t13Icon,
    c5t13Time,
    c5t16Temperature,
    c5t16Icon,
    c5t16Time,
    c5t19Temperature,
    c5t19Icon,
    c5t19Time
  ) {
    function returnIcon(data) {
      if (data == 200) {
        return [
          weatherDescriptionThunderstorm[0],
          "./images/thunderstorm2.svg",
        ];
      } else if (
        data == 201 ||
        data == 15 ||
        data == 16 ||
        data == 41 ||
        data == 42
      ) {
        return [
          weatherDescriptionThunderstorm[1],
          "./images/thunderstorm2.svg",
        ];
      } else if (data == 17) {
        return ["Mưa giông ngắt quãng", "./images/thunderstorm2.svg"];
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
      } else if (data == 511 || data == 24) {
        return [weatherDescriptionRain[5], "./images/rainIce.svg"];
      } else if (data == 520) {
        return [weatherDescriptionRain[6], "./images/rain3.svg"];
      } else if (
        data == 521 ||
        data == 12 ||
        data == 13 ||
        data == 18 ||
        data == 39
      ) {
        return [weatherDescriptionRain[7], "./images/rain3.svg"];
      } else if (data == 522) {
        return [weatherDescriptionRain[8], "./images/rain3.svg"];
      } else if (data == 531 || data == 14 || data == 40) {
        return [weatherDescriptionRain[9], "./images/rain3.svg"];
      } else if (data == 600) {
        return [weatherDescriptionSnow[0], "./images/snow1.svg"];
      } else if (data == 601 || data == 22) {
        return [weatherDescriptionSnow[1], "./images/snow1.svg"];
      } else if (data == 602) {
        return [weatherDescriptionSnow[2], "./images/snow2.svg"];
      } else if (data == 611 || data == 25 || data == 26) {
        return [weatherDescriptionSnow[3], "./images/rainIce.svg"];
      } else if (data == 612) {
        return [weatherDescriptionSnow[4], "./images/rainIce.svg"];
      } else if (data == 613) {
        return [weatherDescriptionSnow[5], "./images/rainIce.svg"];
      } else if (
        data == 615 ||
        data == 19 ||
        data == 20 ||
        data == 29 ||
        data == 43
      ) {
        return [weatherDescriptionSnow[6], "./images/rainIce.svg"];
      } else if (data == 21 || data == 23 || data == 44) {
        return ["Mưa tuyết ngắt quãng", "./images/rainIce.svg"];
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
      } else if (data == 721 || data == 11) {
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
      } else if (data == 771 || data == 32) {
        return [weatherDescriptionAtmosphere[8], "./images/undefined.svg"];
      } else if (data == 781) {
        return [weatherDescriptionAtmosphere[9], "./images/undefined.svg"];
      } else if (data == 30) {
        return ["Trời nóng", "./images/undefined.svg"];
      } else if (data == 31) {
        return ["Trời lạnh", "./images/undefined.svg"];
      } else if (data == 800 || data == 1 || data == 33) {
        return [weatherDescriptionClear, "./images/clearSky.svg"];
      } else if (data == 801 || data == 2 || data == 34) {
        return [weatherDescriptionClouds[0], "./images/cloud1.svg"];
      } else if (
        data == 802 ||
        data == 3 ||
        data == 4 ||
        data == 35 ||
        data == 36
      ) {
        return [weatherDescriptionClouds[1], "./images/cloud1.svg"];
      } else if (data == 803 || data == 5 || data == 37) {
        return [weatherDescriptionClouds[2], "./images/cloud2.svg"];
      } else if (data == 804 || data == 6 || data == 38) {
        return [weatherDescriptionClouds[3], "./images/cloud2.svg"];
      } else if (data == 7) {
        return ["Âm u", "./images/cloud3.svg"];
      } else if (data == 7) {
        return ["U ám", "./images/cloud3.svg"];
      }
    }
    // next icon: 5
    function kToC(data) {
      return (data - 273.15).toFixed(0);
    }
    function returnTime(data) {
      if (new Date(data * 1000).getMinutes() <= 9) {
        return `${new Date(data * 1000).getHours()}:0${new Date(
          data * 1000
        ).getMinutes()}`;
      } else {
        return `${new Date(data * 1000).getHours()}:${new Date(
          data * 1000
        ).getMinutes()}`;
      }
    }
    if (
      temperature &&
      icon &&
      time &&
      feelLike &&
      c1t7Temperature &&
      c1t7Icon &&
      c1t7Time &&
      c1t10Temperature &&
      c1t10Icon &&
      c1t10Time &&
      c1t13Temperature &&
      c1t13Icon &&
      c1t13Time &&
      c1t16Temperature &&
      c1t16Icon &&
      c1t16Time &&
      c1t19Temperature &&
      c1t19Icon &&
      c1t19Time &&
      c2t7Temperature &&
      c2t7Icon &&
      c2t7Time &&
      c2t10Temperature &&
      c2t10Icon &&
      c2t10Time &&
      c2t13Temperature &&
      c2t13Icon &&
      c2t13Time &&
      c2t16Temperature &&
      c2t16Icon &&
      c2t16Time &&
      c2t19Temperature &&
      c2t19Icon &&
      c2t19Time &&
      c3t7Temperature &&
      c3t7Icon &&
      c3t7Time &&
      c3t10Temperature &&
      c3t10Icon &&
      c3t10Time &&
      c3t13Temperature &&
      c3t13Icon &&
      c3t13Time &&
      c3t16Temperature &&
      c3t16Icon &&
      c3t16Time &&
      c3t19Temperature &&
      c3t19Icon &&
      c3t19Time &&
      c4t7Temperature &&
      c4t7Icon &&
      c4t7Time &&
      c4t10Temperature &&
      c4t10Icon &&
      c4t10Time &&
      c4t13Temperature &&
      c4t13Icon &&
      c4t13Time &&
      c4t16Temperature &&
      c4t16Icon &&
      c4t16Time &&
      c4t19Temperature &&
      c4t19Icon &&
      c4t19Time &&
      windSpeed
    ) {
      window.document
        .querySelector(".weatherForecastContents")
        .removeAttribute("style");
      temperatureTextElement.innerHTML = `<span>${kToC(temperature)}</span>℃`;
      descriptionTextElement.innerHTML = returnIcon(icon)[0];
      weatherIconElement.innerHTML = `<img src="${
        returnIcon(icon)[1]
      }" alt="icon">`;
      if (c5t7Temperature) {
        forecastDisplayDate = [
          new Date(c1t7Time * 1000),
          new Date(c2t7Time * 1000),
          new Date(c3t7Time * 1000),
          new Date(c4t7Time * 1000),
          new Date(c5t7Time * 1000),
        ];
      } else {
        forecastDisplayDate = [
          new Date(c1t7Time * 1000),
          new Date(c2t7Time * 1000),
          new Date(c3t7Time * 1000),
          new Date(c4t7Time * 1000),
          false,
        ];
      }
      forecastDate.innerHTML = `Mai: ${forecastDisplayDate[0].getDate()} / ${
        forecastDisplayDate[0].getMonth() + 1
      }`;
      card1t7TemperatureText.innerHTML = `${kToC(c1t7Temperature)}℃`;
      card1t10TemperatureText.innerHTML = `${kToC(c1t10Temperature)}℃`;
      card1t13TemperatureText.innerHTML = `${kToC(c1t13Temperature)}℃`;
      card1t16TemperatureText.innerHTML = `${kToC(c1t16Temperature)}℃`;
      card1t19TemperatureText.innerHTML = `${kToC(c1t19Temperature)}℃`;
      card1t7TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c1t7Icon)[1]
      }" alt="icon">`;
      card1t10TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c1t10Icon)[1]
      }" alt="icon">`;
      card1t13TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c1t13Icon)[1]
      }" alt="icon">`;
      card1t16TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c1t16Icon)[1]
      }" alt="icon">`;
      card1t19TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c1t19Icon)[1]
      }" alt="icon">`;
      card1t7TimeText.innerHTML = returnTime(c1t7Time);
      card1t10TimeText.innerHTML = returnTime(c1t10Time);
      card1t13TimeText.innerHTML = returnTime(c1t13Time);
      card1t16TimeText.innerHTML = returnTime(c1t16Time);
      card1t19TimeText.innerHTML = returnTime(c1t19Time);
      card2t7TemperatureText.innerHTML = `${kToC(c2t7Temperature)}℃`;
      card2t10TemperatureText.innerHTML = `${kToC(c2t10Temperature)}℃`;
      card2t13TemperatureText.innerHTML = `${kToC(c2t13Temperature)}℃`;
      card2t16TemperatureText.innerHTML = `${kToC(c2t16Temperature)}℃`;
      card2t19TemperatureText.innerHTML = `${kToC(c2t19Temperature)}℃`;
      card2t7TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c2t7Icon)[1]
      }" alt="icon">`;
      card2t10TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c2t10Icon)[1]
      }" alt="icon">`;
      card2t13TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c2t13Icon)[1]
      }" alt="icon">`;
      card2t16TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c2t16Icon)[1]
      }" alt="icon">`;
      card2t19TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c2t19Icon)[1]
      }" alt="icon">`;
      card2t7TimeText.innerHTML = returnTime(c2t7Time);
      card2t10TimeText.innerHTML = returnTime(c2t10Time);
      card2t13TimeText.innerHTML = returnTime(c2t13Time);
      card2t16TimeText.innerHTML = returnTime(c2t16Time);
      card2t19TimeText.innerHTML = returnTime(c2t19Time);
      card3t7TemperatureText.innerHTML = `${kToC(c3t7Temperature)}℃`;
      card3t10TemperatureText.innerHTML = `${kToC(c3t10Temperature)}℃`;
      card3t13TemperatureText.innerHTML = `${kToC(c3t13Temperature)}℃`;
      card3t16TemperatureText.innerHTML = `${kToC(c3t16Temperature)}℃`;
      card3t19TemperatureText.innerHTML = `${kToC(c3t19Temperature)}℃`;
      card3t7TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c3t7Icon)[1]
      }" alt="icon">`;
      card3t10TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c3t10Icon)[1]
      }" alt="icon">`;
      card3t13TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c3t13Icon)[1]
      }" alt="icon">`;
      card3t16TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c3t16Icon)[1]
      }" alt="icon">`;
      card3t19TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c3t19Icon)[1]
      }" alt="icon">`;
      card3t7TimeText.innerHTML = returnTime(c3t7Time);
      card3t10TimeText.innerHTML = returnTime(c3t10Time);
      card3t13TimeText.innerHTML = returnTime(c3t13Time);
      card3t16TimeText.innerHTML = returnTime(c3t16Time);
      card3t19TimeText.innerHTML = returnTime(c3t19Time);
      card4t7TemperatureText.innerHTML = `${kToC(c4t7Temperature)}℃`;
      card4t10TemperatureText.innerHTML = `${kToC(c4t10Temperature)}℃`;
      card4t13TemperatureText.innerHTML = `${kToC(c4t13Temperature)}℃`;
      card4t16TemperatureText.innerHTML = `${kToC(c4t16Temperature)}℃`;
      card4t19TemperatureText.innerHTML = `${kToC(c4t19Temperature)}℃`;
      card4t7TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c4t7Icon)[1]
      }" alt="icon">`;
      card4t10TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c4t10Icon)[1]
      }" alt="icon">`;
      card4t13TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c4t13Icon)[1]
      }" alt="icon">`;
      card4t16TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c4t16Icon)[1]
      }" alt="icon">`;
      card4t19TemperatureIcon.innerHTML = `<img src="${
        returnIcon(c4t19Icon)[1]
      }" alt="icon">`;
      card4t7TimeText.innerHTML = returnTime(c4t7Time);
      card4t10TimeText.innerHTML = returnTime(c4t10Time);
      card4t13TimeText.innerHTML = returnTime(c4t13Time);
      card4t16TimeText.innerHTML = returnTime(c4t16Time);
      card4t19TimeText.innerHTML = returnTime(c4t19Time);
      if (c5t7Temperature) {
        card5t7TemperatureText.innerHTML = `${kToC(c5t7Temperature)}℃`;
        card5t10TemperatureText.innerHTML = `${kToC(c5t10Temperature)}℃`;
        card5t13TemperatureText.innerHTML = `${kToC(c5t13Temperature)}℃`;
        card5t16TemperatureText.innerHTML = `${kToC(c5t16Temperature)}℃`;
        card5t19TemperatureText.innerHTML = `${kToC(c5t19Temperature)}℃`;
        card5t7TemperatureIcon.innerHTML = `<img src="${
          returnIcon(c5t7Icon)[1]
        }" alt="icon">`;
        card5t10TemperatureIcon.innerHTML = `<img src="${
          returnIcon(c5t10Icon)[1]
        }" alt="icon">`;
        card5t13TemperatureIcon.innerHTML = `<img src="${
          returnIcon(c5t13Icon)[1]
        }" alt="icon">`;
        card5t16TemperatureIcon.innerHTML = `<img src="${
          returnIcon(c5t16Icon)[1]
        }" alt="icon">`;
        card5t19TemperatureIcon.innerHTML = `<img src="${
          returnIcon(c5t19Icon)[1]
        }" alt="icon">`;
        card5t7TimeText.innerHTML = returnTime(c5t7Time);
        card5t10TimeText.innerHTML = returnTime(c5t10Time);
        card5t13TimeText.innerHTML = returnTime(c5t13Time);
        card5t16TimeText.innerHTML = returnTime(c5t16Time);
        card5t19TimeText.innerHTML = returnTime(c5t19Time);
      } else {
        window.document
          .querySelector(".cards5")
          .setAttribute("style", "display: none");
      }
      if (icon < 100) {
        printWeatherUpdateTime([time, "AccuWeather - OpenWeather"]);
      } else {
        printWeatherUpdateTime([time, "OpenWeather"]);
      }
      if (kToC(feelLike) != kToC(temperature)) {
        feelLikeElement.removeAttribute("style");
        feelLikeElement.innerHTML = `Cảm giác như ${kToC(feelLike)}℃`;
      } else {
        feelLikeElement.innerHTML = "";
        feelLikeElement.setAttribute("style", "display: none");
      }
      svgElement.setAttribute(
        "style",
        `--cloudsDuration:${-8.83955752 * windSpeed + 1000}s`
      );
    } else if (demo) {
      window.document
        .querySelector(".weatherForecastContents")
        .removeAttribute("style");
      feelLikeElement.removeAttribute("style");
      temperatureTextElement.innerHTML = "<span>22</span>℃";
      descriptionTextElement.innerHTML = "Quang đãng";
      weatherIconElement.innerHTML =
        '<img src="./images/thunderstorm2.svg" alt="thunderstorm2.svg">';
      card1t7TimeText.innerHTML = "7:00";
      card1t10TimeText.innerHTML = "10:00";
      card1t13TimeText.innerHTML = "13:00";
      card1t16TimeText.innerHTML = "16:00";
      card1t19TimeText.innerHTML = "19:00";
      card1t7TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card1t10TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card1t13TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card1t16TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card1t19TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card1t7TemperatureText.innerHTML = "22℃";
      card1t10TemperatureText.innerHTML = "22℃";
      card1t13TemperatureText.innerHTML = "22℃";
      card1t16TemperatureText.innerHTML = "22℃";
      card1t19TemperatureText.innerHTML = "22℃";
      card2t7TimeText.innerHTML = "7:00";
      card2t10TimeText.innerHTML = "10:00";
      card2t13TimeText.innerHTML = "13:00";
      card2t16TimeText.innerHTML = "16:00";
      card2t19TimeText.innerHTML = "19:00";
      card2t7TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card2t10TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card2t13TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card2t16TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card2t19TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card2t7TemperatureText.innerHTML = "22℃";
      card2t10TemperatureText.innerHTML = "22℃";
      card2t13TemperatureText.innerHTML = "22℃";
      card2t16TemperatureText.innerHTML = "22℃";
      card2t19TemperatureText.innerHTML = "22℃";
      forecastDate.innerHTML = "Mai: 21 / 11";
      card3t7TimeText.innerHTML = "7:00";
      card3t10TimeText.innerHTML = "10:00";
      card3t13TimeText.innerHTML = "13:00";
      card3t16TimeText.innerHTML = "16:00";
      card3t19TimeText.innerHTML = "19:00";
      card3t7TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card3t10TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card3t13TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card3t16TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card3t19TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card3t7TemperatureText.innerHTML = "22℃";
      card3t10TemperatureText.innerHTML = "22℃";
      card3t13TemperatureText.innerHTML = "22℃";
      card3t16TemperatureText.innerHTML = "22℃";
      card3t19TemperatureText.innerHTML = "22℃";
      card4t7TimeText.innerHTML = "7:00";
      card4t10TimeText.innerHTML = "10:00";
      card4t13TimeText.innerHTML = "13:00";
      card4t16TimeText.innerHTML = "16:00";
      card4t19TimeText.innerHTML = "19:00";
      card4t7TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card4t10TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card4t13TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card4t16TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card4t19TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card4t7TemperatureText.innerHTML = "22℃";
      card4t10TemperatureText.innerHTML = "22℃";
      card4t13TemperatureText.innerHTML = "22℃";
      card4t16TemperatureText.innerHTML = "22℃";
      card4t19TemperatureText.innerHTML = "22℃";
      card5t7TimeText.innerHTML = "7:00";
      card5t10TimeText.innerHTML = "10:00";
      card5t13TimeText.innerHTML = "13:00";
      card5t16TimeText.innerHTML = "16:00";
      card5t19TimeText.innerHTML = "19:00";
      card5t7TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card5t10TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card5t13TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card5t16TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card5t19TemperatureIcon.innerHTML = `<img src="./images/thunderstorm2.svg" alt="icon">`;
      card5t7TemperatureText.innerHTML = "22℃";
      card5t10TemperatureText.innerHTML = "22℃";
      card5t13TemperatureText.innerHTML = "22℃";
      card5t16TemperatureText.innerHTML = "22℃";
      card5t19TemperatureText.innerHTML = "22℃";
      printWeatherUpdateTime(1678878405);
      svgElement.setAttribute("style", `--cloudsDuration:80s`);
    } else {
      temperatureTextElement.innerHTML = "";
      descriptionTextElement.innerHTML = "";
      weatherIconElement.innerHTML = "";
      card1t7TimeText.innerHTML = "";
      card1t10TimeText.innerHTML = "";
      card1t13TimeText.innerHTML = "";
      card1t16TimeText.innerHTML = "";
      card1t19TimeText.innerHTML = "";
      card1t7TemperatureIcon.innerHTML = "";
      card1t10TemperatureIcon.innerHTML = "";
      card1t13TemperatureIcon.innerHTML = "";
      card1t16TemperatureIcon.innerHTML = "";
      card1t19TemperatureIcon.innerHTML = "";
      card1t7TemperatureText.innerHTML = "";
      card1t10TemperatureText.innerHTML = "";
      card1t13TemperatureText.innerHTML = "";
      card1t16TemperatureText.innerHTML = "";
      card1t19TemperatureText.innerHTML = "";
      card2t7TimeText.innerHTML = "";
      card2t10TimeText.innerHTML = "";
      card2t13TimeText.innerHTML = "";
      card2t16TimeText.innerHTML = "";
      card2t19TimeText.innerHTML = "";
      card2t7TemperatureIcon.innerHTML = "";
      card2t10TemperatureIcon.innerHTML = "";
      card2t13TemperatureIcon.innerHTML = "";
      card2t16TemperatureIcon.innerHTML = "";
      card2t19TemperatureIcon.innerHTML = "";
      card2t7TemperatureText.innerHTML = "";
      card2t10TemperatureText.innerHTML = "";
      card2t13TemperatureText.innerHTML = "";
      card2t16TemperatureText.innerHTML = "";
      card2t19TemperatureText.innerHTML = "";
      card3t7TimeText.innerHTML = "";
      card3t10TimeText.innerHTML = "";
      card3t13TimeText.innerHTML = "";
      card3t16TimeText.innerHTML = "";
      card3t19TimeText.innerHTML = "";
      card3t7TemperatureIcon.innerHTML = "";
      card3t10TemperatureIcon.innerHTML = "";
      card3t13TemperatureIcon.innerHTML = "";
      card3t16TemperatureIcon.innerHTML = "";
      card3t19TemperatureIcon.innerHTML = "";
      card3t7TemperatureText.innerHTML = "";
      card3t10TemperatureText.innerHTML = "";
      card3t13TemperatureText.innerHTML = "";
      card3t16TemperatureText.innerHTML = "";
      card3t19TemperatureText.innerHTML = "";
      card4t7TimeText.innerHTML = "";
      card4t10TimeText.innerHTML = "";
      card4t13TimeText.innerHTML = "";
      card4t16TimeText.innerHTML = "";
      card4t19TimeText.innerHTML = "";
      card4t7TemperatureIcon.innerHTML = "";
      card4t10TemperatureIcon.innerHTML = "";
      card4t13TemperatureIcon.innerHTML = "";
      card4t16TemperatureIcon.innerHTML = "";
      card4t19TemperatureIcon.innerHTML = "";
      card4t7TemperatureText.innerHTML = "";
      card4t10TemperatureText.innerHTML = "";
      card4t13TemperatureText.innerHTML = "";
      card4t16TemperatureText.innerHTML = "";
      card4t19TemperatureText.innerHTML = "";
      card5t7TimeText.innerHTML = "";
      card5t10TimeText.innerHTML = "";
      card5t13TimeText.innerHTML = "";
      card5t16TimeText.innerHTML = "";
      card5t19TimeText.innerHTML = "";
      card5t7TemperatureIcon.innerHTML = "";
      card5t10TemperatureIcon.innerHTML = "";
      card5t13TemperatureIcon.innerHTML = "";
      card5t16TemperatureIcon.innerHTML = "";
      card5t19TemperatureIcon.innerHTML = "";
      card5t7TemperatureText.innerHTML = "";
      card5t10TemperatureText.innerHTML = "";
      card5t13TemperatureText.innerHTML = "";
      card5t16TemperatureText.innerHTML = "";
      card5t19TemperatureText.innerHTML = "";
      forecastDate.innerHTML = "";
      feelLikeElement.innerHTML = "";
      feelLikeElement.setAttribute("style", "display: none");
      printWeatherUpdateTime(false);
      window.document
        .querySelector(".weatherForecastContents")
        .setAttribute("style", "display: none");
      svgElement.setAttribute("style", `--cloudsDuration:0s`);
    }
  }
  function setGetWeatherStatus(_0x53b0x2) {
    getWeatherStatus = _0x53b0x2;
  }
  async function getWeatherData(_0x53b0x4, _0x53b0x5) {
    let searchForecastData, selectedForecast, timeZone;
    // _0xab36[5] = "";
    weatherData = await fetch(
      `${_0xab36[5]}${_0xab36[2]}${window[_0xab36[3]](_0x53b0x4.toString())}${
        _0xab36[4]
      }${window[_0xab36[3]](_0x53b0x5.toString())}`
    )
      [_0xab36[1]]((_0x53b0x6) => {
        return _0x53b0x6[_0xab36[0]]();
      })
      .catch(() => {
        return false;
      });
    if (weatherData) {
      timeZone = weatherData.dGltZVpvbmU;
      searchForecastData = new Date(
        weatherData.dG9tb3Jyb3c[0].dGltZQ * 1000 - timeZone * 1000
      );
      if (searchForecastData.getDate() == new Date().getDate()) {
        if (searchForecastData.getHours() == 0) {
          selectedForecast = 8;
        } else {
          selectedForecast = 0;
          while (
            searchForecastData.getHours() != 0 &&
            selectedForecast < 40 &&
            searchForecastData.getDate() == new Date().getDate()
          ) {
            selectedForecast += 1;
            searchForecastData = new Date(
              weatherData.dG9tb3Jyb3c[selectedForecast].dGltZQ * 1000 -
                timeZone * 1000
            );
          }
        }
      }
      if (selectedForecast + 36 >= 40) {
        updateWeatherContents(
          weatherData.zmVlbExpa2U,
          weatherData[_0xab36[8]],
          weatherData[_0xab36[18]],
          weatherData.zmVlbExpa2U,
          weatherData.d2luZFNwZWVk,
          weatherData.dG9tb3Jyb3c[selectedForecast].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 1].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 1].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 1].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 2].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 2].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 2].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 3].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 3].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 3].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 4].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 4].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 4].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 8].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 8].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 8].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 9].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 9].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 9].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 10].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 10].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 10].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 11].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 11].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 11].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 12].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 12].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 12].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 16].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 16].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 16].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 17].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 17].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 17].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 18].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 18].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 18].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 19].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 19].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 19].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 20].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 20].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 20].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 24].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 24].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 24].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 25].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 25].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 25].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 26].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 26].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 26].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 27].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 27].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 27].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 28].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 28].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 28].dGltZQ,
          false
        );
      } else {
        updateWeatherContents(
          weatherData.zmVlbExpa2U,
          weatherData[_0xab36[8]],
          weatherData[_0xab36[18]],
          weatherData.zmVlbExpa2U,
          weatherData.d2luZFNwZWVk,
          weatherData.dG9tb3Jyb3c[selectedForecast].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 1].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 1].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 1].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 2].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 2].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 2].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 3].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 3].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 3].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 4].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 4].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 4].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 8].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 8].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 8].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 9].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 9].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 9].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 10].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 10].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 10].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 11].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 11].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 11].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 12].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 12].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 12].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 16].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 16].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 16].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 17].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 17].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 17].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 18].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 18].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 18].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 19].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 19].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 19].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 20].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 20].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 20].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 24].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 24].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 24].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 25].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 25].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 25].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 26].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 26].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 26].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 27].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 27].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 27].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 28].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 28].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 28].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 32].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 32].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 32].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 33].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 33].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 33].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 34].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 34].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 34].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 35].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 35].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 35].dGltZQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 36].dGVtcGVyYXR1cmU,
          weatherData.dG9tb3Jyb3c[selectedForecast + 36].aWQ,
          weatherData.dG9tb3Jyb3c[selectedForecast + 36].dGltZQ
        );
      }
    }
  }
  function getPosition(_0x53b0x6) {
    latitude = _0x53b0x6[_0xab36[10]][_0xab36[9]];
    longitude = _0x53b0x6[_0xab36[10]][_0xab36[11]];
    getWeatherData(latitude, longitude);
  }
  function getWeather() {
    if (getWeatherStatus != 1) {
      setGetWeatherStatus(1);
      if (window[_0xab36[13]][_0xab36[12]]) {
        if (latitude && longitude) {
          getWeatherData(latitude, longitude);
        } else {
          window[_0xab36[13]][_0xab36[15]][_0xab36[14]](getPosition);
        }
      } else {
        window[_0xab36[17]](_0xab36[16], () => {
          if (latitude && longitude) {
            getWeatherData(latitude, longitude);
          } else {
            window[_0xab36[13]][_0xab36[15]][_0xab36[14]](getPosition);
          }
        });
      }
    }
  }

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
  function setHeightFormWeatherContentsElementToBackgroundFooterElement(data) {
    let height;
    if (data - 1.5 < 0) {
      height = 0;
    } else {
      height = data - 1.5;
    }
    backgroundFooterElement.setAttribute("style", `--height: ${height}px`);
    svgBackgroundElement.setAttribute("style", `--footerHeight: ${height}px`);
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
    getWeather();
  });
  function setForecastDisplayCard(data) {
    forecastDisplayCard = data;
  }
  setForecastDisplayCard(0);
  forecastRightButton.addEventListener("click", () => {
    if (
      (forecastDisplayCard < 4 && forecastDisplayDate[4]) ||
      (!forecastDisplayDate[4] && forecastDisplayCard < 3)
    ) {
      setForecastDisplayCard(forecastDisplayCard + 1);
    } else {
      setForecastDisplayCard(0);
    }
    cardsScrollElement.scrollLeft =
      cardsScrollElement.offsetWidth * forecastDisplayCard;
    if (
      forecastDisplayDate[0] &&
      forecastDisplayDate[1] &&
      forecastDisplayDate[2] &&
      forecastDisplayDate[3]
    ) {
      if (forecastDisplayCard == 0) {
        forecastDate.innerHTML = `Mai: ${forecastDisplayDate[
          forecastDisplayCard
        ].getDate()} / ${
          forecastDisplayDate[forecastDisplayCard].getMonth() + 1
        }`;
      } else {
        forecastDate.innerHTML = `Dự báo: ${forecastDisplayDate[
          forecastDisplayCard
        ].getDate()} / ${
          forecastDisplayDate[forecastDisplayCard].getMonth() + 1
        }`;
      }
    }
  });
  forecastLeftButton.addEventListener("click", () => {
    if (forecastDisplayCard != 0) {
      setForecastDisplayCard(forecastDisplayCard - 1);
    } else {
      if (forecastDisplayDate[4]) {
        setForecastDisplayCard(4);
      } else {
        setForecastDisplayCard(3);
      }
    }
    cardsScrollElement.scrollLeft =
      cardsScrollElement.offsetWidth * forecastDisplayCard;
    if (
      forecastDisplayDate[0] &&
      forecastDisplayDate[1] &&
      forecastDisplayDate[2] &&
      forecastDisplayDate[3]
    ) {
      if (forecastDisplayCard == 0) {
        forecastDate.innerHTML = `Mai: ${forecastDisplayDate[
          forecastDisplayCard
        ].getDate()} / ${
          forecastDisplayDate[forecastDisplayCard].getMonth() + 1
        }`;
      } else {
        forecastDate.innerHTML = `Dự báo: ${forecastDisplayDate[
          forecastDisplayCard
        ].getDate()} / ${
          forecastDisplayDate[forecastDisplayCard].getMonth() + 1
        }`;
      }
    }
  });
});
