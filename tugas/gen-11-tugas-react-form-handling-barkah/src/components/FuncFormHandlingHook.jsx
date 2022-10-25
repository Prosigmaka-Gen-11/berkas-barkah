import React, { useState, useEffect } from "react";
import useFuncFormInput from "./useFuncFormInput";

const conditionList = [
  { value: "New", label: "New" },
  { value: "Used", label: "Used" },
];

const deliveryList = [
  { value: "SiLelet", label: "SiLelet" },
  { value: "EntarAja", label: "EntarAja" },
  { value: "Ninja Brake", label: "Ninja Brake" },
];

function FuncFormHandlingHook() {
  const { formInput, handleFormInput, handleCheckbox } = useFuncFormInput({
    brand: "",
    mobo: "",
    category: "",
    condition: "",
    delivery: "",
    releaseDate: "",
    description: "",
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formInput);
  }

  return (
    <>
      <h1>
        <u>Tugas Form handling @Function Component</u>
      </h1>
      <p>Brand: {formInput.brand}</p>
      <p>Mobo: {formInput.mobo}</p>
      <p>Category: {formInput.category}</p>
      <p>Condition: {formInput.condition}</p>
      <p>Delivery Service: {formInput.delivery}</p>
      <p>Release Date: {formInput.releaseDate}</p>
      <p>Description: {formInput.description}</p>
      <hr />

      <form onSubmit={(evt) => handleSubmit(evt)}>
        <label>
          Brand <br />
          <input
            type="text"
            value={formInput.brand}
            onChange={(evt) => handleFormInput(evt, "brand")}
          />
        </label>
        <br />
        <br />
        <label>
          Type Motherboard <br />
          <input
            type="text"
            value={formInput.mobo}
            onChange={(evt) => handleFormInput(evt, "mobo")}
          />
        </label>
        <br />
        <br />
        <label>
          Category <br />
          <select
            value={formInput.category}
            onChange={(evt) => handleFormInput(evt, "category")}
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
        Condition
        {conditionList.map((conditionItem) => (
          <label key={conditionItem.value}>
            <br />
            <input
              type="radio"
              name="condition"
              value={conditionItem.value}
              onChange={(evt) => handleFormInput(evt, "condition")}
            />
            {conditionItem.label}
          </label>
        ))}
        <br />
        <br />
        Delivery Service <br />
        {deliveryList.map((deliveryItem) => (
          <label key={deliveryItem.value}>
            <br />
            <input
              type="checkbox"
              name="delivery"
              value={deliveryItem.value}
              onChange={(event) => handleCheckbox(event, "delivery")}
            />
            {deliveryItem.label}
          </label>
        ))}
        <br />
        <br />
        <label>
          Release Date <br />
          <input
            type="date"
            value={formInput.releaseDate}
            onChange={(evt) => handleFormInput(evt, "releaseDate")}
          />
        </label>
        <br />
        <br />
        <label>
          Description <br />
          <textarea
            value={formInput.description}
            onChange={(evt) => handleFormInput(evt, "description")}
          ></textarea>
        </label>
        <br />
        <br />
        <button>submit</button>
      </form>
    </>
  );
}

export default FuncFormHandlingHook;
