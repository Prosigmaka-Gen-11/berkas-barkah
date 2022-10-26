import axios from "axios";
import { useState } from "react";

function App() {
  const [activity, setActicity] = useState("");
  const [type, setType] = useState("");
  const [catFacts, setCatFacts] = useState("");

  async function getApiAsyncAwait() {
    try {
      const result = await axios.get("https://www.boredapi.com/api/activity");
      const result2 = await axios.get("https://catfact.ninja/facts");
      setActicity(result.data.activity);
      setType(result.data.type);
      setCatFacts(result2.data.data[0].fact);
    } catch (err) {
      alert(err.message);
      console.log(err);
    }
  }

  // function getApi() {
  //   axios
  //     .get("https://www.boredapi.com/api/activity")
  //     .then(function (result) {
  //       setActicity(result.data.activity);
  //       setType(result.data.type);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  return (
    <>
      <h1>tes</h1>
      <button onClick={getApiAsyncAwait}>Get API</button>
      <br />
      <br />
      <p>Acitivity: {activity}</p>
      <p>Type: {type}</p>
      <p>CatFacts: {catFacts}</p>
    </>
  );
}

export default App;
