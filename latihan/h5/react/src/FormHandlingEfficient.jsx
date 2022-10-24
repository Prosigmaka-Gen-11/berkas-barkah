import React, { useState, useEffect } from "react";

function FormHandlingEfficient() {
  const [formInput, setFormInput] = useState({
    parts: "tes",
    mobo: "",
    category: "",
    releaseDate: "",
    description: "",
  });

  function handleFormInputAdvance(evt, propsName) {
    setFormInput({ ...formInput, [propsName]: evt.target.value });
  }

  //   function handleFormInput(evt, propsName) {
  //     const copyFormInput = { ...formInput };
  //     copyFormInput[propsName] = evt.target.value;
  //     setFormInput(copyFormInput);
  //   }

  return (
    <>
      <p>parts: {formInput.parts}</p>
      <p>mobo: {formInput.mobo}</p>
      <p>category: {formInput.category}</p>
      <p>releasedate: {formInput.releaseDate}</p>
      <p>description: {formInput.description}</p>
      <hr />
      <label htmlFor="">
        Parts <br />
        <input
          type="text"
          value={formInput.parts}
          onChange={(evt) => handleFormInputAdvance(evt, "parts")}
        />
      </label>
      <br />
      <br />

      <label htmlFor="">
        Mobo <br />
        <input
          type="text"
          value={formInput.mobo}
          onChange={(evt) => handleFormInputAdvance(evt, "mobo")}
        />
      </label>
      <br />
      <br />

      <label htmlFor="">
        Category <br />
        <select
          value={formInput.category}
          onChange={(evt) => handleFormInputAdvance(evt, "category")}
        >
          <option>Mobo</option>
          <option>Proci</option>
          <option>VGA</option>
        </select>
      </label>
      <br />
      <br />

      <label htmlFor="">
        Release Date <br />
        <input
          type="date"
          value={formInput.releaseDate}
          onChange={(evt) => handleFormInputAdvance(evt, "releaseDate")}
        />
      </label>
      <br />
      <br />

      <label htmlFor="">
        Description <br />
        <textarea
          value={formInput.description}
          onChange={(evt) => handleFormInputAdvance(evt, "description")}
        ></textarea>
      </label>
      <br />
      <br />
    </>
  );
}

export default FormHandlingEfficient;

//   //spread operator ...

//   const fruits = ["dragon", "kiwi", "pel"];

//   const newFruits = ["buah", "nggur", ...fruits];

//   const family = {
//     aku: "bar",
//     siaku: "gans",
//     both: "bargans",
//   };

//   const newFamily = {
//     newAku: "kahgan",
//     newSiaku: "max",
//   };

//   const bigFam = {
//     ...family,
//     ...newFamily,
//   };

//   const called = "newSiaku";

//   console.log(bigFam.aku);
//   console.log(bigFam["newAku"]);
//   console.log(bigFam[called]);
