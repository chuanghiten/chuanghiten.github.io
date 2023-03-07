// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    // const subject = event.queryStringParameters.name || 'World'
    let weather = { cod: 429 },
      apiOrder = 0,
      apiOrderMax = 7;
    api = [
      process.env.API_SECRET1,
      process.env.API_SECRET2,
      process.env.API_SECRET3,
      process.env.API_SECRET4,
      process.env.API_SECRET5,
      process.env.API_SECRET6,
      process.env.API_SECRET7,
      process.env.API_SECRET8,
    ];
    while (
      (weather.cod == 429 || weather.cod == 401) &&
      apiOrder <= apiOrderMax
    ) {
      weather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${atob(
          event.queryStringParameters.fontName
        )}&lon=${atob(event.queryStringParameters.fontData)}&appid=${
          api[apiOrder]
        }&lang=en`
      ).then((data) => {
        return data.json();
      });
      apiOrder += 1;
    }
    console.log(weather);
    return {
      statusCode: 200,
      body: JSON.stringify({
        statusCode: weather.cod,
        temperature: weather.main.temp,
        id: weather.weather[0].id,
      }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
