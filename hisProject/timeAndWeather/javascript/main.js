// https://ipinfo.io/json?
// https://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=&q=171.224.178.31&language=vi&details=true
// https://dataservice.accuweather.com/currentconditions/v1/425226?apikey=&language=vi&details=true
// https://api.openweathermap.org/data/2.5/forecast?lat=21.0245&lon=105.8412&appid=
let cfr = 1,
  lkAnim = window.document.querySelector(
    "html[autumn] body .main .background .bottom svg .lkAnim"
  ),
  mainDom = window.document.querySelector("html body .main"),
  mainDomWidth,
  htmlDom = window.document.querySelector("html"),
  secondProgressDom = window.document.querySelector(
    "html body .main .contents .time .clock .secondProgress"
  ),
  htmlFontsize,
  secondProgressDomRotate = window.document.querySelector(
    "html body .main .contents .time .clock .secondProgress .progress"
  ),
  minutesDom = window.document.querySelector(
    "html body .main .contents .time .clock .minutes"
  ),
  clockDom = window.document.querySelector(
    "html body .main .contents .time .clock"
  ),
  hourDom = window.document.querySelector(
    "html body .main .contents .time .clock .hour"
  ),
  minutesArrow = window.document.querySelector(
    "html body .main .contents .time .clock .minutesArrow"
  ),
  hoursArrow = window.document.querySelector(
    "html body .main .contents .time .clock .hoursArrow"
  ),
  ngayDuong = window.document.querySelector(
    "html body .main .contents .time .date .ngayThang .duong .ngay"
  ),
  thangDuong = window.document.querySelector(
    "html body .main .contents .time .date .ngayThang .duong .thang"
  ),
  thangAm = window.document.querySelector(
    "html body .main .contents .time .date .ngayThang .am .thang"
  ),
  ngayAm = window.document.querySelector(
    "html body .main .contents .time .date .ngayThang .am .ngay"
  ),
  thu = window.document.querySelector(
    "html body .main .contents .time .date .thu .text"
  ),
  namDuong = window.document.querySelector(
    "html body .main .contents .time .date .thu .nam .duong"
  ),
  namAm = window.document.querySelector(
    "html body .main .contents .time .date .thu .nam .am"
  ),
  progressDay = window.document.querySelector(
    "html body .main .contents .time .date .ngayThang .progressbar"
  ),
  backgroundDom = window.document.querySelector("html body .main .background"),
  weatherDom = window.document.querySelector(
    "html body .main .contents .weather"
  ),
  arrowThangDuong = window.document.querySelector(
    "html body .main .contents .time .date .ngayThang .progressbar .thangDuong"
  ),
  arrowThangAm = window.document.querySelector(
    "html body .main .contents .time .date .ngayThang .progressbar .thangAm"
  ),
  randomFlowerDom = window.document.querySelector(
    "html body .main .contents .weather .randomFlower"
  ),
  temperatureLineDom = window.document.querySelector(
    "html body .main .contents .weather .forecast .bieuDo .tren .temperatureLine"
  ),
  duoiDom = window.document.querySelector(
    "html body .main .contents .weather .forecast .bieuDo .duoi"
  ),
  dotBieuDo = window.document.querySelector(
    "html body .main .contents .weather .forecast .bieuDo .tren .doThi svg .point"
  ),
  textBieuDo = window.document.querySelector(
    "html body .main .contents .weather .forecast .bieuDo .tren .doThi svg .temperatureText"
  ),
  iconsBieuDo = window.document.querySelector(
    "html body .main .contents .weather .forecast .bieuDo .tren .doThi svg .icons"
  ),
  lineDoThi = window.document.querySelector(
    "html body .main .contents .weather .forecast .bieuDo .tren .doThi svg path"
  ),
  cityName = window.document.querySelector(
    "html body .main .contents .weather .now .texts .city"
  ),
  nowTemperature = window.document.querySelector(
    "html body .main .contents .weather .now .texts .temprature"
  ),
  minMaxTemperature = window.document.querySelector(
    "html body .main .contents .weather .now .texts .minMax"
  ),
  bigIcon = window.document.querySelector(
    "html body .main .contents .weather .now .icon svg"
  ),
  iconDoThi = window.document.querySelector(
    "html body .main .contents .weather .forecast .bieuDo .tren .doThi svg .icons"
  ),
  trangThai = window.document.querySelector(
    "html body .main .contents .weather .now .icon .trangThai"
  ),
  clouds = window.document.querySelector(
    "html body .main .background .top svg"
  ),
  updateBy = window.document.querySelector(
    "html body .main .contents .weather .updateBy"
  ),
  locationKey = false;

function add0(number) {
  if (number < 10) return `0${number}`;
  return number;
}

function updateCredit(name, value) {
  switch (name) {
    case "open":
      updateBy.innerHTML = `${new Date(value * 1000)} - Openweathermap`;
      break;
    case "accu":
      updateBy.innerHTML = `[${new Date(
        value * 1000
      )} - Accuweather] - [Openweathermap]`;
      break;
  }
}

