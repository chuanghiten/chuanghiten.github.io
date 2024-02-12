// https://ipinfo.io/json?
// https://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=&q=171.224.178.31&language=vi&details=true
// https://dataservice.accuweather.com/currentconditions/v1/425226?apikey=&language=vi&details=true
// https://api.openweathermap.org/data/2.5/forecast?lat=21.0245&lon=105.8412&appid=
var htmlFontsize,
  mainDomWidth,
  locationKey = (lat = lon = ip = undefined),
  op = (ac = "1111111");

const sunrise = window.document.querySelector(
    "html body .main .contents .time .clock .sunrise"
  ),
  sunset = window.document.querySelector(
    "html body .main .contents .time .clock .sunset"
  ),
  tuyetRoi = window.document.querySelectorAll(".tuyet"),
  cfr = 1,
  lkAnim = window.document.querySelector(
    "html[autumn] body .main .background .bottom svg .lkAnim"
  ),
  mainDom = window.document.querySelector("html body .main"),
  htmlDom = window.document.querySelector("html"),
  secondProgressDom = window.document.querySelector(
    "html body .main .contents .time .clock .secondProgress"
  ),
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
  randomFlowerDom = window.document.querySelectorAll(
    "html body .main .contents .weather .randomFlower svg"
  ),
  randomFlowerWidthHeight = window.document.querySelector(
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
  add0 = (number) => {
    if (number < 10) return `0${number}`;
    return number;
  },
  updateCredit = (name, value) => {
    let time = new Date(value * 1000);
    switch (name) {
      case "open":
        updateBy.innerHTML = `[${add0(time.getDate())} / ${add0(
          time.getMonth()
        )} / ${time.getFullYear()} - ${add0(time.getHours())}:${add0(
          time.getMinutes()
        )} - <a target="_blank" href="https://openweathermap.org/">Openweathermap</a> (${op})] - [<a target="_blank" href="https://sunrisesunset.io/">SunriseSunset.io</a>]`;
        break;
      case "accu":
        updateBy.innerHTML = `[${add0(time.getDate())} / ${add0(
          time.getMonth()
        )} / ${time.getFullYear()} - ${add0(time.getHours())}:${add0(
          time.getMinutes()
        )} - <a target="_blank" href="https://www.accuweather.com/">Accuweather</a> (${ac})] - [<a target="_blank" href="https://openweathermap.org/">Openweathermap</a> (${op})] - [<a target="_blank" href="https://sunrisesunset.io/">SunriseSunset.io</a>]`;
        break;
    }
  },
  getIp = async () => {
    if (!window.location.href.includes("noNetlify")) {
      try {
        const response = await fetch(`https://api.ipify.org?format=json`, {
          method: "GET",
          headers: { accept: "application/json" },
        });
        ip = await response.json();
      } catch (error) {
        alert("Lấy ip người dùng thất bại!");
        console.log(error);
      }
      return ip.ip;
    }
    return "8.8.4.4";
  },
  pushWeather = (w) => {
    ac = w.key.ac;
    op = w.key.op;
    if (!locationKey) locationKey = Number(w.location.locationKey);
    if (!lat) {
      lat = Number(w.location.latitude);
      lon = Number(w.location.longitude);
    }
    if (w.location.city) updateWeather("city", w.location.city);
    updateWeather("temperature", [
      w.now.temperaturePast24.min.toFixed(1),
      w.now.temperature.toFixed(1),
      w.now.temperaturePast24.max.toFixed(1),
    ]);
    updateWeather("icon", w.now.icon);
    updateWeather("trangThai", w.now.text);
    let forecast = [],
      q = 8;
    w.forecast.every((c) => {
      if (c.time * 1000 > Date.now()) {
        forecast[forecast.length] = {
          temperature: Number(c.temperature.toFixed(1)),
          icon: c.icon,
          time: c.time,
        };
        --q;
      }
      if (q >= 0) return true;
      else return false;
    });
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
  },
  callNetlify = async (lat, lon, locationKey, ip) => {
    let apiURL = "",
      data;
    if (!window.location.href.includes("demo")) {
      apiURL = `https://chuanghiten.netlify.app`;
    } else {
      if (window.location.href.includes("noNetlify")) {
        pushWeather({
          now: {
            temperature: 16.5,
            text: "Nhiều mây",
            icon: 38,
            accuUpdate: 1707585420,
            windSpeed: 2.611111111111111,
            temperaturePast24: {
              min: 14.6,
              max: 21.2,
            },
          },
          forecast: [
            {
              time: 2707588000,
              temperature: 17.98,
              icon: "03n",
            },
            {
              time: 2707598800,
              temperature: 16.94,
              icon: "03n",
            },
            {
              time: 2707609600,
              temperature: 15.75,
              icon: "02d",
            },
            {
              time: 2707620400,
              temperature: 19.89,
              icon: "02d",
            },
            {
              time: 2707631200,
              temperature: 23.19,
              icon: "03d",
            },
            {
              time: 2707642000,
              temperature: 23.89,
              icon: "04d",
            },
            {
              time: 2707652800,
              temperature: 20.45,
              icon: "03n",
            },
            {
              time: 2707663600,
              temperature: 17.89,
              icon: "01n",
            },
            {
              time: 2707674400,
              temperature: 16.61,
              icon: "02n",
            },
            {
              time: 2707685200,
              temperature: 15.65,
              icon: "01n",
            },
            {
              time: 2707696000,
              temperature: 15.57,
              icon: "01d",
            },
            {
              time: 2707706800,
              temperature: 20.43,
              icon: "03d",
            },
            {
              time: 2707717600,
              temperature: 22.26,
              icon: "04d",
            },
            {
              time: 2707728400,
              temperature: 21.56,
              icon: "04d",
            },
            {
              time: 2707739200,
              temperature: 19.89,
              icon: "04n",
            },
            {
              time: 2707750000,
              temperature: 18.13,
              icon: "04n",
            },
            {
              time: 2707760800,
              temperature: 17.26,
              icon: "03n",
            },
            {
              time: 2707771600,
              temperature: 16.87,
              icon: "04n",
            },
            {
              time: 2707782400,
              temperature: 17.17,
              icon: "04d",
            },
            {
              time: 2707793200,
              temperature: 19.35,
              icon: "04d",
            },
            {
              time: 2707804000,
              temperature: 21.39,
              icon: "04d",
            },
            {
              time: 2707814800,
              temperature: 21.64,
              icon: "04d",
            },
            {
              time: 2707825600,
              temperature: 20.65,
              icon: "04n",
            },
            {
              time: 2707836400,
              temperature: 19.24,
              icon: "03n",
            },
            {
              time: 2707847200,
              temperature: 19.4,
              icon: "04n",
            },
            {
              time: 2707858000,
              temperature: 19.13,
              icon: "10n",
            },
            {
              time: 2707868800,
              temperature: 19.13,
              icon: "10d",
            },
            {
              time: 2707879600,
              temperature: 20.99,
              icon: "04d",
            },
            {
              time: 2707890400,
              temperature: 23.99,
              icon: "04d",
            },
            {
              time: 2707901200,
              temperature: 25.21,
              icon: "04d",
            },
            {
              time: 2707912000,
              temperature: 22.18,
              icon: "04n",
            },
            {
              time: 2707922800,
              temperature: 20.31,
              icon: "01n",
            },
            {
              time: 2707933600,
              temperature: 19.56,
              icon: "02n",
            },
            {
              time: 2707944400,
              temperature: 19.82,
              icon: "10n",
            },
            {
              time: 2707955200,
              temperature: 19.81,
              icon: "10d",
            },
            {
              time: 2707966000,
              temperature: 20.85,
              icon: "10d",
            },
            {
              time: 2707976800,
              temperature: 21.1,
              icon: "10d",
            },
            {
              time: 2707987600,
              temperature: 21.01,
              icon: "10d",
            },
            {
              time: 2707998400,
              temperature: 20.72,
              icon: "04n",
            },
            {
              time: 2708009200,
              temperature: 20.65,
              icon: "04n",
            },
          ],
          location: {
            city: "Hoàn Kiếm",
            latitude: 21.029,
            longitude: 105.854,
            locationKey: "425226",
          },
          key: {
            ac: "1111111",
            op: "1111111",
          },
        });
        return Promise.resolve();
      }
    }
    try {
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
      const response = await fetch(
        `${apiURL}/.netlify/functions/getWeather?lat=${lat}&lon=${lon}&ip=${ip}&locationKey=${locationKey}&security=${b(
          c
        )}&op=${op}&ac=${ac}`,
        {
          method: "GET",
          headers: { accept: "application/json" },
        }
      );
      data = await response.json();
    } catch (error) {
      updateBy.innerHTML = `${updateBy.textContent.replace(
        " - [SunriseSunset.io]",
        ""
      )} / Failed - [<a target="_blank" href="https://sunrisesunset.io/">SunriseSunset.io</a>]`;
      console.log(error);
    }
    if (data) pushWeather(data);
    return Promise.resolve();
  },
  updateSeason = (season) => {
    htmlDom.removeAttribute("spring");
    htmlDom.removeAttribute("summer");
    htmlDom.removeAttribute("autumn");
    htmlDom.removeAttribute("winter");
    switch (season) {
      case "winter":
        htmlDom.setAttribute("winter", "");
        let tuyetSize;
        tuyetRoi.forEach((el) => {
          el.style.display = "block";
          tuyetSize = 3 + Math.random() * 3;
          el.style.borderWidth = `${tuyetSize}rem`;
          el.style.animationDuration = `${30 / (tuyetSize / 3)}s`;
          el.style.animationDelay = `${Math.random() * 30}s`;
        });
        break;
      case "spring":
        htmlDom.setAttribute("spring", "");
        tuyetRoi.forEach((el) => {
          el.style.display = "none";
        });
        break;
      case "summer":
        htmlDom.setAttribute("summer", "");
        tuyetRoi.forEach((el) => {
          el.style.display = "none";
        });
        break;
      case "autumn":
        htmlDom.setAttribute("autumn", "");
        tuyetRoi.forEach((el) => {
          el.style.display = "none";
        });
        break;
    }
  },
  updateWeather = (name, value) => {
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
  },
  updateDoThi = (value) => {
    let temperatureMin = value.temperature[0],
      temperatureMax = value.temperature[0],
      point = [
        [0],
        [93],
        [187.5],
        [282],
        [376],
        [470],
        [563],
        [658],
        [749],
        [844],
      ];
    value.temperature.forEach((v) => {
      if (temperatureMin > v) temperatureMin = v;
      if (temperatureMax < v) temperatureMax = v;
    });
    temperatureLineDom.children[2].innerHTML = `${temperatureMax.toFixed(1)} -`;
    temperatureLineDom.children[5].innerHTML = `${temperatureMin.toFixed(
      1
    )}&nbsp;&nbsp;&nbsp;`;
    temperatureLineDom.children[3].innerHTML = `${(
      temperatureMin +
      (temperatureMax - temperatureMin) * (2 / 3)
    ).toFixed(1)} -`;
    temperatureLineDom.children[4].innerHTML = `${(
      temperatureMin +
      (temperatureMax - temperatureMin) * (1 / 3)
    ).toFixed(1)} -`;
    value.times.forEach((c, i) => {
      duoiDom.children[i + 2].innerHTML = `${add0(
        new Date(c * 1000).getHours()
      )}:${add0(new Date(c * 1000).getMinutes())}`;
    });
    value.temperature.forEach((c, i) => {
      if (i > 0) {
        textBieuDo.children[i - 1].innerHTML = c.toFixed(1);
      }
    });
    value.temperature.forEach((c, i) => {
      point[i][1] =
        300 -
        207 * (1 - (temperatureMax - c) / (temperatureMax - temperatureMin));
    });

    // \/ \/ \/ Source code: https://observablehq.com/@ndry/smooth-a-svg-path-with-cubic-bezier-curves?fbclid=IwAR2gTBlj3DxcpIWhIonDRAn2ZTJJUEejW6di55OXQVzPpnYZ0ZglkhcrIC0

    // Create the bezier curve command
    // I:  - point (array) [x,y]: current point coordinates
    //     - i (integer): index of 'point' in the array 'a'
    //     - a (array): complete array of points coordinates
    // O:  - (string) 'C x2,y2 x1,y1 x,y': SVG cubic bezier C command
    let smoothCommand = (smoothing) => (_, i, a) => {
        const pStart = a[i - 1];
        const pEnd = a[i];

        const pPrev = a[i - 2] || pStart;
        const pNext = a[i + 1] || pEnd;

        const Vec2 = {
          add([ax, ay], [bx, by]) {
            return [ax + bx, ay + by];
          },
          sub([ax, ay], [bx, by]) {
            return [ax - bx, ay - by];
          },
          scale(s, [x, y]) {
            return [s * x, s * y];
          },
        };
        // start control point
        const [cpsX, cpsY] = Vec2.add(
          pStart,
          Vec2.scale(smoothing, Vec2.sub(pEnd, pPrev))
        );
        // end control point
        const [cpeX, cpeY] = Vec2.add(
          pEnd,
          Vec2.scale(smoothing, Vec2.sub(pStart, pNext))
        );
        return `C ${cpsX} ${cpsY} ${cpeX} ${cpeY} ${pEnd[0]} ${pEnd[1]}`;
      },
      // Render the svg <path> element
      // I:  - points (array): points coordinates
      //     - command (function)
      //       I:  - point (array) [x,y]: current point coordinates
      //           - i (integer): index of 'point' in the array 'a'
      //           - a (array): complete array of points coordinates
      //       O:  - (string) a svg path command
      // O:  - (string): a Svg <path> element's 'd' attribute
      svgPathD = (points, command) =>
        points.reduce(
          (acc, point, i, a) =>
            i === 0
              ? // if first point
                `M ${point[0]} ${point[1]}`
              : // else
                `${acc} ${command(point, i, a)}`,
          ""
        );

    // /\ /\ /\ Source code: https://observablehq.com/@ndry/smooth-a-svg-path-with-cubic-bezier-curves?fbclid=IwAR2gTBlj3DxcpIWhIonDRAn2ZTJJUEejW6di55OXQVzPpnYZ0ZglkhcrIC0

    lineDoThi.setAttribute("d", `${svgPathD(point, smoothCommand(0.15))}`);
    point.forEach((c, i) => {
      dotBieuDo.children[i].setAttribute("cy", c[1]);
      if (i < 9) {
        textBieuDo.children[i].setAttribute("y", point[i + 1][1] - 50);
        iconsBieuDo.children[i].setAttribute("y", point[i + 1][1] - 15);
      }
    });

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
  },
  updateTime = (name, value) => {
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
          `--progress: ${((value / 86399) * 100).toFixed(2)}%`
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
      case "sunriset":
        sunrise.innerHTML = `<span class="icon">=</span> ${value[0]}`;
        sunset.innerHTML = `<span class="icon">=</span> ${value[1]}`;
        break;
    }
  },
  getSunriset = async (lat, lon) => {
    let data;
    try {
      const response = await fetch(
        `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lon}`,
        {
          method: "GET",
          headers: { accept: "application/json" },
        }
      );
      data = await response.json();
    } catch (error) {
      alert("Lấy thông tin mặt trời thất bại!");
      console.log(error);
    }
    updateTime("sunriset", [
      data.results.sunrise.replace(/:\d\d \w\w/, ""),
      data.results.sunset.replace(/:\d\d \w\w/, ""),
    ]);
  },
  resize = (width, height) => {
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
    backgroundDom.setAttribute(
      "style",
      `--bottom: ${weatherDom.offsetHeight}px`
    );
  },
  main = () => {
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
      calling = true,
      fr = 0,
      oldLunarMonth,
      newLunarMonth,
      oldLunarYear,
      newLunarYear;
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
    if (lkAnim) lkAnim.setAttribute("animplay", "");
    randomFlowerDom.forEach((c) => {
      c.style.top = `${
        Math.random() * randomFlowerWidthHeight.offsetHeight
      }rem`;
      c.style.left = `${
        Math.random() * randomFlowerWidthHeight.offsetWidth
      }rem`;
      c.style.transform = `rotate(${
        Math.random() * 360
      }deg) scale(var(--scaleRandomSvg))`;
    });
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
      navigator.geolocation.getCurrentPosition(
        (v) => {
          lat = v.coords.latitude;
          lon = v.coords.longitude;
          getIp()
            .then((v) => {
              ip = v;
              callNetlify(lat, lon, locationKey, ip).then(() => {
                getSunriset(lat, lon);
                calling = false;
              });
            })
            .catch((e) => {
              alert("Lấy ip người dùng thất bại!");
              console.log(e);
            });
        },
        (e) => {
          if (e.code == 1)
            alert(
              "Bạn đã từ chối chia sẻ vị trí của mình. Nếu bạn thay đổi ý định, hãy vào cài đặt trang web và chọn cho phép sử dụng định vị."
            );
          else if (e.code == 3)
            alert("Không thể lấy vị trí của bạn: Hết thời gian chờ");
          console.log(e);
          getIp()
            .then((v) => {
              ip = v;
              callNetlify(lat, lon, locationKey, ip).then(() => {
                getSunriset(lat, lon);
                calling = false;
              });
            })
            .catch((e) => {
              alert("Lấy ip người dùng thất bại!");
              console.log(e);
            });
        },
        { maximumAge: 60000, timeout: 10000, enableHighAccuracy: true }
      );
    else {
      alert("Trình duyệt của bạn không hỗ trợ định vị.");
      getIp()
        .then((v) => {
          ip = v;
          callNetlify(lat, lon, locationKey, ip).then((w) => {
            getSunriset(lat, lon);
            calling = false;
          });
        })
        .catch((e) => {
          alert("Lấy ip người dùng thất bại!");
          console.log(e);
        });
    }

    function raf() {
      if (fr > cfr) {
        fr = 0;
        time = new Date();
        newSeconds = time.getSeconds();
        clockDom.setAttribute(
          "style",
          `--deg: ${(
            (354 * (newSeconds * 1000 + time.getMilliseconds())) /
            59999
          ).toFixed(2)}deg`
        );
        // updateTime("second", newSeconds * 1000 + time.getMilliseconds());
        if (oldSeconds != newSeconds) {
          oldSeconds = newSeconds;
          newMinutes = time.getMinutes();
          updateTime(
            "minutesArrow",
            (6 * (newMinutes + newSeconds / 60)).toFixed(2)
          );
          updateTime(
            "progressDay",
            (newHours * 3600 + newMinutes * 60 + newSeconds).toFixed(2)
          );
          if (oldMinutes != newMinutes) {
            oldMinutes = newMinutes;
            newHours = time.getHours();
            updateTime("minutes", newMinutes);
            updateTime(
              "hoursArrow",
              (30 * (newHours + newMinutes / 60)).toFixed(2)
            );
            if (
              (newMonth <= 7 && newMonth % 2 != 0) ||
              (newMonth >= 8 && newMonth % 2 == 0)
            ) {
              thangDuong.style.textDecoration = "underline";
              updateTime(
                "progressThangDuong",
                (
                  (newDate * 86400 + newHours * 3600 + newMinutes * 60) /
                  2764740
                ).toFixed(2)
              );
            } else {
              thangDuong.style.textDecoration = "none";
              if (newMonth != 2)
                updateTime(
                  "progressThangDuong",
                  (
                    (newDate * 86400 + newHours * 3600 + newMinutes * 60) /
                    2678340
                  ).toFixed(2)
                );
              else {
                if (
                  (newYear.toString().slice(-2) == "00" &&
                    newYear % 400 == 0) ||
                  (newYear.toString().slice(-2) != "00" && newYear % 4 == 0)
                ) {
                  namDuong.style.textDecoration = "underline";
                  updateTime(
                    "progressThangDuong",
                    (
                      (newDate * 86400 + newHours * 3600 + newMinutes * 60) /
                      2591940
                    ).toFixed(2)
                  );
                } else {
                  namDuong.style.textDecoration = "none";
                  updateTime(
                    "progressThangDuong",
                    (
                      (newDate * 86400 + newHours * 3600 + newMinutes * 60) /
                      2505540
                    ).toFixed(2)
                  );
                }
              }
            }
            if (soNgayAmTrongThang == 30) {
              thangAm.style.textDecoration = "underline";
              updateTime(
                "progressThangAm",
                (
                  (getLunar(newDate, newMonth, newYear, 7)[0] * 86400 +
                    newHours * 3600 +
                    newMinutes * 60) /
                  2678340
                ).toFixed(2)
              );
            } else {
              thangAm.style.textDecoration = "none";
              updateTime(
                "progressThangAm",
                (
                  (getLunar(newDate, newMonth, newYear, 7)[0] * 86400 +
                    newHours * 3600 +
                    newMinutes * 60) /
                  2591940
                ).toFixed(2)
              );
            }
            if (oldHours != newHours) {
              oldHours = newHours;
              newDate = time.getDate();
              updateTime("hour", newHours);
              if (oldDate != newDate) {
                oldDate = newDate;
                newMonth = time.getMonth() + 1;
                let lunar = getLunar(newDate, newMonth, newYear, 7);
                newLunarMonth = lunar[1];
                updateTime("ngayAm", lunar[0]);
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
                if (oldLunarMonth != newLunarMonth) {
                  oldLunarMonth = newLunarMonth;
                  newLunarYear = lunar[2];
                  if (newLunarMonth < 4) updateSeason("spring");
                  else if (newLunarMonth >= 4 && newLunarMonth < 7)
                    updateSeason("summer");
                  else if (newLunarMonth >= 7 && newLunarMonth < 10)
                    updateSeason("autumn");
                  else updateSeason("winter");
                  updateTime("thangAm", newLunarMonth);
                  if (oldLunarYear != newLunarYear) {
                    oldLunarYear = newLunarYear;
                    if (newYear == newLunarYear) {
                      namAm.style.display = "none";
                    } else {
                      namAm.style.display = "inline";
                      updateTime("namAm", newLunarYear);
                      if (lunar[3]) namAm.style.textDecoration = "underline";
                    }
                  }
                }
                if (oldMonth != newMonth) {
                  oldMonth = newMonth;
                  newYear = time.getFullYear();
                  updateTime("thangDuong", newMonth);
                  if (oldYear != newYear) {
                    oldYear = newYear;
                    if (
                      (newYear.toString().slice(-2) == "00" &&
                        newYear % 400 == 0) ||
                      (newYear.toString().slice(-2) != "00" && newYear % 4 == 0)
                    )
                      namDuong.style.textDecoration = "underline";
                    else namDuong.style.textDecoration = "none";
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
                if (newDate % 2 == 0) ac = op = "1111111";
                if (lat) getSunriset(lat, lon);
              }
              if (newHours % 2 == 0 && !calling) {
                if (ip) {
                  callNetlify(lat, lon, locationKey, ip);
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
  };

window.addEventListener("load", () => {
  main();
});
