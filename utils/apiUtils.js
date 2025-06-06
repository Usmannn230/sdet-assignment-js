async function getWeatherData(request, city, apiKey) {
  return await request.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  );
}

module.exports = { getWeatherData };