require("dotenv").config();

const axios = require("axios");

exports.handler = async (event) => {
  const ip = event.queryStringParameters.ip,
    lat = event.queryStringParameters.lat,
    lon = event.queryStringParameters.lon,
    accuKey = [process.env.ACCU1, process.env.ACCU2, process.env.ACCU3, process.env.ACCU4, process.env.ACCU5, process.env.ACCU6, process.env.ACCU7, process.env.ACCU8, process.env.ACCU9, process.env.ACCU10, process.env.ACCU11, process.env.ACCU12, process.env.ACCU13],
    openKey = [process.env.OPEN1, process.env.OPEN2, process.env.OPEN3, process.env.OPEN4, process.env.OPEN5, process.env.OPEN6, process.env.OPEN7, process.env.OPEN8, process.env.OPEN9, process.env.OPEN10, process.env.OPEN11, process.env.OPEN12];
  const accuLength = accuKey.length,
    openLength = openKey.length;
  let weatherData = false,
    locationKey = event.queryStringParameters.locationKey,
    numberOfKey = 0,
    response,
    city;
  while (!locationKey && !weatherData && numberOfKey < accuLength) {
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
      ++numberOfKey;
    }
  }
  if (weatherData) {
    locationKey = weatherData.data.Key;
    city = weatherData.data.LocalizedName;
  }
  weatherData = false;
  numberOfKey = 0;
  while (!weatherData && numberOfKey < accuLength && locationKey) {
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
      ++numberOfKey;
    }
  }
  if (weatherData)
    response = {
      temperature: weatherData.data[0].Temperature.Metric.Value,
      text: weatherData.data[0].WeatherText,
      icon: weatherData.data[0].WeatherIcon,
      time: weatherData.data[0].LocalObservationDateTime,
      windSpeed: weatherData.data[0].Wind.Speed.Metric.Value,
      temperaturePast24: {
        min: weatherData.data[0].TemperatureSummary.Past24HourRange.Minimum
          .Metric.Value,
        max: weatherData.data[0].TemperatureSummary.Past24HourRange.Maximum
          .Metric.Value,
      },
      city: city,
      locationKey: locationKey,
    };
  else {
    numberOfKey = 0;
    while (!weatherData && numberOfKey < openLength) {
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
        ++numberOfKey;
      }
    }
    if (weatherData)
      response = {
        temperature: weatherData.data.main.temp,
        text: weatherData.data.weather[0].description,
        icon: weatherData.data.weather[0].icon,
        time: weatherData.data.dt,
        windSpeed: weatherData.data.wind.speed,
        temperaturePast24: {
          min: weatherData.data.main.temp_min,
          max: weatherData.data.main.temp_max,
        },
        city: weatherData.data.name,
        locationKey: locationKey,
      };
    else return { statusCode: 500 };
  }
  weatherData = false;
  while (!weatherData && numberOfKey < openLength) {
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
      ++numberOfKey;
    }
  }
  if (weatherData) {
    response = { now: response, forecast: [] };
    weatherData.data.list.forEach((v, i) => {
      response.forecast[i] = {
        time: v.dt,
        temperature: v.main.temp,
        icon: v.weather[0].icon,
      };
    });
  } else return { statusCode: 500 };
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };

  // try {
  //   const { lat } = event.queryStringParameters,
  //     { lon } = event.queryStringParameters;
  //   let response;
  //   response = await axios.get(
  //     `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`,
  //     {
  //       headers: { Accept: "application/json", "Accept-Encoding": "identity" },
  //       params: { trophies: true },
  //     }
  //   );
  //   let data = response.data;

  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({ data }),
  //   };
  // } catch (error) {
  //   console.log(error);
  //   return {
  //     statusCode: 500,
  //     // body: JSON.stringify({ error }),
  //   };
  // }
};
