// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const axios = require(`axios`);
const handler = async (event) => {
  const _0x4d35 = [
    "\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x31",
    "\x65\x6E\x76",
    "\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x32",
    "\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x33",
    "\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x34",
    "\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x35",
    "\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x36",
    "\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x37",
    "\x41\x50\x49\x5F\x53\x45\x43\x52\x45\x54\x38",
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
  ];
  try {
    let weather = { cod: 429 },
      weatherTomorrow = { cod: 429 },
      apiOrder = 0,
      apiOrderMax = 7,
      startForecast,
      listForecast = 0,
      api = [
        process[_0x4d35[1]][_0x4d35[0]],
        process[_0x4d35[1]][_0x4d35[2]],
        process[_0x4d35[1]][_0x4d35[3]],
        process[_0x4d35[1]][_0x4d35[4]],
        process[_0x4d35[1]][_0x4d35[5]],
        process[_0x4d35[1]][_0x4d35[6]],
        process[_0x4d35[1]][_0x4d35[7]],
        process[_0x4d35[1]][_0x4d35[8]],
      ];
    while (
      (weather[_0x4d35[17]] == 429 || weather[_0x4d35[17]] == 401) &&
      apiOrder <= apiOrderMax
    ) {
      weather = await axios[_0x4d35[16]](
        `${_0x4d35[27]}${_0x4d35[9]}${_0x4d35[25]}${atob(
          event[_0x4d35[11]][_0x4d35[10]]
        )}${_0x4d35[12]}${atob(event[_0x4d35[11]][_0x4d35[13]])}${_0x4d35[14]}${
          api[apiOrder]
        }${_0x4d35[15]}`
      );
      apiOrder += 1;
    }
    apiOrder = 0;
    while (
      (weatherTomorrow[_0x4d35[17]] == 429 || weather[_0x4d35[17]] == 401) &&
      apiOrder <= apiOrderMax
    ) {
      weatherTomorrow = await axios[_0x4d35[16]](
        `${_0x4d35[27]}${_0x4d35[26]}${_0x4d35[25]}${atob(
          event[_0x4d35[11]][_0x4d35[10]]
        )}${_0x4d35[12]}${atob(event[_0x4d35[11]][_0x4d35[13]])}${_0x4d35[14]}${
          api[apiOrder]
        }${_0x4d35[15]}`
      );
      apiOrder += 1;
    }
    startForecast = new Date(
      weatherTomorrow[_0x4d35[18]][_0x4d35[28]][0][_0x4d35[24]] * 1000
    ).getHours();
    while (startForecast != 0 && listForecast < 40) {
      listForecast = listForecast + 1;
      startForecast = new Date(
        weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast][_0x4d35[24]] *
          1000
      ).getHours();
    }
    return {
      statusCode: 200,
      body: JSON[_0x4d35[23]]({
        c3RhdHVzQ29kZQ: weather[_0x4d35[18]][_0x4d35[17]],
        dGVtcGVyYXR1cmU: weather[_0x4d35[18]][_0x4d35[20]][_0x4d35[19]],
        aWQ: weather[_0x4d35[18]][_0x4d35[22]][0][_0x4d35[21]],
        dGltZQ: weather[_0x4d35[18]][_0x4d35[24]],
        dG9tb3Jyb3c: {
          t7: {
            dGltZQ:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast][
                _0x4d35[24]
              ],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast][
                _0x4d35[20]
              ][_0x4d35[19]],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast][
              _0x4d35[22]
            ][0][_0x4d35[21]],
          },
          t10: {
            dGltZQ:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast + 1][
                _0x4d35[24]
              ],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast + 1][
                _0x4d35[20]
              ][_0x4d35[19]],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast + 1][
              _0x4d35[22]
            ][0][_0x4d35[21]],
          },
          t13: {
            dGltZQ:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast + 2][
                _0x4d35[24]
              ],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast + 2][
                _0x4d35[20]
              ][_0x4d35[19]],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast + 2][
              _0x4d35[22]
            ][0][_0x4d35[21]],
          },
          t16: {
            dGltZQ:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast + 3][
                _0x4d35[24]
              ],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast + 3][
                _0x4d35[20]
              ][_0x4d35[19]],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast + 3][
              _0x4d35[22]
            ][0][_0x4d35[21]],
          },
          t19: {
            dGltZQ:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast + 4][
                _0x4d35[24]
              ],
            dGVtcGVyYXR1cmU:
              weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast + 4][
                _0x4d35[20]
              ][_0x4d35[19]],
            aWQ: weatherTomorrow[_0x4d35[18]][_0x4d35[28]][listForecast + 4][
              _0x4d35[22]
            ][0][_0x4d35[21]],
          },
        },
      }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