async function getIp() {
  let ip;
  if (!window.location.href.includes("noNetlify")) {
    try {
      const response = await fetch(`https://api.ipify.org?format=json`, {
        method: "GET",
        headers: { accept: "application/json" },
      });
      ip = await response.json();
    } catch (error) {
      console.log(error);
    }
    return ip.ip;
  }
  return "8.8.4.4";
}

async function callNetlify(lat, lon, locationKey, ip) {
  let apiURL,
    data = false;
  if (!window.location.href.includes("demo")) {
    if (locationKey)
      apiURL = `https://chuanghiten.netlify.app/.netlify/functions/getWeather?lat=${lat}&lon=${lon}&ip=${ip}&locationKey=${locationKey}`;
    else
      apiURL = `https://chuanghiten.netlify.app/.netlify/functions/getWeather?lat=${lat}&lon=${lon}&ip=${ip}`;
  } else {
    if (!window.location.href.includes("noNetlify")) {
      if (locationKey)
        apiURL = `/.netlify/functions/getWeather?lat=${lat}&lon=${lon}&ip=${ip}&locationKey=${locationKey}`;
      else
        apiURL = `/.netlify/functions/getWeather?lat=${lat}&lon=${lon}&ip=${ip}`;
    } else
      return JSON.parse(
        '{"now":{"temperature":20.1,"text":"Có mây","icon":7,"accuUpdate":2707230220,"windSpeed":3.75,"temperaturePast24":{"min":19.9,"max":23},"city":"Hoàn Kiếm","locationKey":"425226"},"forecast":[{"time":2707231600,"temperature":19.01,"icon":"10n"},{"time":2707242400,"temperature":19.44,"icon":"10n"},{"time":2707253200,"temperature":19.74,"icon":"10n"},{"time":2707264000,"temperature":20.06,"icon":"04d"},{"time":2707274800,"temperature":20.55,"icon":"04d"},{"time":2707285600,"temperature":21.05,"icon":"04d"},{"time":2707296400,"temperature":21.16,"icon":"04d"},{"time":2707307200,"temperature":18.5,"icon":"10n"},{"time":2707318000,"temperature":17.61,"icon":"10n"},{"time":2707328800,"temperature":16.56,"icon":"10n"},{"time":2707339600,"temperature":15.11,"icon":"10n"},{"time":2707350400,"temperature":14.23,"icon":"10d"},{"time":2707361200,"temperature":14.62,"icon":"04d"},{"time":2707372000,"temperature":14.77,"icon":"04d"},{"time":2707382800,"temperature":14.69,"icon":"04d"},{"time":2707393600,"temperature":13.64,"icon":"04n"},{"time":2707404400,"temperature":13.07,"icon":"10n"},{"time":2707415200,"temperature":12.55,"icon":"10n"},{"time":2707426000,"temperature":12.25,"icon":"10n"},{"time":2707436800,"temperature":12.25,"icon":"04d"},{"time":2707447600,"temperature":13.34,"icon":"04d"},{"time":2707458400,"temperature":14.84,"icon":"04d"},{"time":2707469200,"temperature":15.78,"icon":"04d"},{"time":2707480000,"temperature":15.43,"icon":"04n"},{"time":2707490800,"temperature":14.65,"icon":"04n"},{"time":2707501600,"temperature":14.58,"icon":"04n"},{"time":2707512400,"temperature":14.5,"icon":"04n"},{"time":2707523200,"temperature":14.58,"icon":"04d"},{"time":2707534000,"temperature":16.59,"icon":"04d"},{"time":2707544800,"temperature":20.33,"icon":"04d"},{"time":2707555600,"temperature":21.21,"icon":"04d"},{"time":2707566400,"temperature":19.76,"icon":"04n"},{"time":2707577200,"temperature":19.39,"icon":"04n"},{"time":2707588000,"temperature":17.34,"icon":"04n"},{"time":2707598800,"temperature":15.99,"icon":"01n"},{"time":2707609600,"temperature":15.62,"icon":"01d"},{"time":2707620400,"temperature":20.41,"icon":"01d"},{"time":2707631200,"temperature":23.48,"icon":"01d"},{"time":2707642000,"temperature":24.28,"icon":"01d"},{"time":2707652800,"temperature":21.3,"icon":"01n"}]}'
      );
  }
  try {
    // let a = (new Date().getTime() / 10000).toFixed(0), b;
    // b = Number(((Math.sqrt(a) + Math.sin(a) * Math.cos(a)) / Math.tan(a)).toFixed(0)) + 21112004;
    (function (_0x1c18eb, _0x59d424) {
      const _0x5e71dc = _0x1e4f,
        _0x2a058c = _0x1c18eb();
      while (!![]) {
        try {
          const _0x4c9b0a =
            -parseInt(_0x5e71dc(0x121)) / 0x1 +
            -parseInt(_0x5e71dc(0x11f)) / 0x2 +
            (-parseInt(_0x5e71dc(0x122)) / 0x3) *
              (-parseInt(_0x5e71dc(0x120)) / 0x4) +
            (-parseInt(_0x5e71dc(0x12b)) / 0x5) *
              (-parseInt(_0x5e71dc(0x12c)) / 0x6) +
            (parseInt(_0x5e71dc(0x123)) / 0x7) *
              (parseInt(_0x5e71dc(0x12d)) / 0x8) +
            parseInt(_0x5e71dc(0x124)) / 0x9 +
            (parseInt(_0x5e71dc(0x129)) / 0xa) *
              (parseInt(_0x5e71dc(0x126)) / 0xb);
          if (_0x4c9b0a === _0x59d424) break;
          else _0x2a058c["push"](_0x2a058c["shift"]());
        } catch (_0x1799d9) {
          _0x2a058c["push"](_0x2a058c["shift"]());
        }
      }
    })(_0x927e, 0x50c29);
    let c;
    function _0x927e() {
      const _0x2dc596 = [
        "434610qRVvGS",
        "getTime",
        "11HTmige",
        "tan",
        "cos",
        "4032530ViRHYQ",
        "sqrt",
        "25Dvhbao",
        "265074MxbAdA",
        "8QrdaSo",
        "toFixed",
        "684990UenzEA",
        "8VQOCNk",
        "530477xyNAoc",
        "369021mDqauy",
        "1997191MkJrlb",
      ];
      _0x927e = function () {
        return _0x2dc596;
      };
      return _0x927e();
    }
    function _0x1e4f(_0x167e2f, _0x44a2a8) {
      const _0x927e7d = _0x927e();
      return (
        (_0x1e4f = function (_0x1e4f8b, _0x11f837) {
          _0x1e4f8b = _0x1e4f8b - 0x11f;
          let _0x47b9c0 = _0x927e7d[_0x1e4f8b];
          return _0x47b9c0;
        }),
        _0x1e4f(_0x167e2f, _0x44a2a8)
      );
    }
    function b(_0x4fc2eb) {
      const _0xb1f654 = _0x1e4f;
      if (!_0x4fc2eb) {
        let _0x1dd0b6 = (new Date()[_0xb1f654(0x125)]() / 0x2710)[
          _0xb1f654(0x12e)
        ](0x0);
        return (
          Number(
            ((Math[_0xb1f654(0x12a)](_0x1dd0b6) +
              Math["sin"](_0x1dd0b6) * Math[_0xb1f654(0x128)](_0x1dd0b6)) /
              Math[_0xb1f654(0x127)](_0x1dd0b6))["toFixed"](0x0)
          ) + 0x14224c4
        );
      }
      return (0x989680 + Math["random"]() * 0x14224c4)[_0xb1f654(0x12e)](0x0);
    }
    const response = await fetch(apiURL, {
      method: "GET",
      headers: { accept: "application/json", security: b(c) },
    });
    data = await response.json();
  } catch (error) {
    console.log(error);
  }
  return data;
}

