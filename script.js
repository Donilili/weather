const api_key = "5ca41d6336bb7c851caa3a5b1ad2067c";

function getWeatherForecast() {
  const location = document.getElementById("location").value;
  const complete_url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric&lang=ru`;
  fetch(complete_url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod != "404") {
        const forecast_div = document.getElementById("forecast");
        forecast_div.innerHTML = "";
        const weather = data.weather[0].description;
        const temp = Math.round(data.main.temp, 1);
        const forecast_item = document.createElement("div");
        forecast_item.className = "forecast";
        forecast_item.innerHTML = `<p>Погода: ${weather}</p>
                                           <p>Температура: ${temp}°C</p>`;
        forecast_div.appendChild(forecast_item);
      } else {
        document.getElementById("forecast").innerHTML =
          "Местоположение не найдено. Пожалуйста, попробуйте еще раз.";
      }
    })
    .catch((error) => console.error(error));
}
