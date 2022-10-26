import axios from "axios";
import { useState } from "react";

function App() {
  const [temperature, setTemperature] = useState("");
  const [wind, setWind] = useState("");
  const [description, setDescription] = useState("");
  const [forecastDay, setForecastDay] = useState("");
  const [forecastDay2, setForecastDay2] = useState("");
  const [forecastTemp, setForecastTemp] = useState("");
  const [forecastTemp2, setForecastTemp2] = useState("");
  const [forecastWind, setForecastWind] = useState("");
  const [forecastWind2, setForecastWind2] = useState("");
  const [clearButton, setClearButton] = useState(false);
  const [clearButton2, setClearButton2] = useState(false);

  async function getApiAsyncAwait() {
    try {
      const result = await axios.get(
        "https://goweather.herokuapp.com/weather/{city}"
      );
      setTemperature(result.data.temperature);
      setWind(result.data.wind);
      setDescription(result.data.description);
      setForecastDay(result.data.forecast[0].day);
      setForecastDay2(result.data.forecast[1].day);
      setForecastTemp(result.data.forecast[0].temperature);
      setForecastTemp2(result.data.forecast[1].temperature);
      setForecastWind(result.data.forecast[0].wind);
      setForecastWind2(result.data.forecast[1].wind);
      setClearButton(true);
    } catch (e) {
      alert(e.message);
      console.log(e);
    }
  }

  function getApi() {
    axios
      .get("https://goweather.herokuapp.com/weather/{city}")
      .then(function (result) {
        setTemperature(result.data.temperature);
        setWind(result.data.wind);
        setDescription(result.data.description);
        setForecastDay(result.data.forecast[0].day);
        setForecastDay2(result.data.forecast[1].day);
        setForecastTemp(result.data.forecast[0].temperature);
        setForecastTemp2(result.data.forecast[1].temperature);
        setForecastWind(result.data.forecast[0].wind);
        setForecastWind2(result.data.forecast[1].wind);
        setClearButton2(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function funcClearButton() {
    setClearButton(false);
  }
  function funcClearButton2() {
    setClearButton2(false);
  }

  return (
    <>
      <h1>Using Async Await</h1>
      {clearButton ? (
        <div>
          <p>Temperature: {temperature}</p>
          <p>Wind: {wind}</p>
          <p>Description: {description}</p>
          <span>
            Forecast:
            <ol>
              <li>
                Day: {forecastDay}, Temperature: {forecastTemp}, Wind:{" "}
                {forecastWind}
              </li>
              <li>
                Day: {forecastDay2}, Temperature: {forecastTemp2}, Wind:{" "}
                {forecastWind2}
              </li>
            </ol>
          </span>
        </div>
      ) : (
        <h3>Click for get Data</h3>
      )}
      <button onClick={getApiAsyncAwait}>Get API Async Await</button>
      <button onClick={funcClearButton}>Clear</button>
      <br />
      <br />
      <hr />
      <h1>Using Then Catch</h1>
      {clearButton2 ? (
        <div>
          <p>Temperature: {temperature}</p>
          <p>Wind: {wind}</p>
          <p>Description: {description}</p>
          <span>
            Forecast:
            <ol>
              <li>
                Day: {forecastDay}, Temperature: {forecastTemp}, Wind:{" "}
                {forecastWind}
              </li>
              <li>
                Day: {forecastDay2}, Temperature: {forecastTemp2}, Wind:{" "}
                {forecastWind2}
              </li>
            </ol>
          </span>
        </div>
      ) : (
        <h3>Click for get Data</h3>
      )}

      <button onClick={getApi}>Get API Then Catch</button>
      <button onClick={funcClearButton2}>Clear</button>
    </>
  );
}

export default App;