function updateWeather(name, value) {
  switch (name) {
    case "wind":
      clouds.setAttribute("style", `--cloudsDuration: ${5 / (value / 114)}s`);
      break;
    case "trangThai":
      trangThai.innerHTML = `${value[0].toUpperCase()}${value.slice(1)}`;
      break;
    case "city":
      cityName.innerHTML = value;
      break;
    case "temperature":
      nowTemperature.innerHTML = `<span class="text">${
        value[1].toString().split(".")[0]
      }</span><span class="dot">.</span><span class="text">${
        value[1].toString().split(".")[1]
      }</span>°C`;
      minMaxTemperature.innerHTML = `<div class="minMax"><span class="dripicons">?</span>${value[0]}°C | <span class="dripicons">[</span>${value[2]}°C</div>`;
      break;
    case "icon":
      let pathIcon = bigIcon.childElementCount;
      while (pathIcon > 0) {
        bigIcon.children[pathIcon - 1].setAttribute("hide", "");
        --pathIcon;
      }
      if (value >= 1 && value <= 44) {
        if (value == 1) bigIcon.children[1].removeAttribute("hide");
        else if (value > 1 && value <= 4)
          bigIcon.children[2].removeAttribute("hide");
        else if (value == 5 || value == 6)
          bigIcon.children[3].removeAttribute("hide");
        else if (value == 7 || value == 8)
          bigIcon.children[4].removeAttribute("hide");
        else if (value == 11) bigIcon.children[5].removeAttribute("hide");
        else if (value == 12) bigIcon.children[6].removeAttribute("hide");
        else if (value == 13 || value == 14)
          bigIcon.children[7].removeAttribute("hide");
        else if (value == 15) bigIcon.children[8].removeAttribute("hide");
        else if (value == 16 || value == 17)
          bigIcon.children[9].removeAttribute("hide");
        else if (value == 18) bigIcon.children[10].removeAttribute("hide");
        else if (value == 19 || value == 22)
          bigIcon.children[11].removeAttribute("hide");
        else if (value == 20 || value == 21 || value == 23)
          bigIcon.children[12].removeAttribute("hide");
        else if (value == 32) bigIcon.children[13].removeAttribute("hide");
        else if (value == 33) bigIcon.children[14].removeAttribute("hide");
        else if (value > 33 && value <= 36)
          bigIcon.children[15].removeAttribute("hide");
        else if (value == 37 || value == 38)
          bigIcon.children[16].removeAttribute("hide");
        else if (value == 39 || value == 40)
          bigIcon.children[17].removeAttribute("hide");
        else if (value == 41 || value == 42)
          bigIcon.children[18].removeAttribute("hide");
        else if (value == 43 || value == 44)
          bigIcon.children[19].removeAttribute("hide");
      } else {
        switch (value) {
          case "01d":
            bigIcon.children[1].removeAttribute("hide");
            break;
          case "01n":
            bigIcon.children[14].removeAttribute("hide");
            break;
          case "02d":
            bigIcon.children[2].removeAttribute("hide");
            break;
          case "02n":
            bigIcon.children[15].removeAttribute("hide");
            break;
          case "03d":
          case "03n":
          case "04n":
          case "04d":
            bigIcon.children[4].removeAttribute("hide");
            break;
          case "09d":
          case "09n":
            bigIcon.children[6].removeAttribute("hide");
            break;
          case "10d":
            bigIcon.children[7].removeAttribute("hide");
            break;
          case "10n":
            bigIcon.children[17].removeAttribute("hide");
            break;
          case "11d":
          case "11n":
            bigIcon.children[8].removeAttribute("hide");
            break;
          case "13d":
          case "13n":
            bigIcon.children[11].removeAttribute("hide");
            break;
          case "50d":
          case "50n":
            bigIcon.children[5].removeAttribute("hide");
            break;
        }
      }
      break;
  }
}

