require("dotenv").config();

let HEADERS = {
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin",
  "Content-Type": "application/json", //optional
  "Access-Control-Allow-Methods":
    "GET, POST, PUT, PATCH, POST, DELETE, OPTIONS",
  "Access-Control-Max-Age": "86400",
};

//This solves the "No ‘Access-Control-Allow-Origin’ header is present on the requested resource."

HEADERS["Access-Control-Allow-Origin"] = "*";
HEADERS["Vary"] = "Origin";

const axios = require("axios");

exports.handler = async (event) => {
  (function (_0x342fcd, _0x500fbf) {
    const _0x49501e = _0x2f95,
      _0x477faa = _0x342fcd();
    while (!![]) {
      try {
        const _0x27edcb =
          (parseInt(_0x49501e(0x131)) / 0x1) *
            (-parseInt(_0x49501e(0x13b)) / 0x2) +
          parseInt(_0x49501e(0x12e)) / 0x3 +
          -parseInt(_0x49501e(0x13c)) / 0x4 +
          -parseInt(_0x49501e(0x132)) / 0x5 +
          (-parseInt(_0x49501e(0x137)) / 0x6) *
            (-parseInt(_0x49501e(0x135)) / 0x7) +
          (-parseInt(_0x49501e(0x139)) / 0x8) *
            (-parseInt(_0x49501e(0x138)) / 0x9) +
          parseInt(_0x49501e(0x130)) / 0xa;
        if (_0x27edcb === _0x500fbf) break;
        else _0x477faa["push"](_0x477faa["shift"]());
      } catch (_0x55d387) {
        _0x477faa["push"](_0x477faa["shift"]());
      }
    }
  })(_0x370e, 0x7b150);
  function _0x2f95(_0x222132, _0x32713a) {
    const _0x370eaf = _0x370e();
    return (
      (_0x2f95 = function (_0x2f9588, _0x24927d) {
        _0x2f9588 = _0x2f9588 - 0x12e;
        let _0x3492a6 = _0x370eaf[_0x2f9588];
        return _0x3492a6;
      }),
      _0x2f95(_0x222132, _0x32713a)
    );
  }
  function a(_0x25491e) {
    const _0x4eb3ab = _0x2f95;
    let _0x368f0f = (_0x25491e / 0x2710)["toFixed"](0x0);
    return (
      Number(
        ((Math[_0x4eb3ab(0x134)](_0x368f0f) +
          Math[_0x4eb3ab(0x13a)](_0x368f0f) *
            Math[_0x4eb3ab(0x12f)](_0x368f0f)) /
          Math["tan"](_0x368f0f))[_0x4eb3ab(0x133)](0x0)
      ) +
        0x14224c4 ==
      event.queryStringParameters.security
      // event[_0x4eb3ab(0x136)]?.["security"]
    );
  }
  function _0x370e() {
    const _0x27c824 = [
      "7duVQMM",
      "headers",
      "1088604RglEqm",
      "9jrbNCi",
      "7122736wJfOjn",
      "sin",
      "113180CwYACY",
      "2397672MLznKp",
      "2189163fBgtjt",
      "cos",
      "4259490yKAerk",
      "6eRGzhJ",
      "3921720KUPOiB",
      "toFixed",
      "sqrt",
    ];
    _0x370e = function () {
      return _0x27c824;
    };
    return _0x370e();
  }
  // console.log(`${a(new Date().getTime())} ${event.headers.referer}`);
  if (
    a(new Date().getTime()) &&
    (event.headers.referer.includes("chuanghiten.github.io") ||
      event.headers.referer.includes("chuanghiten.netlify.app"))
  ) {
    const ip = event.queryStringParameters.ip,
      accuKey = [
        process.env.ACCU1,
        process.env.ACCU2,
        process.env.ACCU3,
        process.env.ACCU4,
        process.env.ACCU5,
        process.env.ACCU6,
        process.env.ACCU7,
      ],
      openKey = [
        process.env.OPEN1,
        process.env.OPEN2,
        process.env.OPEN3,
        process.env.OPEN4,
        process.env.OPEN5,
        process.env.OPEN6,
        process.env.OPEN7,
      ];
    const accuLength = accuKey.length,
      openLength = openKey.length;
    let weatherData = false,
      locationKey = event.queryStringParameters.locationKey,
      lat = event.queryStringParameters.lat,
      lon = event.queryStringParameters.lon,
      ac = event.queryStringParameters.ac,
      op = event.queryStringParameters.op,
      numberOfKey = 0,
      response,
      city;
    while (
      (locationKey == "undefined" || lat == "undefined") &&
      !weatherData &&
      numberOfKey < accuLength
    ) {
      if (ac[numberOfKey] == "1") {
        try {
          weatherData = await axios.get(
            `https://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${accuKey[numberOfKey]}&q=${ip}&language=vi&details=true`,
            {
              headers: {
                Accept: "application/json",
                "Accept-Encoding": "identity",
              },
              params: { trophies: true },
            }
          );
        } catch {
          weatherData = false;
          ac = `${ac.substring(0, numberOfKey)}0${ac.substring(
            numberOfKey + 1
          )}`;
          ++numberOfKey;
        }
      } else ++numberOfKey;
    }
    if (weatherData) {
      locationKey = weatherData.data.Key;
      city = weatherData.data.LocalizedName;
      if (lat == "undefined") {
        lat = weatherData.data.GeoPosition.Latitude;
        lon = weatherData.data.GeoPosition.Longitude;
      }
    }
    weatherData = false;
    numberOfKey = 0;
    while (!weatherData && numberOfKey < accuLength && locationKey) {
      if (ac[numberOfKey] == "1") {
        try {
          weatherData = await axios.get(
            `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${accuKey[numberOfKey]}&language=vi&details=true`,
            {
              headers: {
                Accept: "application/json",
                "Accept-Encoding": "identity",
              },
              params: { trophies: true },
            }
          );
        } catch {
          weatherData = false;
          ac = `${ac.substring(0, numberOfKey)}0${ac.substring(
            numberOfKey + 1
          )}`;
          ++numberOfKey;
        }
      } else ++numberOfKey;
    }
    if (weatherData)
      response = {
        temperature: weatherData.data[0].Temperature.Metric.Value,
        text: weatherData.data[0].WeatherText,
        icon: weatherData.data[0].WeatherIcon,
        accuUpdate: weatherData.data[0].EpochTime,
        windSpeed: (weatherData.data[0].Wind.Speed.Metric.Value * 1000) / 3600,
        temperaturePast24: {
          min: weatherData.data[0].TemperatureSummary.Past24HourRange.Minimum
            .Metric.Value,
          max: weatherData.data[0].TemperatureSummary.Past24HourRange.Maximum
            .Metric.Value,
        },
        city: city,
      };
    else {
      numberOfKey = 0;
      while (!weatherData && numberOfKey < openLength && lat) {
        if (op[numberOfKey] == "1") {
          try {
            weatherData = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openKey[numberOfKey]}&units=metric&lang=vi`,
              {
                headers: {
                  Accept: "application/json",
                  "Accept-Encoding": "identity",
                },
                params: { trophies: true },
              }
            );
          } catch {
            weatherData = false;
            op = `${op.substring(0, numberOfKey)}0${op.substring(
              numberOfKey + 1
            )}`;
            ++numberOfKey;
          }
        } else ++numberOfKey;
      }
      if (weatherData)
        response = {
          temperature: weatherData.data.main.temp,
          text: weatherData.data.weather[0].description,
          icon: weatherData.data.weather[0].icon,
          openUpdate: weatherData.data.dt,
          windSpeed: weatherData.data.wind.speed,
          temperaturePast24: {
            min: weatherData.data.main.temp_min,
            max: weatherData.data.main.temp_max,
          },
          city: weatherData.data.name,
        };
      else return { statusCode: 500, HEADERS };
    }
    weatherData = false;
    while (!weatherData && numberOfKey < openLength && lat) {
      if (op[numberOfKey] == "1") {
        try {
          weatherData = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openKey[numberOfKey]}&units=metric&lang=vi`,
            {
              headers: {
                Accept: "application/json",
                "Accept-Encoding": "identity",
              },
              params: { trophies: true },
            }
          );
        } catch {
          weatherData = false;
          op = `${op.substring(0, numberOfKey)}0${op.substring(
            numberOfKey + 1
          )}`;
          ++numberOfKey;
        }
      } else ++numberOfKey;
    }
    if (weatherData) {
      response = {
        now: {
          temperature: response.temperature,
          text: response.text,
          icon: response.icon,
          accuUpdate: response.accuUpdate,
          openUpdate: response.openUpdate,
          windSpeed: response.windSpeed,
          temperaturePast24: {
            min: response.temperaturePast24.min,
            max: response.temperaturePast24.max,
          },
        },
        forecast: [],
        location: {
          city: response.city,
          latitude: lat,
          longitude: lon,
          locationKey: locationKey,
        },
        key: {
          op: op,
          ac: ac,
        },
      };
      weatherData.data.list.forEach((v, i) => {
        response.forecast[i] = {
          time: v.dt,
          temperature: v.main.temp,
          icon: v.weather[0].icon,
        };
      });
    } else return { statusCode: 500, HEADERS };
    return {
      statusCode: 200,
      body: JSON.stringify(response),
      HEADERS,
    };
  } else
    return {
      statusCode: 401,
      body: JSON.stringify("unauthorized"),
      HEADERS,
    };
};
