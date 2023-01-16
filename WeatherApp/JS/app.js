const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1; // getMonth() returns a zero-based value, so we need to add 1
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
// let dateString = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;

let dateString = date.toLocaleString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

document.getElementById("date-time").innerHTML = dateString;
// let dateString = date.toLocaleString();



const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dd09ed60e5msh45d40e6045633b6p18af8ajsn56e39a67fee5",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      windspeed2.innerHTML = response.wind_speed;
      // wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      let sunriseTimestamp = response.sunrise;
      let sunriseTime = moment.unix(sunriseTimestamp).format("HH:mm:ss A");
      sunrise.innerHTML = sunriseTime;
      sunset.innerHTML = response.sunset;
      let sunsetTimestamp = response.sunset;
      let sunsetTime = moment.unix(sunsetTimestamp).format("HH:mm:ss A");
      sunset.innerHTML = sunsetTime;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Srinagar");

const commonPlaces = [
  "Srinagar",
  "California",
  "Boston",
  "New York",
  "Jammu",
  "Chicago",
];
const commonPlacesTable = document.getElementById("commonPlacesTable");

const updateCommonPlacesTable = (response) => {
  commonPlacesTable.innerHTML = "";
  for (let i = 0; i < commonPlaces.length; i++) {
    const tr = document.createElement("tr");

    const th = document.createElement("th");
    th.innerHTML = commonPlaces[i];
    tr.appendChild(th);

    const tdCloudPct = document.createElement("td");
    tdCloudPct.innerHTML = response.cloud_pct;
    tr.appendChild(tdCloudPct);

    const tdFeelsLike = document.createElement("td");
    tdFeelsLike.innerHTML = response.feels_like;
    tr.appendChild(tdFeelsLike);

    const tdHumidity = document.createElement("td");
    tdHumidity.innerHTML = response.humidity;
    tr.appendChild(tdHumidity);

    const tdMaxTemp = document.createElement("td");
    tdMaxTemp.innerHTML = response.max_temp;
    tr.appendChild(tdMaxTemp);

    const tdMinTemp = document.createElement("td");
    tdMinTemp.innerHTML = response.min_temp;
    tr.appendChild(tdMinTemp);

    const tdSunrise = document.createElement("td");
    tdSunrise.innerHTML = response.sunrise;
    tr.appendChild(tdSunrise);

    const tdSunset = document.createElement("td");
    tdSunset.innerHTML = response.sunset;
    tr.appendChild(tdSunset);

    const tdTemp = document.createElement("td");
    tdTemp.innerHTML = response.temp;
    tr.appendChild(tdTemp);

    const tdWindDegrees = document.createElement("td");
    tdWindDegrees.innerHTML = response.wind_degrees;
    tr.appendChild(tdWindDegrees);

    const tdWindSpeed = document.createElement("td");
    tdWindSpeed.innerHTML = response.wind_speed;
    tr.appendChild(tdWindSpeed);

    commonPlacesTable.appendChild(tr);
  }
};

function init() {
  // code to be executed
}

const getWeatherForCommonPlaces = () => {
  for (let i = 0; i < commonPlaces.length; i++) {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
        commonPlaces[i],
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let row = commonPlacesTable.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);
        let cell9 = row.insertCell(8);
        let cell10 = row.insertCell(9);
        let cell11 = row.insertCell(10);

        // cell1.innerHTML = commonPlaces[i];
        cell1.innerHTML = "<b>" + commonPlaces[i] + "</b>";

        cell2.innerHTML = response.cloud_pct;
        cell3.innerHTML = response.feels_like;
        cell4.innerHTML = response.humidity;
        cell5.innerHTML = response.max_temp;
        cell6.innerHTML = response.min_temp;
        cell7.innerHTML = response.sunrise;
        let sunriseTimestamp = response.sunrise;
        let sunriseTime = moment.unix(sunriseTimestamp).format("HH:mm:ss A");
        cell7.innerHTML = sunriseTime;

        cell8.innerHTML = response.sunset;
        let sunsetTimestamp = response.sunset;
        let sunsetTime = moment.unix(sunsetTimestamp).format("HH:mm:ss A");
        cell8.innerHTML = sunsetTime;

        cell9.innerHTML = response.temp;
        cell10.innerHTML = response.wind_degrees;
        cell11.innerHTML = response.wind_speed;
      })
      .catch((err) => console.error(err));
  }
};

getWeatherForCommonPlaces();

window.onload = init;
