// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
let HEADERS = {
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Origin",
  "Content-Type": "application/json", //optional
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Max-Age": "8640",
};

//This solves the "No ‘Access-Control-Allow-Origin’ header is present on the requested resource."

HEADERS["Access-Control-Allow-Origin"] = "*";
HEADERS["Vary"] = "Origin";

const axios = require(`axios`);
const handler = async (event) => {
  const _0x4d35 = [
    "\x4F\x50\x45\x4E\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x31",
    "\x65\x6E\x76",
    "\x4F\x50\x45\x4E\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x32",
    "\x4F\x50\x45\x4E\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x33",
    "\x4F\x50\x45\x4E\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x34",
    "\x4F\x50\x45\x4E\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x35",
    "\x4F\x50\x45\x4E\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x36",
    "\x4F\x50\x45\x4E\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x37",
    "\x4F\x50\x45\x4E\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x38",
    "\x77\x65\x61\x74\x68\x65\x72",
    "\x5A\x6D\x39\x75\x64\x45\x35\x68\x62\x57\x55",
    "\x71\x75\x65\x72\x79\x53\x74\x72\x69\x6E\x67\x50\x61\x72\x61\x6D\x65\x74\x65\x72\x73",
    "\x26\x6C\x6F\x6E\x3D",
    "\x5A\x6D\x39\x75\x64\x45\x52\x68\x64\x47\x45",
    "\x26\x61\x70\x70\x69\x64\x3D",
    "\x26\x6C\x61\x6E\x67\x3D\x65\x6E",
    "\x67\x65\x74",
    "\x63\x6F\x64",
    "\x64\x61\x74\x61",
    "\x74\x65\x6D\x70",
    "\x6D\x61\x69\x6E",
    "\x69\x64",
    "\x77\x65\x61\x74\x68\x65\x72",
    "\x73\x74\x72\x69\x6E\x67\x69\x66\x79",
    "\x64\x74",
    "\x3F\x6C\x61\x74\x3D",
    "\x66\x6F\x72\x65\x63\x61\x73\x74",
    "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6F\x70\x65\x6E\x77\x65\x61\x74\x68\x65\x72\x6D\x61\x70\x2E\x6F\x72\x67\x2F\x64\x61\x74\x61\x2F\x32\x2E\x35\x2F",
    "\x6C\x69\x73\x74",
    "\x64\x47\x6C\x74\x5A\x51",
    "\x66\x65\x65\x6C\x73\x5F\x6C\x69\x6B\x65",
    "\x74\x69\x6D\x65\x7A\x6F\x6E\x65",
    "\x4F\x50\x45\x4E\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x39",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x31",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x32",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x33",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x34",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x35",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x36",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x37",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x38",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x39",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x31\x30",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x31\x31",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x31\x32",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x31\x33",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x31\x34",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x31\x35",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x31\x36",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x31\x37",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x31\x38",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x31\x39",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x32\x30",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x32\x31",
    "\x41\x43\x43\x55\x57\x45\x41\x54\x48\x45\x52\x5F\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x32\x32",
    "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x61\x74\x61\x73\x65\x72\x76\x69\x63\x65\x2E\x61\x63\x63\x75\x77\x65\x61\x74\x68\x65\x72\x2E\x63\x6F\x6D\x2F",
    "\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x73\x2F\x76\x31\x2F\x63\x69\x74\x69\x65\x73\x2F\x67\x65\x6F\x70\x6F\x73\x69\x74\x69\x6F\x6E\x2F\x73\x65\x61\x72\x63\x68\x3F\x61\x70\x69\x6B\x65\x79\x3D",
    "\x63\x75\x72\x72\x65\x6E\x74\x63\x6F\x6E\x64\x69\x74\x69\x6F\x6E\x73\x2F\x76\x31\x2F",
    "\x26\x64\x65\x74\x61\x69\x6C\x73\x3D\x74\x72\x75\x65",
    "\x61\x70\x69\x6B\x65\x79\x3D",
  ];
  try {
    let weather = false,
      weatherTomorrow = false,
      accuWeather = false,
      apiOrder = 0,
      apiOrderMax = 8,
      accuWeatherMaxApi = 21,
      accuWeatherLocation = false,
      api = [
        process[_0x4d35[1]][_0x4d35[3]],
        process[_0x4d35[1]][_0x4d35[4]],
        process[_0x4d35[1]][_0x4d35[5]],
        process[_0x4d35[1]][_0x4d35[6]],
        process[_0x4d35[1]][_0x4d35[7]],
        process[_0x4d35[1]][_0x4d35[8]],
        process[_0x4d35[1]][_0x4d35[32]],
        process[_0x4d35[1]][_0x4d35[0]],
        process[_0x4d35[1]][_0x4d35[2]],
      ],
      accuWeatherApi = [
        process[_0x4d35[1]][_0x4d35[33]],
        process[_0x4d35[1]][_0x4d35[34]],
        process[_0x4d35[1]][_0x4d35[35]],
        process[_0x4d35[1]][_0x4d35[36]],
        process[_0x4d35[1]][_0x4d35[37]],
        process[_0x4d35[1]][_0x4d35[38]],
        process[_0x4d35[1]][_0x4d35[39]],
        process[_0x4d35[1]][_0x4d35[40]],
        process[_0x4d35[1]][_0x4d35[41]],
        process[_0x4d35[1]][_0x4d35[42]],
        process[_0x4d35[1]][_0x4d35[43]],
        process[_0x4d35[1]][_0x4d35[44]],
        process[_0x4d35[1]][_0x4d35[45]],
        process[_0x4d35[1]][_0x4d35[46]],
        process[_0x4d35[1]][_0x4d35[47]],
        process[_0x4d35[1]][_0x4d35[48]],
        process[_0x4d35[1]][_0x4d35[49]],
        process[_0x4d35[1]][_0x4d35[50]],
        process[_0x4d35[1]][_0x4d35[51]],
        process[_0x4d35[1]][_0x4d35[52]],
        process[_0x4d35[1]][_0x4d35[53]],
        process[_0x4d35[1]][_0x4d35[54]],
      ];
    while (accuWeatherLocation == false && apiOrder <= accuWeatherMaxApi) {
      accuWeatherLocation = await axios[_0x4d35[16]](
        `${_0x4d35[55]}${_0x4d35[56]}${accuWeatherApi[apiOrder]}&q=${atob(
          event[_0x4d35[11]][_0x4d35[10]]
        )}%2C${atob(event[_0x4d35[11]][_0x4d35[13]])}${_0x4d35[58]}`
      )
        .then((data) => {
          return data;
        })
        .catch(() => {
          return false;
        });
      apiOrder += 1;
    }
    if (accuWeatherLocation) {
      apiOrder = 0;
      while (accuWeather == false && apiOrder <= accuWeatherMaxApi) {
        accuWeather = await axios[_0x4d35[16]](
          `${_0x4d35[55]}${_0x4d35[57]}${accuWeatherLocation.data.Key}?${_0x4d35[59]}${accuWeatherApi[apiOrder]}${_0x4d35[58]}`
        )
          .then((data) => {
            return data;
          })
          .catch(() => {
            return false;
          });
        apiOrder += 1;
      }
    } else {
      accuWeather = false;
    }
    if (accuWeather) {
      weather = {
        data: {
          temp: accuWeather[_0x4d35[18]][0].Temperature.Metric.Value + 273.15,
          dt: accuWeather[_0x4d35[18]][0].EpochTime,
          timezone: accuWeatherLocation[_0x4d35[18]].TimeZone.GmtOffset * 3600,
          weather: [
            {
              id: accuWeather[_0x4d35[18]][0].WeatherIcon,
            },
          ],
          main: {
            feels_like:
              accuWeather[_0x4d35[18]][0].RealFeelTemperature.Metric.Value +
              273.15,
          },
          wind: {
            speed: accuWeather[_0x4d35[18]][0].Wind.Speed.Metric.Value / 3.6,
          },
        },
      };
    } else {
      apiOrder = 0;
      while (weather == false && apiOrder <= apiOrderMax) {
        weather = await axios[_0x4d35[16]](
          `${_0x4d35[27]}${_0x4d35[9]}${_0x4d35[25]}${atob(
            event[_0x4d35[11]][_0x4d35[10]]
          )}${_0x4d35[12]}${atob(event[_0x4d35[11]][_0x4d35[13]])}${
            _0x4d35[14]
          }${api[apiOrder]}${_0x4d35[15]}`
        )
          .then((data) => {
            return data;
          })
          .catch(() => {
            return false;
          });
        apiOrder += 1;
      }
    }
    apiOrder = 0;
    while (weatherTomorrow == false && apiOrder <= apiOrderMax) {
      weatherTomorrow = await axios[_0x4d35[16]](
        `${_0x4d35[27]}${_0x4d35[26]}${_0x4d35[25]}${atob(
          event[_0x4d35[11]][_0x4d35[10]]
        )}${_0x4d35[12]}${atob(event[_0x4d35[11]][_0x4d35[13]])}${_0x4d35[14]}${
          api[apiOrder]
        }${_0x4d35[15]}`
      )
        .then((data) => {
          return data;
        })
        .catch(() => {
          return false;
        });
      apiOrder += 1;
    }
    return {
      statusCode: 200,
      body: JSON[_0x4d35[23]]({
        dGVtcGVyYXR1cmU: weather[_0x4d35[18]][_0x4d35[20]][_0x4d35[19]],
        aWQ: weather[_0x4d35[18]][_0x4d35[22]][0][_0x4d35[21]],
        dGltZQ: weather[_0x4d35[18]][_0x4d35[24]],
        zmVlbExpa2U: weather[_0x4d35[18]][_0x4d35[20]][_0x4d35[30]],
        dGltZVpvbmU: weather[_0x4d35[18]][_0x4d35[31]],
        d2luZFNwZWVk: weather[_0x4d35[18]].wind.speed,
        dG9tb3Jyb3c: [
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][0][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][0][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][0][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][1][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][1][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][1][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][2][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][2][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][2][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][3][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][3][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][3][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][4][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][4][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][4][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][5][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][5][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][5][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][6][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][6][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][6][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][7][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][7][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][7][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][8][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][8][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][8][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][9][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][9][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][9][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][10][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][10][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][10][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][11][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][11][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][11][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][12][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][12][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][12][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][13][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][13][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][13][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][14][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][14][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][14][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][15][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][15][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][15][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][16][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][16][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][16][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][17][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][17][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][17][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][18][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][18][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][18][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][19][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][19][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][19][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][20][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][20][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][20][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][21][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][21][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][21][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][22][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][22][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][22][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][23][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][23][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][23][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][24][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][24][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][24][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][25][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][25][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][25][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][26][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][26][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][26][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][27][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][27][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][27][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][28][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][28][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][28][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][29][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][29][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][29][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][30][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][30][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][30][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][31][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][31][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][31][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][32][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][32][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][32][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][33][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][33][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][33][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][34][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][34][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][34][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][35][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][35][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][35][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][36][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][36][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][36][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][37][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][37][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][37][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][38][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][38][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][38][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
          {
            dGltZQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][39][_0x4d35[24]],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][39][_0x4d35[20]][
                _0x4d35[19]
              ],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][39][_0x4d35[22]][0][
              _0x4d35[21]
            ],
          },
        ],
      }),
      headers: {
        "access-control-allow-origin": "*",
      },
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
