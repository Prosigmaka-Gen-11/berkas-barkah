import { createContext, useState, useEffect } from "react";
import KomList from "./KomList";
import axios from "axios";

export const KomContext = createContext();

const initialForm = {
  brand: "",
  mobo: "",
  category: "",
};

function KomProvider(props) {
  const [nbkomputer, setNbkomputer] = useState([]);
  const [formInput, setFormInput] = useState({ ...initialForm });

  //call
  async function getNbkomputer() {
    const result = await axios.get("http://localhost:3000/nbkomputer");
    setNbkomputer(result.data);
  }

  //handleinput
  function handleInput(evt, inputName) {
    setFormInput({ ...formInput, [inputName]: evt.target.value });
  }

  //handlesubmit
  async function handleSubmit(evt) {
    evt.preventDefault();

    await axios.post("http://localhost:3000/nbkomputer", formInput);

    getNbkomputer();
    setFormInput({ ...initialForm });
  }

  useEffect(() => {
    getNbkomputer();
  }, []);

  return (
    <>
      <KomContext.Provider value={{ nbkomputer }}>
        {props.children}
        <br />
        <hr />
        <h1>Ini Form</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Brand: <br />
            <input
              type="text"
              value={formInput.brand}
              onChange={(evt) => handleInput(evt, "brand")}
            />
          </label>

          <br />
          <br />

          <label>
            Type Motherboard: <br />
            <input
              type="text"
              value={formInput.mobo}
              onChange={(evt) => handleInput(evt, "mobo")}
            />
          </label>

          <br />
          <br />

          <label>
            Category: <br />
            <select
              value={formInput.category}
              onChange={(evt) => handleInput(evt, "category")}
            >
              <option value="" disabled>
                -- Option
              </option>
              <option>Mobo</option>
              <option>Proci</option>
              <option>VGA</option>
            </select>
          </label>

          <br />
          <br />

          <button>Submit</button>
        </form>
      </KomContext.Provider>
    </>
  );
}

export default KomProvider;