function updateDoThi(value) {
  let temperatureMin = value.temperature[0],
    temperatureMax = value.temperature[0],
    point = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  value.temperature.forEach((v) => {
    if (temperatureMin > v) temperatureMin = v;
    if (temperatureMax < v) temperatureMax = v;
  });
  temperatureLineDom.children[2].innerHTML = `${temperatureMax.toFixed(1)} -`;
  temperatureLineDom.children[5].innerHTML = `${temperatureMin.toFixed(1)}   `;
  temperatureLineDom.children[3].innerHTML = `${(
    temperatureMin +
    (temperatureMax - temperatureMin) * (2 / 3)
  ).toFixed(1)} -`;
  temperatureLineDom.children[4].innerHTML = `${(
    temperatureMin +
    (temperatureMax - temperatureMin) * (1 / 3)
  ).toFixed(1)} -`;

  duoiDom.children[2].innerHTML = `${add0(
    new Date(value.times[0] * 1000).getHours()
  )}:${add0(new Date(value.times[0] * 1000).getMinutes())}`;
  duoiDom.children[3].innerHTML = `${add0(
    new Date(value.times[1] * 1000).getHours()
  )}:${add0(new Date(value.times[1] * 1000).getMinutes())}`;
  duoiDom.children[4].innerHTML = `${add0(
    new Date(value.times[2] * 1000).getHours()
  )}:${add0(new Date(value.times[2] * 1000).getMinutes())}`;
  duoiDom.children[5].innerHTML = `${add0(
    new Date(value.times[3] * 1000).getHours()
  )}:${add0(new Date(value.times[3] * 1000).getMinutes())}`;
  duoiDom.children[6].innerHTML = `${add0(
    new Date(value.times[4] * 1000).getHours()
  )}:${add0(new Date(value.times[4] * 1000).getMinutes())}`;
  duoiDom.children[7].innerHTML = `${add0(
    new Date(value.times[5] * 1000).getHours()
  )}:${add0(new Date(value.times[5] * 1000).getMinutes())}`;
  duoiDom.children[8].innerHTML = `${add0(
    new Date(value.times[6] * 1000).getHours()
  )}:${add0(new Date(value.times[6] * 1000).getMinutes())}`;
  duoiDom.children[9].innerHTML = `${add0(
    new Date(value.times[7] * 1000).getHours()
  )}:${add0(new Date(value.times[7] * 1000).getMinutes())}`;
  duoiDom.children[10].innerHTML = `${add0(
    new Date(value.times[8] * 1000).getHours()
  )}:${add0(new Date(value.times[8] * 1000).getMinutes())}`;
  textBieuDo.children[0].innerHTML = value.temperature[1].toFixed(1);
  textBieuDo.children[1].innerHTML = value.temperature[2].toFixed(1);
  textBieuDo.children[2].innerHTML = value.temperature[3].toFixed(1);
  textBieuDo.children[3].innerHTML = value.temperature[4].toFixed(1);
  textBieuDo.children[4].innerHTML = value.temperature[5].toFixed(1);
  textBieuDo.children[5].innerHTML = value.temperature[6].toFixed(1);
  textBieuDo.children[6].innerHTML = value.temperature[7].toFixed(1);
  textBieuDo.children[7].innerHTML = value.temperature[8].toFixed(1);
  textBieuDo.children[8].innerHTML = value.temperature[9].toFixed(1);
  // 93 - 300
  point[0] =
    300 -
    207 *
      (1 -
        (temperatureMax - value.temperature[0]) /
          (temperatureMax - temperatureMin));
  point[1] =
    300 -
    207 *
      (1 -
        (temperatureMax - value.temperature[1]) /
          (temperatureMax - temperatureMin));
  point[2] =
    300 -
    207 *
      (1 -
        (temperatureMax - value.temperature[2]) /
          (temperatureMax - temperatureMin));
  point[3] =
    300 -
    207 *
      (1 -
        (temperatureMax - value.temperature[3]) /
          (temperatureMax - temperatureMin));
  point[4] =
    300 -
    207 *
      (1 -
        (temperatureMax - value.temperature[4]) /
          (temperatureMax - temperatureMin));
  point[5] =
    300 -
    207 *
      (1 -
        (temperatureMax - value.temperature[5]) /
          (temperatureMax - temperatureMin));
  point[6] =
    300 -
    207 *
      (1 -
        (temperatureMax - value.temperature[6]) /
          (temperatureMax - temperatureMin));
  point[7] =
    300 -
    207 *
      (1 -
        (temperatureMax - value.temperature[7]) /
          (temperatureMax - temperatureMin));
  point[8] =
    300 -
    207 *
      (1 -
        (temperatureMax - value.temperature[8]) /
          (temperatureMax - temperatureMin));
  point[9] =
    300 -
    207 *
      (1 -
        (temperatureMax - value.temperature[9]) /
          (temperatureMax - temperatureMin));
  dotBieuDo.children[0].setAttribute("cy", point[0]);
  dotBieuDo.children[1].setAttribute("cy", point[1]);
  dotBieuDo.children[2].setAttribute("cy", point[2]);
  dotBieuDo.children[3].setAttribute("cy", point[3]);
  dotBieuDo.children[4].setAttribute("cy", point[4]);
  dotBieuDo.children[5].setAttribute("cy", point[5]);
  dotBieuDo.children[6].setAttribute("cy", point[6]);
  dotBieuDo.children[7].setAttribute("cy", point[7]);
  dotBieuDo.children[8].setAttribute("cy", point[8]);
  dotBieuDo.children[9].setAttribute("cy", point[9]);
  textBieuDo.children[0].setAttribute("y", point[1] - 50);
  textBieuDo.children[1].setAttribute("y", point[2] - 50);
  textBieuDo.children[2].setAttribute("y", point[3] - 50);
  textBieuDo.children[3].setAttribute("y", point[4] - 50);
  textBieuDo.children[4].setAttribute("y", point[5] - 50);
  textBieuDo.children[5].setAttribute("y", point[6] - 50);
  textBieuDo.children[6].setAttribute("y", point[7] - 50);
  textBieuDo.children[7].setAttribute("y", point[8] - 50);
  textBieuDo.children[8].setAttribute("y", point[9] - 50);
  iconsBieuDo.children[0].setAttribute("y", point[1] - 15);
  iconsBieuDo.children[1].setAttribute("y", point[2] - 15);
  iconsBieuDo.children[2].setAttribute("y", point[3] - 15);
  iconsBieuDo.children[3].setAttribute("y", point[4] - 15);
  iconsBieuDo.children[4].setAttribute("y", point[5] - 15);
  iconsBieuDo.children[5].setAttribute("y", point[6] - 15);
  iconsBieuDo.children[6].setAttribute("y", point[7] - 15);
  iconsBieuDo.children[7].setAttribute("y", point[8] - 15);
  iconsBieuDo.children[8].setAttribute("y", point[9] - 15);
  lineDoThi.setAttribute(
    "d",
    `M 0 ${point[0]} L 93 ${point[1]} L 187.5 ${point[2]} L 282 ${point[3]} L 376 ${point[4]} L 470 ${point[5]} L 563 ${point[6]} L 658 ${point[7]} L 749 ${point[8]} L 844 ${point[9]}`
  );
  temperatureMin = 0;
  value.icons.forEach((v) => {
    if (v >= 1 && v <= 44) {
      if (v == 1) temperatureMax = "/";
      else if (v > 1 && v <= 4) temperatureMax = "3";
      else if (v == 5 || v == 6) temperatureMax = "R";
      else if (v == 7 || v == 8) temperatureMax = "1";
      else if (v == 11) temperatureMax = "$";
      else if (v == 12) temperatureMax = "b";
      else if (v == 13 || v == 14) temperatureMax = "h";
      else if (v == 15) temperatureMax = "p";
      else if (v == 16 || v == 17) temperatureMax = "r";
      else if (v == 18) temperatureMax = "B";
      else if (v == 19 || v == 22) temperatureMax = "N";
      else if (v == 20 || v == 21 || v == 23) temperatureMax = "P";
      else if (v == 32) temperatureMax = "|";
      else if (v == 33) temperatureMax = "*";
      else if (v > 33 && v <= 36) temperatureMax = "2";
      else if (v == 37 || v == 38) temperatureMax = "A";
      else if (v == 40 || v == 39) temperatureMax = "g";
      else if (v == 41 || v == 42) temperatureMax = "s";
      else if (v == 43 || v == 44) temperatureMax = "O";
    } else {
      switch (v) {
        case "01d":
          temperatureMax = "/";
          break;
        case "01n":
          temperatureMax = "*";
          break;
        case "02d":
          temperatureMax = "3";
          break;
        case "02n":
          temperatureMax = "4";
          break;
        case "03d":
        case "03n":
        case "04n":
        case "04d":
          temperatureMax = "1";
          break;
        case "09d":
        case "09n":
          temperatureMax = "b";
          break;
        case "10d":
          temperatureMax = "h";
          break;
        case "10n":
          temperatureMax = "i";
          break;
        case "11d":
        case "11n":
          temperatureMax = "p";
          break;
        case "13d":
        case "13n":
          temperatureMax = "N";
          break;
        case "50d":
        case "50n":
          temperatureMax = "$";
          break;
      }
    }
    iconsBieuDo.children[temperatureMin].innerHTML = temperatureMax;
    ++temperatureMin;
  });
}

