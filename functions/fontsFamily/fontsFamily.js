// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const axios = require(`axios`);
const handler = async (event) => {
  const _0x4d35 = [
    "API_SECRET1",
    "env",
    "API_SECRET2",
    "API_SECRET3",
    "API_SECRET4",
    "API_SECRET5",
    "API_SECRET6",
    "API_SECRET7",
    "API_SECRET8",
    "https://api.openweathermap.org/data/2.5/weather?lat=",
    "Zm9udE5hbWU",
    "queryStringParameters",
    "&lon=",
    "Zm9udERhdGE",
    "&appid=",
    "&lang=en",
    "get",
    "cod",
    "data",
    "temp",
    "main",
    "id",
    "weather",
    "stringify",
    "dt",
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
        `${_0x4d35[9]}${atob(event[_0x4d35[11]][_0x4d35[10]])}${
          _0x4d35[12]
        }${atob(event[_0x4d35[11]][_0x4d35[13]])}${_0x4d35[14]}${
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
        `https://api.openweathermap.org/data/2.5/forecast?lat=${atob(
          event[_0x4d35[11]][_0x4d35[10]]
        )}&lon=${atob(event[_0x4d35[11]][_0x4d35[13]])}${_0x4d35[14]}${
          api[apiOrder]
        }&lang=en`
      );
      apiOrder += 1;
    }
    startForecast = new Date(
      weatherTomorrow[_0x4d35[18]].list[0].dt * 1000
    ).getHours();
    while (startForecast != 7 && listForecast < 40) {
      listForecast = listForecast + 1;
      startForecast = new Date(
        weatherTomorrow[_0x4d35[18]].list[listForecast].dt * 1000
      ).getHours();
      console.log(startForecast);
    }
    return {
      statusCode: 200,
      body: JSON[_0x4d35[23]]({
        c3RhdHVzQ29kZQ: weather[_0x4d35[18]][_0x4d35[17]],
        dGVtcGVyYXR1cmU: weather[_0x4d35[18]][_0x4d35[20]][_0x4d35[19]],
        aWQ: weather[_0x4d35[18]][_0x4d35[22]][0][_0x4d35[21]],
        dGltZQ: weather[_0x4d35[18]][_0x4d35[24]],
        tomorrow: {
          t7: {
            time: weatherTomorrow[_0x4d35[18]].list[listForecast].dt,
            temperature:
              weatherTomorrow[_0x4d35[18]].list[listForecast].main.temp,
            id: weatherTomorrow[_0x4d35[18]].list[listForecast].weather[0].id,
          },
          t10: {
            time: weatherTomorrow[_0x4d35[18]].list[listForecast + 1].dt,
            temperature:
              weatherTomorrow[_0x4d35[18]].list[listForecast + 1].main.temp,
            id: weatherTomorrow[_0x4d35[18]].list[listForecast + 1].weather[0]
              .id,
          },
          t13: {
            time: weatherTomorrow[_0x4d35[18]].list[listForecast + 2].dt,
            temperature:
              weatherTomorrow[_0x4d35[18]].list[listForecast + 2].main.temp,
            id: weatherTomorrow[_0x4d35[18]].list[listForecast + 2].weather[0]
              .id,
          },
          t16: {
            time: weatherTomorrow[_0x4d35[18]].list[listForecast + 3].dt,
            temperature:
              weatherTomorrow[_0x4d35[18]].list[listForecast + 3].main.temp,
            id: weatherTomorrow[_0x4d35[18]].list[listForecast + 3].weather[0]
              .id,
          },
          t19: {
            time: weatherTomorrow[_0x4d35[18]].list[listForecast + 4].dt,
            temperature:
              weatherTomorrow[_0x4d35[18]].list[listForecast + 4].main.temp,
            id: weatherTomorrow[_0x4d35[18]].list[listForecast + 4].weather[0]
              .id,
          },
        },
      }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
