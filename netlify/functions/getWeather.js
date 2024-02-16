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
      btoa(
        Number(
          ((Math[_0x4eb3ab(0x134)](_0x368f0f) +
            Math[_0x4eb3ab(0x13a)](_0x368f0f) *
              Math[_0x4eb3ab(0x12f)](_0x368f0f)) /
            Math["tan"](_0x368f0f))[_0x4eb3ab(0x133)](0x0)
        ) + 0x14224c4
      ) == event.queryStringParameters.security
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
  if (
    a(new Date().getTime()) &&
    (event.headers.referer.startsWith("https://chuanghiten.github.io/", 0) ||
      event.headers.referer.startsWith("https://chuanghiten.netlify.app/", 0))
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
        weatherData = await axios
          .get(
            `https://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=${accuKey[numberOfKey]}&q=${ip}&language=vi&details=true`,
            {
              headers: {
                Accept: "application/json",
                "Accept-Encoding": "identity",
              },
              params: { trophies: true },
            }
          )
          .then((v) => {
            return v.data;
          })
          .catch((e) => {
            console.log(e);
            ac = `${ac.substring(0, numberOfKey)}0${ac.substring(
              numberOfKey + 1
            )}`;
            ++numberOfKey;
            return false;
          });
      } else ++numberOfKey;
    }
    if (weatherData) {
      locationKey = weatherData.Key;
      city = weatherData.LocalizedName;
      if (lat == "undefined") {
        lat = weatherData.GeoPosition.Latitude;
        lon = weatherData.GeoPosition.Longitude;
      }
    }
    weatherData = false;
    numberOfKey = 0;
    while (!weatherData && numberOfKey < accuLength && locationKey) {
      if (ac[numberOfKey] == "1") {
        weatherData = await axios
          .get(
            `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${accuKey[numberOfKey]}&language=vi&details=true`,
            {
              headers: {
                Accept: "application/json",
                "Accept-Encoding": "identity",
              },
              params: { trophies: true },
            }
          )
          .then((v) => {
            return v.data;
          })
          .catch((e) => {
            console.log(e);
            ac = `${ac.substring(0, numberOfKey)}0${ac.substring(
              numberOfKey + 1
            )}`;
            ++numberOfKey;
            return false;
          });
      } else ++numberOfKey;
    }
    if (weatherData)
      response = {
        temperature: weatherData[0].Temperature.Metric.Value,
        text: weatherData[0].WeatherText,
        icon: weatherData[0].WeatherIcon,
        accuUpdate: weatherData[0].EpochTime,
        windSpeed: (weatherData[0].Wind.Speed.Metric.Value * 1000) / 3600,
        temperaturePast24: {
          min: weatherData[0].TemperatureSummary.Past24HourRange.Minimum.Metric
            .Value,
          max: weatherData[0].TemperatureSummary.Past24HourRange.Maximum.Metric
            .Value,
        },
        city: city,
      };
    else {
      numberOfKey = 0;
      while (!weatherData && numberOfKey < openLength && lat) {
        if (op[numberOfKey] == "1") {
          weatherData = await axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openKey[numberOfKey]}&units=metric&lang=vi`,
              {
                headers: {
                  Accept: "application/json",
                  "Accept-Encoding": "identity",
                },
                params: { trophies: true },
              }
            )
            .then((v) => {
              return v.data;
            })
            .catch((e) => {
              console.log(e);
              op = `${op.substring(0, numberOfKey)}0${op.substring(
                numberOfKey + 1
              )}`;
              ++numberOfKey;
              return false;
            });
        } else ++numberOfKey;
      }
      if (weatherData)
        response = {
          temperature: weatherData.main.temp,
          text: weatherData.weather[0].description,
          icon: weatherData.weather[0].icon,
          openUpdate: weatherData.dt,
          windSpeed: weatherData.wind.speed,
          temperaturePast24: {
            min: weatherData.main.temp_min,
            max: weatherData.main.temp_max,
          },
          city: weatherData.name,
        };
      else
        return {
          statusCode: 500,
          body: JSON.stringify({
            code: 500,
            description: "Internal Server Error",
          }),
          HEADERS,
        };
    }
    weatherData = false;
    while (!weatherData && numberOfKey < openLength && lat) {
      if (op[numberOfKey] == "1") {
        weatherData = await axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openKey[numberOfKey]}&units=metric&lang=vi`,
            {
              headers: {
                Accept: "application/json",
                "Accept-Encoding": "identity",
              },
              params: { trophies: true },
            }
          )
          .then((v) => {
            return v.data;
          })
          .catch((e) => {
            console.log(e);
            op = `${op.substring(0, numberOfKey)}0${op.substring(
              numberOfKey + 1
            )}`;
            ++numberOfKey;
            return false;
          });
      } else ++numberOfKey;
    }
    if (weatherData) {
      response = {
        code: 200,
        description: "Ok",
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
      weatherData.list.forEach((v, i) => {
        response.forecast[i] = {
          time: v.dt,
          temperature: v.main.temp,
          icon: v.weather[0].icon,
        };
      });
    } else
      return {
        statusCode: 500,
        body: { code: 500, description: "Internal Server Error" },
        HEADERS,
      };
    return {
      statusCode: 200,
      body: JSON.stringify(response),
      HEADERS,
    };
  } else
    return {
      statusCode: 401,
      body: JSON.stringify({ code: 401, description: "Unauthorized" }),
      HEADERS,
    };
};
