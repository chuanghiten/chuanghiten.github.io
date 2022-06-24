var body = window.document.querySelector("body"),second = window.document.querySelector("div.second"),minute = window.document.querySelector("div.minute"),hour = window.document.querySelector("div.hour"),days = window.document.querySelector("div.days"),cssDisplay = window.document.querySelector("link.display"),cssLeaf = window.document.querySelector("link.leaf"),date,
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
  deltaT,
  JdNew,
  nm,
  sunLong,
  k,
  last,
  arc,
  i,
  lunar,
  leapMonth,
  leaf,
  weatherId,cityNameDataUrl,cityNameData,cityName,countryCodeDataUrl,countryCodeData,countryCode;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(positionData);
} else {
  alert("Positioning is off");
};
async function positionData(position) {
  latitudeData = position.coords.latitude;
  longitudeData = position.coords.longitude;
  //latitudeData=15;longitudeData=108;
  sessionDataUrl =
    "https:/"+"/api.ipgeolocation.io/astronomy?apiKey=7e95d0e738164ff9a60bb77fbe2fdb0a&lat=" +
    latitudeData +
    "&long=" +
    longitudeData;
  weatherDataUrl =
    "https:/"+"/api.openweathermap.org/data/2.5/weather?lat=" +
    latitudeData +
    "&lon=" +
    longitudeData +
    "&appid=5298f9131293054b9041c1008d027218";
  cityNameDataUrl='https:/'+'/api.openweathermap.org/geo/1.0/reverse?lat='+latitudeData+'&lon='+longitudeData+'&appid=5298f9131293054b9041c1008d027218';
  countryCodeDataUrl="https:/"+"/api.opencagedata.com/geocode/v1/json?q="+latitudeData+"+"+longitudeData+"&key=2dc8792399604acb8a984d4d32ac03d1&pretty=0";
  sessionData = await fetch(sessionDataUrl).then((data) => data.json());
  weatherData = await fetch(weatherDataUrl).then((data) => data.json());
  cityNameData=await fetch(cityNameDataUrl).then((data)=>data.json());
  countryCodeData=await fetch(countryCodeDataUrl).then((data)=>data.json());
  sunrise= parseInt(sessionData.sunrise.slice(0, 2)) +
    parseInt(sessionData.sunrise.slice(-2.0)) / 60;
  sunset =
    parseInt(sessionData.sunset.slice(0, 2)) +
    parseInt(sessionData.sunset.slice(-2.0)) / 60;
 	//console.log(navigator.language);
  //console.log(cityNameData[0].local_names.vi);
  //console.log(typeof countryCodeData.countryCode);
  countryCode=countryCodeData.results[0].components.country_code;
  //console.log(countryCode);
};
setInterval(function () {
  time = new Date();
  secondTime = time.getSeconds();
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
  };
  if (time.getMonth() + 1 < 10) {
    month = "0" + (time.getMonth() + 1);
  } else {
    month = time.getMonth + 1;
  };
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
  };
  if (sunrise) {}else {
  	sunrise=5;    
  };
  if (sunset) {}else {
  	sunset=18;
  };
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
  };
  /*
   * Copyright (c) 2006 Ho Ngoc Duc. All Rights Reserved.
   * Astronomical algorithms from the book "Astronomical Algorithms" by Jean Meeus, 1998
   *
   * Permission to use, copy, modify, and redistribute this software and its
   * documentation for personal, non-commercial use is hereby granted provided that
   * this copyright notice and appropriate documentation appears in all copies.
   * The algorithm is explained by Ho Ngoc Duc at "https://www.informatik.uni-leipzig.de/~duc/amlich/calrules_v02.html"
   */
  function getNewMoonDay(k, timeZone) {
    if (k / 1236.85 < -11) {
      deltaT =
        0.001 +
        0.000839 * (k / 1236.85) +
        0.0002261 * ((k / 1236.85) * (k / 1236.85)) -
        0.00000845 * ((k / 1236.85) * (k / 1236.85) * (k / 1236.85)) -
        0.000000081 *
          (k / 1236.85) *
          ((k / 1236.85) * (k / 1236.85) * (k / 1236.85));
    } else {
      deltaT =
        -0.000278 +
        0.000265 * (k / 1236.85) +
        0.000262 * ((k / 1236.85) * (k / 1236.85));
    }
    return Math.floor(
      2415020.75933 +
        29.53058868 * k +
        0.0001178 * ((k / 1236.85) * (k / 1236.85)) -
        0.000000155 * ((k / 1236.85) * (k / 1236.85) * (k / 1236.85)) +
        0.00033 *
          Math.sin(
            (166.56 +
              132.87 * (k / 1236.85) -
              0.009173 * ((k / 1236.85) * (k / 1236.85))) *
              (Math.PI / 180)
          ) +
        ((0.1734 - 0.000393 * (k / 1236.85)) *
          Math.sin(
            (359.2242 +
              29.10535608 * k -
              0.0000333 * ((k / 1236.85) * (k / 1236.85)) -
              0.00000347 * ((k / 1236.85) * (k / 1236.85) * (k / 1236.85))) *
              (Math.PI / 180)
          ) +
          0.0021 *
            Math.sin(
              2 *
                (Math.PI / 180) *
                (359.2242 +
                  29.10535608 * k -
                  0.0000333 * ((k / 1236.85) * (k / 1236.85)) -
                  0.00000347 * ((k / 1236.85) * (k / 1236.85) * (k / 1236.85)))
            ) -
          0.4068 *
            Math.sin(
              (306.0253 +
                385.81691806 * k +
                0.0107306 * ((k / 1236.85) * (k / 1236.85)) +
                0.00001236 * ((k / 1236.85) * (k / 1236.85) * (k / 1236.85))) *
                (Math.PI / 180)
            ) +
          0.0161 *
            Math.sin(
              (Math.PI / 180) *
                2 *
                (306.0253 +
                  385.81691806 * k +
                  0.0107306 * ((k / 1236.85) * (k / 1236.85)) +
                  0.00001236 * ((k / 1236.85) * (k / 1236.85) * (k / 1236.85)))
            ) -
          0.0004 *
            Math.sin(
              (Math.PI / 180) *
                3 *
                (306.0253 +
                  385.81691806 * k +
                  0.0107306 * ((k / 1236.85) * (k / 1236.85)) +
                  0.00001236 * ((k / 1236.85) * (k / 1236.85) * (k / 1236.85)))
            ) +
          0.0104 *
            Math.sin(
              (Math.PI / 180) *
                2 *
                (21.2964 +
                  390.67050646 * k -
                  0.0016528 * ((k / 1236.85) * (k / 1236.85)) -
                  0.00000239 * ((k / 1236.85) * (k / 1236.85) * (k / 1236.85)))
            ) -
          0.0051 *
            Math.sin(
              (Math.PI / 180) *
                (359.2242 +
                  29.10535608 * k -
                  0.0000333 * ((k / 1236.85) * (k / 1236.85)) -
                  0.00000347 * ((k / 1236.85) * (k / 1236.85) * (k / 1236.85)) +
                  (306.0253 +
                    385.81691806 * k +
                    0.0107306 * ((k / 1236.85) * (k / 1236.85)) +
                    0.00001236 *
                      ((k / 1236.85) * (k / 1236.85) * (k / 1236.85))))
            ) -
          0.0074 *
            Math.sin(
              (Math.PI / 180) *
                (359.2242 +
                  29.10535608 * k -
                  0.0000333 * ((k / 1236.85) * (k / 1236.85)) -
                  0.00000347 * ((k / 1236.85) * (k / 1236.85) * (k / 1236.85)) -
                  (306.0253 +
                    385.81691806 * k +
                    0.0107306 * ((k / 1236.85) * (k / 1236.85)) +
                    0.00001236 *
                      ((k / 1236.85) * (k / 1236.85) * (k / 1236.85))))
            ) +
          0.0004 *
            Math.sin(
              (Math.PI / 180) *
                (2 *
                  (21.2964 +
                    390.67050646 * k -
                    0.0016528 * ((k / 1236.85) * (k / 1236.85)) -
                    0.00000239 *
                      ((k / 1236.85) * (k / 1236.85) * (k / 1236.85))) +
                  (359.2242 +
                    29.10535608 * k -
                    0.0000333 * ((k / 1236.85) * (k / 1236.85)) -
                    0.00000347 *
                      ((k / 1236.85) * (k / 1236.85) * (k / 1236.85))))
            ) -
          0.0004 *
            Math.sin(
              (Math.PI / 180) *
                (2 *
                  (21.2964 +
                    390.67050646 * k -
                    0.0016528 * ((k / 1236.85) * (k / 1236.85)) -
                    0.00000239 *
                      ((k / 1236.85) * (k / 1236.85) * (k / 1236.85))) -
                  (359.2242 +
                    29.10535608 * k -
                    0.0000333 * ((k / 1236.85) * (k / 1236.85)) -
                    0.00000347 *
                      ((k / 1236.85) * (k / 1236.85) * (k / 1236.85))))
            ) -
          0.0006 *
            Math.sin(
              (Math.PI / 180) *
                (2 *
                  (21.2964 +
                    390.67050646 * k -
                    0.0016528 * ((k / 1236.85) * (k / 1236.85)) -
                    0.00000239 *
                      ((k / 1236.85) * (k / 1236.85) * (k / 1236.85))) +
                  (306.0253 +
                    385.81691806 * k +
                    0.0107306 * ((k / 1236.85) * (k / 1236.85)) +
                    0.00001236 *
                      ((k / 1236.85) * (k / 1236.85) * (k / 1236.85))))
            ) +
          0.001 *
            Math.sin(
              (Math.PI / 180) *
                (2 *
                  (21.2964 +
                    390.67050646 * k -
                    0.0016528 * ((k / 1236.85) * (k / 1236.85)) -
                    0.00000239 *
                      ((k / 1236.85) * (k / 1236.85) * (k / 1236.85))) -
                  (306.0253 +
                    385.81691806 * k +
                    0.0107306 * ((k / 1236.85) * (k / 1236.85)) +
                    0.00001236 *
                      ((k / 1236.85) * (k / 1236.85) * (k / 1236.85))))
            ) +
          0.0005 *
            Math.sin(
              (Math.PI / 180) *
                (2 *
                  (306.0253 +
                    385.81691806 * k +
                    0.0107306 * ((k / 1236.85) * (k / 1236.85)) +
                    0.00001236 *
                      ((k / 1236.85) * (k / 1236.85) * (k / 1236.85))) +
                  (359.2242 +
                    29.10535608 * k -
                    0.0000333 * ((k / 1236.85) * (k / 1236.85)) -
                    0.00000347 *
                      ((k / 1236.85) * (k / 1236.85) * (k / 1236.85))))
            )) -
        deltaT +
        0.5 +
        timeZone / 24
    );
  }
  function getSunLongitude(dayNumber, timeZone) {
    return Math.floor(
      (((280.46645 +
        36000.76983 * ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) +
        0.0003032 *
          (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) *
            ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525)) +
        ((1.9146 -
          0.004817 * ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) -
          0.000014 *
            (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) *
              ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525))) *
          Math.sin(
            (Math.PI / 180) *
              (357.5291 +
                35999.0503 *
                  ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) -
                0.0001559 *
                  (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) *
                    ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525)) -
                0.00000048 *
                  ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) *
                  (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) *
                    ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525)))
          ) +
          (0.019993 -
            0.000101 *
              ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525)) *
            Math.sin(
              (Math.PI / 180) *
                2 *
                (357.5291 +
                  35999.0503 *
                    ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) -
                  0.0001559 *
                    (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) *
                      ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525)) -
                  0.00000048 *
                    ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) *
                    (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) *
                      ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525)))
            ) +
          0.00029 *
            Math.sin(
              (Math.PI / 180) *
                3 *
                (357.5291 +
                  35999.0503 *
                    ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) -
                  0.0001559 *
                    (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) *
                      ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525)) -
                  0.00000048 *
                    ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) *
                    (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) *
                      ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525)))
            ))) *
        (Math.PI / 180) -
        Math.PI *
          2 *
          Math.floor(
            ((280.46645 +
              36000.76983 *
                ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) +
              0.0003032 *
                (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) *
                  ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525)) +
              ((1.9146 -
                0.004817 *
                  ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) -
                0.000014 *
                  (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525) *
                    ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525))) *
                Math.sin(
                  (Math.PI / 180) *
                    (357.5291 +
                      35999.0503 *
                        ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                          36525) -
                      0.0001559 *
                        (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                          36525) *
                          ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                            36525)) -
                      0.00000048 *
                        ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                          36525) *
                        (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                          36525) *
                          ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                            36525)))
                ) +
                (0.019993 -
                  0.000101 *
                    ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) / 36525)) *
                  Math.sin(
                    (Math.PI / 180) *
                      2 *
                      (357.5291 +
                        35999.0503 *
                          ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                            36525) -
                        0.0001559 *
                          (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                            36525) *
                            ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                              36525)) -
                        0.00000048 *
                          ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                            36525) *
                          (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                            36525) *
                            ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                              36525)))
                  ) +
                0.00029 *
                  Math.sin(
                    (Math.PI / 180) *
                      3 *
                      (357.5291 +
                        35999.0503 *
                          ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                            36525) -
                        0.0001559 *
                          (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                            36525) *
                            ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                              36525)) -
                        0.00000048 *
                          ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                            36525) *
                          (((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                            36525) *
                            ((dayNumber - 0.5 - timeZone / 24 - 2451545.0) /
                              36525)))
                  ))) *
              (Math.PI / 180)) /
              (Math.PI * 2)
          )) /
        Math.PI) *
        6
    );
  }
  function getLunarMonth11(year, timeZone) {
    date3112ToJulius =
      365 * (year + 4800) +
      Math.floor((year + 4800) / 4) -
      Math.floor((year + 4800) / 100) +
      Math.floor((year + 4800) / 400) -
      31739;
    if (dateToJulius < 2299161) {
      date3112ToJulius =
        365 * (year + 4800) + Math.floor((year + 4800) / 4) - 31777;
    }
    nm = getNewMoonDay(
      Math.floor((date3112ToJulius - 2415021) / 29.530588853),
      timeZone
    );
    sunLong = getSunLongitude(nm, timeZone);
    if (sunLong >= 9) {
      nm = getNewMoonDay(
        Math.floor((date3112ToJulius - 2415021) / 29.530588853) - 1,
        timeZone
      );
    }
    return nm;
  }
  function getLeapMonthOffset(a11, timeZone) {
    k = Math.floor((a11 - 2415021.076998695) / 29.530588853 + 0.5);
    last = 0;
    i = 1;
    arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
    do {
      last = arc;
      i++;
      arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
    } while (arc != last && i < 14);
    return i - 1;
  }
  function getLunar(date, month, year, timeZone) {
    var k, monthStart, a11, b11, lunarDay, lunarMonth, lunarYear, lunarLeap;

    dateToJulius =
      date +
      Math.floor(
        (153 * (month + 12 * Math.floor((14 - month) / 12) - 3) + 2) / 5
      ) +
      365 * (year + 4800 - Math.floor((14 - month) / 12)) +
      Math.floor((year + 4800 - Math.floor((14 - month) / 12)) / 4) -
      Math.floor((year + 4800 - Math.floor((14 - month) / 12)) / 100) +
      Math.floor((year + 4800 - Math.floor((14 - month) / 12)) / 400) -
      32045;
    if (dateToJulius < 2299161) {
      dateToJulius =
        date +
        Math.floor(
          (153 * (month + 12 * Math.floor((14 - month) / 12) - 3) + 2) / 5
        ) +
        365 * (year + 4800 - Math.floor((14 - month) / 12)) +
        Math.floor((year + 4800 - Math.floor((14 - month) / 12)) / 4) -
        32083;
    }

    k = Math.floor((dateToJulius - 2415021.076998695) / 29.530588853);
    monthStart = getNewMoonDay(k + 1, timeZone);
    if (monthStart > dateToJulius) {
      monthStart = getNewMoonDay(k, timeZone);
    }
    lunarDay = dateToJulius - monthStart + 1;
    a11 = getLunarMonth11(year, timeZone);
    b11 = a11;
    if (a11 >= monthStart) {
      lunarYear = year;
      a11 = getLunarMonth11(year - 1, timeZone);
    } else {
      lunarYear = year + 1;
      b11 = getLunarMonth11(year + 1, timeZone);
    }
    diff = Math.floor((monthStart - a11) / 29);
    lunarLeap = 0;
    lunarMonth = diff + 11;
    if (b11 - a11 > 365) {
      leapMonthDiff = getLeapMonthOffset(a11, timeZone);
      if (diff >= leapMonthDiff) {
        lunarMonth = diff + 10;
        if (diff == leapMonthDiff) {
          lunarLeap = 1;
        }
      }
    }
    if (lunarMonth > 12) {
      lunarMonth = lunarMonth - 12;
    }
    if (lunarMonth >= 11 && diff < 4) {
      lunarYear -= 1;
    }
    return [lunarDay, lunarMonth, lunarYear, lunarLeap];
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
  	if (latitudeData<16&&countryCode=="vn") {
  		leaf="apricotBlossom";
  	}else{
  		leaf="peachBlossom";
  	};
  } else {
    leaf = "default";
  }
  session = "morning";
  weatherId = "801";
  leaf = "apricotBlossom";
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
  //console.log(navigator.language);
  console.log('lunar = '+lunar[0]+'/'+lunar[1]+'/'+lunar[2]+' - leapMonth = '+leapMonth);
  //console.log(session);
}, 1000);
