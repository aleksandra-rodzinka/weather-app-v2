function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temp");
  let cityElement = document.querySelector("#city");
  let conditionsElement = document.querySelector("#conditions");
  let windElement = document.querySelector("#wind");
  let humidityElement = document.querySelector("#humidity");
  //ddd
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  conditionsElement.innerHTML = response.data.condition.description;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = response.data.temperature.humidity;
  console.log(response);
}
let ApiUrl =
  "https://api.shecodes.io/weather/v1/current?query=Krakow&key=f0c81td68bc7aeb6ae5b7113o45714af&units=metric";

axios.get(ApiUrl).then(displayTemperature);
