var body = window.document.querySelector("body"),
  second = window.document.querySelector("div.second"),
  minute = window.document.querySelector("div.minute"),
  hour = window.document.querySelector("div.hour"),
  days = window.document.querySelector("div.days"),
  cssDisplay = window.document.querySelector("link.display"),
  cssLeaf = window.document.querySelector("link.leaf"),
  date,
  month,
  season,
  seasonCheck,
  session,
  sessionData,
  sessionDataUrl,
  latitudeData,
  longitudeData,
  weatherData,
  weatherDataUrl,
  sunrise,
  sunset,
  time,
  secondTime,
  secondDeg,
  minuteTime,
  minuteDeg,
  hourTime,
  hourDeg,
  dates,
  day,
  timeZone,
  dateToJulius,
  juliusDate,
  JdNew,
  k,
  last,
  arc,
  i,
  lunar,
  leapMonth,
  leaf,
  weatherId,
  cityNameDataUrl,
  cityNameData,
  cityName,
  countryCodeDataUrl,
  countryCodeData,
  countryCode,
  temperature,
  temperatureMax,
  temperatureMin,
  temperaturePrint = document.querySelector(
    ".sun .weatherInfo .temperatureMedium .temperatureInfo .content"
  ),
  temperatureMinPrint = document.querySelector(
    ".sun .weatherInfo .temperatureMin .temperatureInfo .content"
  ),
  temperatureMaxPrint = document.querySelector(
    ".sun .weatherInfo .temperatureMax .temperatureInfo .content"
  ),
  oldValue;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(positionData);
} else {
  alert("Positioning is off");
}
async function positionData(position) {
  latitudeData = position.coords.latitude;
  longitudeData = position.coords.longitude;
  //latitudeData=15;longitudeData=108;
  sessionDataUrl =
    "https:/" +
    "/api.ipgeolocation.io/astronomy?apiKey=7e95d0e738164ff9a60bb77fbe2fdb0a&lat=" +
    latitudeData +
    "&long=" +
    longitudeData;
  weatherDataUrl =
    "https:/" +
    "/api.openweathermap.org/data/2.5/weather?lat=" +
    latitudeData +
    "&lon=" +
    longitudeData +
    "&appid=5298f9131293054b9041c1008d027218";
  cityNameDataUrl =
    "https:/" +
    "/api.openweathermap.org/geo/1.0/reverse?lat=" +
    latitudeData +
    "&lon=" +
    longitudeData +
    "&appid=5298f9131293054b9041c1008d027218";
  countryCodeDataUrl =
    "https:/" +
    "/api.opencagedata.com/geocode/v1/json?q=" +
    latitudeData +
    "+" +
    longitudeData +
    "&key=2dc8792399604acb8a984d4d32ac03d1&pretty=0";
  sessionData = await fetch(sessionDataUrl).then((data) => data.json());
  weatherData = await fetch(weatherDataUrl).then((data) => data.json());
  cityNameData = await fetch(cityNameDataUrl).then((data) => data.json());
  countryCodeData = await fetch(countryCodeDataUrl).then((data) => data.json());
  sunrise =
    parseInt(sessionData.sunrise.slice(0, 2)) +
    parseInt(sessionData.sunrise.slice(-2.0)) / 60;
  sunset =
    parseInt(sessionData.sunset.slice(0, 2)) +
    parseInt(sessionData.sunset.slice(-2.0)) / 60;
  //console.log(navigator.language);
  //console.log(cityNameData[0].local_names.vi);
  //console.log(typeof countryCodeData.countryCode);
  countryCode = countryCodeData.results[0].components.country_code;
  //console.log(countryCode);
  temperature = (weatherData.main.temp - 273.15).toFixed(0);
  temperatureMax = (weatherData.main.temp_max - 273.15).toFixed(0);
  temperatureMin = (weatherData.main.temp_min - 273.15).toFixed(0);
}
function main() {
  time = new Date();
  secondTime = time.getSeconds();
  //  secondTime=0;
  secondDeg = (secondTime * 360) / 60;
  minuteTime = time.getMinutes();
  minuteDeg = (minuteTime * 360) / 60;
  hourTime = time.getHours();
  hourDeg = (hourTime * 360) / 24;
  dates = ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
  day = dates[time.getDay()];
  timeZone =
    Number(
      time
        .toString()
        .slice(
          time.toString().indexOf("GMT") + 3,
          time.toString().indexOf("GMT") + 6
        )
    ) +
    Number(
      time
        .toString()
        .slice(
          time.toString().indexOf("GMT") + 6,
          time.toString().indexOf("GMT") + 8
        )
    ) /
      60;
  //timeZone=8;
  if (time.getDate() < 10) {
    date = "0" + time.getDate();
  } else {
    date = time.getDate();
  }
  if (time.getMonth() + 1 < 10) {
    month = "0" + (time.getMonth() + 1);
  } else {
    month = time.getMonth + 1;
  }
  year = time.getFullYear();
  second.style.transform = "rotate(" + secondDeg + "deg)";
  minute.style.transform =
    "translate(-50%,-50%) rotate(calc(" + minuteDeg + "deg + 90deg))";
  hour.style.transform =
    "translate(-50%,-50%) rotate(calc(" + hourDeg + "deg + 90deg))";
  days.innerHTML = day + "<span>" + date + "/" + month + "/" + year + "</span>";
  if (time.getMonth() + 1 >= 3 && time.getMonth() + 1 <= 5) {
    season = "spring";
  } else if (time.getMonth() + 1 >= 6 && time.getMonth() + 1 <= 8) {
    season = "summer";
  } else if (time.getMonth() + 1 >= 9 && time.getMonth() + 1 <= 11) {
    season = "fall";
  } else {
    season = "winter";
  }
  if (sunrise) {
  } else {
    sunrise = 5;
  }
  if (sunset) {
  } else {
    sunset = 18;
  }
  if (
    hourTime + minuteTime / 60 >= sunrise &&
    hourTime + minuteTime / 60 <= 10
  ) {
    session = "morning";
  } else if (
    hourTime + minuteTime / 60 >= 11 &&
    hourTime + minuteTime / 60 <= 15
  ) {
    session = "noon";
  } else if (
    hourTime + minuteTime / 60 >= 16 &&
    hourTime + minuteTime / 60 <= sunset
  ) {
    session = "afternoon";
  } else {
    session = "night";
  }
  /*
   * Copyright (c) 2006 Ho Ngoc Duc. All Rights Reserved.
   * Astronomical algorithms from the book "Astronomical Algorithms" by Jean Meeus, 1998
   *
   * Permission to use, copy, modify, and redistribute this software and its
   * documentation for personal, non-commercial use is hereby granted provided that
   * this copyright notice and appropriate documentation appears in all copies.
   * The algorithm is explained by Ho Ngoc Duc at "https://www.informatik.uni-leipzig.de/~duc/amlich/calrules_v02.html"
   */
  function ab(ac) {
    return Math.floor(ac);
  }
  function ad(ae) {
    return Math.sin(ae);
  }
  var ag = Math.PI,
    am = ag / 180;
  function p(k, d) {
    let u,
      ah = k / 1236.85,
      ak = ah * ah,
      al = ak * ah;
    if (ah < -11) {
      u =
        0.001 +
        0.000839 * ah +
        0.0002261 * ak -
        0.00000845 * al -
        0.000000081 * ah * al;
    } else {
      u = -0.000278 + 0.000265 * ah + 0.000262 * ak;
    }
    return ab(
      2415020.75933 +
        29.53058868 * k +
        0.0001178 * ak -
        0.000000155 * al +
        0.00033 * ad((166.56 + 132.87 * ah - 0.009173 * ak) * am) +
        ((0.1734 - 0.000393 * ah) *
          ad(
            (359.2242 + 29.10535608 * k - 0.0000333 * ak - 0.00000347 * al) * am
          ) +
          0.0021 *
            ad(
              2 *
                am *
                (359.2242 + 29.10535608 * k - 0.0000333 * ak - 0.00000347 * al)
            ) -
          0.4068 *
            ad(
              (306.0253 + 385.81691806 * k + 0.0107306 * ak + 0.00001236 * al) *
                am
            ) +
          0.0161 *
            ad(
              am *
                2 *
                (306.0253 + 385.81691806 * k + 0.0107306 * ak + 0.00001236 * al)
            ) -
          0.0004 *
            ad(
              am *
                3 *
                (306.0253 + 385.81691806 * k + 0.0107306 * ak + 0.00001236 * al)
            ) +
          0.0104 *
            ad(
              am *
                2 *
                (21.2964 + 390.67050646 * k - 0.0016528 * ak - 0.00000239 * al)
            ) -
          0.0051 *
            ad(
              am *
                (359.2242 +
                  29.10535608 * k -
                  0.0000333 * ak -
                  0.00000347 * al +
                  (306.0253 +
                    385.81691806 * k +
                    0.0107306 * ak +
                    0.00001236 * al))
            ) -
          0.0074 *
            ad(
              am *
                (359.2242 +
                  29.10535608 * k -
                  0.0000333 * ak -
                  0.00000347 * al -
                  (306.0253 +
                    385.81691806 * k +
                    0.0107306 * ak +
                    0.00001236 * al))
            ) +
          0.0004 *
            ad(
              am *
                (2 *
                  (21.2964 +
                    390.67050646 * k -
                    0.0016528 * ak -
                    0.00000239 * al) +
                  (359.2242 +
                    29.10535608 * k -
                    0.0000333 * ak -
                    0.00000347 * al))
            ) -
          0.0004 *
            ad(
              am *
                (2 *
                  (21.2964 +
                    390.67050646 * k -
                    0.0016528 * ak -
                    0.00000239 * al) -
                  (359.2242 +
                    29.10535608 * k -
                    0.0000333 * ak -
                    0.00000347 * al))
            ) -
          0.0006 *
            ad(
              am *
                (2 *
                  (21.2964 +
                    390.67050646 * k -
                    0.0016528 * ak -
                    0.00000239 * al) +
                  (306.0253 +
                    385.81691806 * k +
                    0.0107306 * ak +
                    0.00001236 * al))
            ) +
          0.001 *
            ad(
              am *
                (2 *
                  (21.2964 +
                    390.67050646 * k -
                    0.0016528 * ak -
                    0.00000239 * al) -
                  (306.0253 +
                    385.81691806 * k +
                    0.0107306 * ak +
                    0.00001236 * al))
            ) +
          0.0005 *
            ad(
              am *
                (2 *
                  (306.0253 +
                    385.81691806 * k +
                    0.0107306 * ak +
                    0.00001236 * al) +
                  (359.2242 +
                    29.10535608 * k -
                    0.0000333 * ak -
                    0.00000347 * al))
            )) -
        u +
        0.5 +
        d / 24
    );
  }
  function s(t, d) {
    let ai = t - 0.5 - d / 24 - 2451545,
      aj = ai / 36525,
      an = ai / 36525,
      ao = an * an,
      ap = an * ao,
      aq = 357.5291 + 35999.0503 * an - 0.0001559 * ao - 0.00000048 * ap,
      ar = 357.5291 + 35999.0503 * an - 0.0001559 * ao - 0.00000048 * ap;
    return ab(
      (((280.46645 +
        36000.76983 * an +
        0.0003032 * ao +
        ((1.9146 - 0.004817 * an - 0.000014 * ao) * ad(am * aq) +
          (0.019993 - 0.000101 * an) * ad(am * 2 * aq) +
          0.00029 * ad(am * 3 * aq))) *
        am -
        ag *
          2 *
          ab(
            ((280.46645 +
              36000.76983 * an +
              0.0003032 * ao +
              ((1.9146 - 0.004817 * an - 0.000014 * ao) * ad(am * ar) +
                (0.019993 - 0.000101 * an) * ad(am * 2 * ar) +
                0.00029 * ad(am * 3 * ar))) *
              am) /
              (ag * 2)
          )) /
        ag) *
        6
    );
  }
  function q(c, d) {
    let v, x, y;
    v =
      365 * (c + 4800) +
      ab((c + 4800) / 4) -
      ab((c + 4800) / 100) +
      ab((c + 4800) / 400) -
      31739;
    if (v < 2299161) {
      v = 365 * (c + 4800) + ab((c + 4800) / 4) - 31777;
    }
    x = p(ab((v - 2415021) / 29.530588853), d);
    y = s(x, d);
    if (y >= 9) {
      x = p(ab((v - 2415021) / 29.530588853) - 1, d);
    }
    return x;
  }
  function r(z, d) {
    let w, aa, k, i;
    k = ab((z - 2415021.076998695) / 29.530588853 + 0.5);
    w = 0;
    i = 1;
    aa = s(p(k + i, d), d);
    do {
      w = aa;
      i++;
      aa = s(p(k + i, d), d);
    } while (aa != w && i < 14);
    return i - 1;
  }
  function getLunar(a, b, c, d) {
    let e, f, g, h, i, j, k, m;
    m =
      a +
      ab((153 * (b + 12 * ab((14 - b) / 12) - 3) + 2) / 5) +
      365 * (c + 4800 - ab((14 - b) / 12)) +
      ab((c + 4800 - ab((14 - b) / 12)) / 4) -
      ab((c + 4800 - ab((14 - b) / 12)) / 100) +
      ab((c + 4800 - ab((14 - b) / 12)) / 400) -
      32045;
    if (m < 2299161) {
      m =
        a +
        ab((153 * (b + 12 * ab((14 - b) / 12) - 3) + 2) / 5) +
        365 * (c + 4800 - ab((14 - b) / 12)) +
        ab((c + 4800 - ab((14 - b) / 12)) / 4) -
        32083;
    }
    e = ab((m - 2415021.076998695) / 29.530588853);
    f = p(e + 1, d);
    if (f > m) {
      f = p(e, d);
    }
    i = m - f + 1;
    g = q(c, d);
    h = g;
    if (g >= f) {
      k = c;
      g = q(c - 1, d);
    } else {
      k = c + 1;
      h = q(c + 1, d);
    }
    n = ab((f - g) / 29);
    l = 0;
    j = n + 11;
    if (h - g > 365) {
      o = r(g, d);
      if (n >= o) {
        j = n + 10;
        if (n == o) {
          l = 1;
        }
      }
    }
    if (j > 12) {
      j = j - 12;
    }
    if (j >= 11 && n < 4) {
      k -= 1;
    }
    return [i, j, k, l];
  }
  /*
   * End!
   * Thank you Ho Ngoc Duc for the very useful Vietnamese lunar calculation algorithm!
   */
  lunar = getLunar(
    time.getDate(),
    time.getMonth() + 1,
    time.getFullYear(),
    timeZone
  );
  if (lunar[3] == 0) {
    leapMonth = "false";
  } else {
    leapMonth = "true";
  }
  if (
    (lunar[1] == 1 && lunar[0] >= 1 && lunar[0] <= 5) ||
    (lunar[1] == 12 && lunar[0] >= 28)
  ) {
    if (latitudeData < 16 && countryCode == "vn") {
      leaf = "apricotBlossom"; /* mai */
    } else {
      leaf = "peachBlossom"; /* đào */
    }
  } else {
    leaf = "default";
  }
  season = "spring";
  session = "morning";
  weatherId = "800";
  leaf = "default";

  /*

  if(10>minuteTime&&minuteTime>8){
    leaf="peachBlossom";
  }else if(6>minuteTime&&minuteTime>4){
    leaf="apricotBlossom";
  }else if(7>minuteTime&&minuteTime>5){
    leaf="default";
  }else if(8>minuteTime&&minuteTime>6){
    weatherId = "801";
  }else{
    weatherId = "802";
    leaf="peachBlossom";
  }

  season="spring";
  session = "morning";
  weatherId = "800";
  leaf = "default";
  *
  cssDisplay.setAttribute(
    "href",
    "./css/season/" +
      season +
      "/session/" +
      session +
      "/" +
      weatherId +
      "/style.css"
  );
  *
  if (leaf == "default" || session == "night") {
    cssLeaf.setAttribute("href", "./css/season/spring/leaf/leafDefault.css");
  } else {
    cssLeaf.setAttribute(
      "href",
      "./css/season/" +
        season +
        "/leaf" +
        "/" +
        leaf +
        "/" +
        session +
        "/" +
        weatherId +
        "/style.css"
    );
    //console.log(sunrise+', '+sunset);
  };
  */
  //console.log(navigator.language);
  console.log(
    "lunar = " +
      lunar[0] +
      "/" +
      lunar[1] +
      "/" +
      lunar[2] +
      " - leapMonth = " +
      leapMonth
  );
  //console.log(session);
  temperaturePrint.innerHTML = temperature + "<span>°C</span>";
  temperatureMinPrint.innerHTML = temperatureMin + "<span>°C</span>";
  temperatureMaxPrint.innerHTML = temperatureMax + "<span>°C</span>";
  return [season, session, weatherId, leaf];
}
function updateRealTimeActive(displayData, fileSelector) {
  function updateDisplay(displayDataUpdate) {
    cssDisplay.setAttribute(
      "href",
      "./css/season/" +
        displayDataUpdate[0] +
        "/session/" +
        displayDataUpdate[1] +
        "/" +
        displayDataUpdate[2] +
        "/style.css"
    );
  };
  function updateLeaf(leafDataUpdate){
    if (leafDataUpdate[3] == "default" || leafDataUpdate[1] == "night") {
      cssLeaf.setAttribute("href", "./css/season/spring/leaf/leafDefault.css");
    } else {
      cssLeaf.setAttribute(
        "href",
        "./css/season/" +
          leafDataUpdate[0] +
          "/leaf" +
          "/" +
          leafDataUpdate[3] +
          "/" +
          leafDataUpdate[1] +
          "/" +
          leafDataUpdate[2] +
          "/style.css"
      );
    }
  }
  if(fileSelector=='displayAndLeaf'){
    updateDisplay(displayData);
    updateLeaf(displayData);
  }else if(fileSelector=='display') {
    updateDisplay(displayData);
  }else{
    updateLeaf(displayData);
  };
}
oldValue = [0, 0, 0, 0];
function updateRealTime() {
  main();
  if (
    main()[0] != oldValue[0] ||
    main()[1] != oldValue[1] ||
    main()[2] != oldValue[2] ||
    main()[3] != oldValue[3]
  ) {
    if (
      (main()[0] != oldValue[0] ||
        main()[1] != oldValue[1] ||
        main()[2] != oldValue[2]) &&
      main()[3] != oldValue[3]
    ) {
      updateRealTimeActive(main(), "displayAndLeaf");
      oldValue=main();
    } else if (
      (main()[0] != oldValue[0] ||
        main()[1] != oldValue[1] ||
        main()[2] != oldValue[2]) &&
      main()[3] == oldValue[3]
    ) {
      updateRealTimeActive(main(), "display");
      oldValue=main();
    } else if (
      main()[0] == oldValue[0] &&
      main()[1] == oldValue[1] &&
      main()[2] == oldValue[2] &&
      main()[3] != oldValue[3]
    ) {
      updateRealTimeActive(main(), "leaf");
      oldValue=main();
    }
  }
}
setInterval(updateRealTime, 1000);