// updateDoThi({
//   temperature: [10.3, 9.8, 10, 9.4, 9.2, 9.2, 9.2, 10, 9, 10],
//   icons: ["04d", "04d", "04n", "04n", "04n", "04n", "04n", "04n", "04n"],
//   times: [
//     1705989600, 1706000400, 1706011200, 1706022000, 1706032800, 1706043600,
//     1706022000, 1706032800, 1706043600,
//   ],
// });

function updateTime(name, value) {
  switch (name) {
    case "progressThangAm":
      arrowThangAm.setAttribute("style", `--left: ${value * 100}%`);
      break;
    case "progressThangDuong":
      arrowThangDuong.setAttribute("style", `--left: ${value * 100}%`);
      break;
    case "progressDay":
      progressDay.setAttribute(
        "style",
        `--progress: ${(value / 86399) * 100}%`
      );
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
      clockDom.setAttribute("style", `--deg: ${354 * (value / 59999)}deg`);
      break;
    case "minutes":
      minutesDom.innerHTML = `${add0(value)}`;
      break;
    case "hour":
      hourDom.innerHTML = `${add0(value)}`;
      break;
    case "minutesArrow":
      minutesArrow.setAttribute("style", `--minutesDeg: ${value}deg`);
      break;
    case "hoursArrow":
      hoursArrow.setAttribute("style", `--hoursDeg: ${value}deg`);
      break;
    case "ngayDuong":
      ngayDuong.innerHTML = `${add0(value)}`;
      break;
    case "thangDuong":
      thangDuong.innerHTML = `${add0(value)}`;
      break;
    case "ngayAm":
      ngayAm.innerHTML = `${add0(value)}`;
      break;
    case "thangAm":
      thangAm.innerHTML = `${add0(value)}`;
      break;
  }
}

