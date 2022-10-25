import React, { useState, useEffect } from "react";

function useFuncFormInput(inputData) {
  const [formInput, setFormInput] = useState(inputData);

  function handleFormInput(evt, propName) {
    setFormInput({ ...formInput, [propName]: evt.target.value });
  }

  function handleCheckbox(event) {
    const { value, checked } = event.target;
    const { delivery } = formInput;

    if (checked) {
      setFormInput({
        delivery: [...delivery, value],
      });
    } else {
      setFormInput({
        delivery: delivery.filter((event) => event !== value),
      });
    }
  }

  return {
    formInput,
    handleFormInput,
    handleCheckbox,
  };
}

export default useFuncFormInput;
