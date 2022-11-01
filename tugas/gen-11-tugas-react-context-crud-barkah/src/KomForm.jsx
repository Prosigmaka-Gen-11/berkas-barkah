import { useContext, useState, useEffect } from "react";
import { KomContext } from "./KomProvider";
import axios from "axios";
import KomList from "./KomList";

const initialForm = {
  brand: "",
  mobo: "",
  category: "",
};

function KomForm() {
  const ContextFromProvider = useContext(KomContext);

  //handleinput
  function handleInput(evt, inputName) {
    ContextFromProvider.setFormInput({
      ...ContextFromProvider.formInput,
      [inputName]: evt.target.value,
    });
  }

  //handlesubmit
  async function handleSubmit(evt) {
    // evt.preventDefault();
    await axios.post(
      "http://localhost:3000/nbkomputer",
      ContextFromProvider.formInput
    );
    ContextFromProvider.setFormInput({ ...initialForm });
  }

  return (
    <>
      <KomList />
      <br />
      <hr />
      <br />
      <h1>Ini Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Brand: <br />
          <input
            type="text"
            value={ContextFromProvider.formInput.brand}
            onChange={(evt) => handleInput(evt, "brand")}
          />
        </label>

        <br />
        <br />

        <label>
          Type Motherboard: <br />
          <input
            type="text"
            value={ContextFromProvider.formInput.mobo}
            onChange={(evt) => handleInput(evt, "mobo")}
          />
        </label>

        <br />
        <br />

        <label>
          Category: <br />
          <select
            value={ContextFromProvider.formInput.category}
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
    </>
  );
}

export default KomForm;