function resize(width, height) {
  if (width / height >= 0.480410447761194) {
    mainDomWidth = height * 0.480410447761194;
  } else {
    mainDomWidth = width;
  }
  mainDom.style.width = `${mainDomWidth}px`;
  mainDom.style.height = `${height}px`;
  // console.log(6.25 * mainDomWidth / 515);
  htmlFontsize = (6.25 * mainDomWidth) / 515;
  htmlDom.style.fontSize = `${htmlFontsize}%`;
  secondProgressDom.setAttribute(
    "style",
    `clip-path: path('M 0 0 H ${secondProgressDom.offsetWidth} V ${
      secondProgressDom.offsetWidth
    } H 0 V ${secondProgressDom.offsetWidth / 2} H ${
      0.16 * htmlFontsize * 5
    } C ${0.16 * htmlFontsize * 5}  ${
      secondProgressDom.offsetWidth - 0.16 * htmlFontsize * 41.9
    } ${0.16 * htmlFontsize * 41.9} ${
      secondProgressDom.offsetWidth - 0.16 * htmlFontsize * 5
    } ${secondProgressDom.offsetWidth / 2} ${
      secondProgressDom.offsetWidth - 0.16 * htmlFontsize * 5
    } C ${secondProgressDom.offsetWidth - 0.16 * htmlFontsize * 41.9} ${
      secondProgressDom.offsetWidth - 0.16 * htmlFontsize * 5
    } ${secondProgressDom.offsetWidth - 0.16 * htmlFontsize * 5} ${
      secondProgressDom.offsetWidth - 0.16 * htmlFontsize * 41.9
    } ${secondProgressDom.offsetWidth - 0.16 * htmlFontsize * 5} ${
      secondProgressDom.offsetWidth / 2
    } C ${secondProgressDom.offsetWidth - 0.16 * htmlFontsize * 5} ${
      0.16 * htmlFontsize * 41.9
    } ${secondProgressDom.offsetWidth - 0.16 * htmlFontsize * 41.9} ${
      0.16 * htmlFontsize * 5
    } ${secondProgressDom.offsetWidth / 2} ${0.16 * htmlFontsize * 5} C ${
      0.16 * htmlFontsize * 41.9
    } ${0.16 * htmlFontsize * 5} ${0.16 * htmlFontsize * 5} ${
      0.16 * htmlFontsize * 41.9
    } ${0.16 * htmlFontsize * 5} ${secondProgressDom.offsetWidth / 2} H 0 Z')`
  );
  backgroundDom.setAttribute("style", `--bottom: ${weatherDom.offsetHeight}px`);
}

function pushWeather(w) {
  if (!locationKey) locationKey = Number(w.now.locationKey);
  if (w.now.city) updateWeather("city", w.now.city);
  updateWeather("temperature", [
    w.now.temperaturePast24.min.toFixed(1),
    w.now.temperature.toFixed(1),
    w.now.temperaturePast24.max.toFixed(1),
  ]);
  updateWeather("icon", w.now.icon);
  updateWeather("trangThai", w.now.text);
  let forecast = [];
  for (let i = 0, q = 8; i < w.forecast.length && q >= 0; ++i, --q) {
    if (w.forecast[i].time * 1000 > Date.now()) {
      forecast[forecast.length] = {
        temperature: Number(w.forecast[i].temperature.toFixed(1)),
        icon: w.forecast[i].icon,
        time: w.forecast[i].time,
      };
    }
  }
  updateDoThi({
    temperature: [
      w.now.temperature,
      forecast[0].temperature,
      forecast[1].temperature,
      forecast[2].temperature,
      forecast[3].temperature,
      forecast[4].temperature,
      forecast[5].temperature,
      forecast[6].temperature,
      forecast[7].temperature,
      forecast[8].temperature,
    ],
    icons: [
      forecast[0].icon,
      forecast[1].icon,
      forecast[2].icon,
      forecast[3].icon,
      forecast[4].icon,
      forecast[5].icon,
      forecast[6].icon,
      forecast[7].icon,
      forecast[8].icon,
    ],
    times: [
      forecast[0].time,
      forecast[1].time,
      forecast[2].time,
      forecast[3].time,
      forecast[4].time,
      forecast[5].time,
      forecast[6].time,
      forecast[7].time,
      forecast[8].time,
    ],
  });
  updateWeather("wind", w.now.windSpeed);
  if (w.now.openUpdate) updateCredit("open", w.now.openUpdate);
  else if (w.now.accuUpdate) updateCredit("accu", w.now.accuUpdate);
  htmlDom.style.opacity = "1";
}

function main() {
  let fullscreen = 0,
    time,
    oldSeconds,
    oldMinutes,
    oldHours,
    oldDate,
    oldMonth,
    oldYear,
    newSeconds,
    newMinutes,
    newHours,
    newDate,
    newMonth,
    newYear,
    numberOfFlower = randomFlowerDom.childElementCount,
    ip = false,
    lat = false,
    lon = false,
    calling = true,
    fr = 0;
  if (lkAnim) lkAnim.setAttribute("animplay", "");
  resize(window.innerWidth, window.innerHeight);
  window.addEventListener("resize", () => {
    resize(window.innerWidth, window.innerHeight);
  });
  htmlDom.addEventListener("click", () => {
    if (fullscreen) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      fullscreen = 0;
    } else {
      if (htmlDom.requestFullscreen) htmlDom.requestFullscreen();
      else if (htmlDom.webkitRequestFullscreen)
        htmlDom.webkitRequestFullscreen();
      else if (htmlDom.msRequestFullscreen) htmlDom.msRequestFullscreen();
      fullscreen = 1;
    }
  });
  while (numberOfFlower > 0) {
    randomFlowerDom.children[numberOfFlower - 1].style.top = `${
      Math.random() * randomFlowerDom.offsetHeight
    }rem`;
    randomFlowerDom.children[numberOfFlower - 1].style.left = `${
      Math.random() * randomFlowerDom.offsetWidth
    }rem`;
    randomFlowerDom.children[numberOfFlower - 1].style.transform = `rotate(${
      Math.random() * 360
    }deg) scale(var(--scaleRandomSvg))`;
    --numberOfFlower;
  }
  time = new Date();
  newDate = time.getDate();
  newMonth = time.getMonth() + 1;
  newYear = time.getFullYear();
  newHours = time.getHours();
  newMinutes = time.getMinutes();
  soNgayAmTrongThang =
    getNewMoonDay(
      INT((jdFromDate(newDate, newMonth, newYear) - 2415021) / 29.530588853) +
        1,
      7
    ) -
    getNewMoonDay(
      INT((jdFromDate(newDate, newMonth, newYear) - 2415021) / 29.530588853),
      7
    );
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition((v) => {
      lat = v.coords.latitude;
      lon = v.coords.longitude;
      getIp().then((v) => {
        ip = v;
        callNetlify(lat, lon, locationKey, ip).then((w) => {
          pushWeather(w);
          calling = false;
        });
      });
    });
  else alert("Geolocation is not supported by this browser.");
  function raf() {
    if (fr > cfr) {
      fr = 0;
      time = new Date();
      newSeconds = time.getSeconds();
      updateTime("second", newSeconds * 1000 + time.getMilliseconds());
      if (oldSeconds != newSeconds) {
        oldSeconds = newSeconds;
        newMinutes = time.getMinutes();
        updateTime("minutesArrow", 6 * (newMinutes + newSeconds / 60));
        updateTime(
          "progressDay",
          newHours * 3600 + newMinutes * 60 + newSeconds
        );
        if (oldMinutes != newMinutes) {
          oldMinutes = newMinutes;
          newHours = time.getHours();
          updateTime("minutes", newMinutes);
          updateTime("hoursArrow", 30 * (newHours + newMinutes / 60));
          if (
            (newMonth <= 7 && newMonth % 2 != 0) ||
            (newMonth >= 8 && newMonth % 2 == 0)
          ) {
            thangDuong.style.textDecoration = "underline";
            updateTime(
              "progressThangDuong",
              (newDate * 86400 + newHours * 3600 + newMinutes * 60) / 2764740
            );
          } else {
            thangDuong.style.textDecoration = "none";
            if (newMonth != 2)
              updateTime(
                "progressThangDuong",
                (newDate * 86400 + newHours * 3600 + newMinutes * 60) / 2678340
              );
            else {
              if (
                (newYear.toString().slice(-2) == "00" && newYear % 400 == 0) ||
                (newYear.toString().slice(-2) != "00" && newYear % 4 == 0)
              ) {
                namDuong.style.textDecoration = "underline";
                updateTime(
                  "progressThangDuong",
                  (newDate * 86400 + newHours * 3600 + newMinutes * 60) /
                    2591940
                );
              } else {
                namDuong.style.textDecoration = "none";
                updateTime(
                  "progressThangDuong",
                  (newDate * 86400 + newHours * 3600 + newMinutes * 60) /
                    2505540
                );
              }
            }
          }
          if (soNgayAmTrongThang == 30) {
            thangAm.style.textDecoration = "underline";
            updateTime(
              "progressThangAm",
              (getLunar(newDate, newMonth, newYear, 7)[0] * 86400 +
                newHours * 3600 +
                newMinutes * 60) /
                2678340
            );
          } else {
            thangAm.style.textDecoration = "none";
            updateTime(
              "progressThangAm",
              (getLunar(newDate, newMonth, newYear, 7) * 86400 +
                newHours * 3600 +
                newMinutes * 60) /
                2591940
            );
          }
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
              soNgayAmTrongThang =
                getNewMoonDay(
                  INT(
                    (jdFromDate(newDate, newMonth, newYear) - 2415021) /
                      29.530588853
                  ) + 1,
                  7
                ) -
                getNewMoonDay(
                  INT(
                    (jdFromDate(newDate, newMonth, newYear) - 2415021) /
                      29.530588853
                  ),
                  7
                );
              if (oldMonth != newMonth) {
                oldMonth = newMonth;
                newYear = time.getFullYear();
                updateTime(
                  "thangAm",
                  getLunar(newDate, newMonth, newYear, 7)[1]
                );
                updateTime("thangDuong", newMonth);
                if (oldYear != newYear) {
                  if (
                    (newYear.toString().slice(-2) == "00" &&
                      newYear % 400 == 0) ||
                    (newYear.toString().slice(-2) != "00" && newYear % 4 == 0)
                  )
                    namDuong.style.textDecoration = "underline";
                  else namDuong.style.textDecoration = "none";
                  oldYear = newYear;
                  if (newYear == getLunar(newDate, newMonth, newYear, 7)[2]) {
                    namAm.style.display = "none";
                    updateTime("namDuong", newYear);
                  } else {
                    namAm.style.display = "inline";
                    updateTime("namDuong", newYear);
                    updateTime(
                      "namAm",
                      getLunar(newDate, newMonth, newYear, 7)[2]
                    );
                  }
                }
              }
            }
            if (newHours % 2 == 0 && !calling) {
              if (lat) {
                callNetlify(lat, lon, locationKey, ip).then((w) => {
                  pushWeather(w);
                });
              }
            }
          }
          if (
            newMinutes % 2 == 0 &&
            (Math.random() * 2).toFixed(0) % 2 == 0 &&
            lkAnim
          )
            lkAnim.setAttribute("animplay", "");
        }
      }
    } else ++fr;
    window.requestAnimationFrame(raf);
  }
  window.requestAnimationFrame(raf);
  if (lkAnim)
    lkAnim.children[0].addEventListener("animationend", () =>
      lkAnim.removeAttribute("animplay")
    );
}

window.addEventListener("load", () => {
  main();
});
