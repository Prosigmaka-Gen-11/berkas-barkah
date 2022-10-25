import React, { useState, useEffect } from "react";

function useFuncFormInput(inputData) {
  const [formInput, setFormInput] = useState(inputData);

  function handleFormInput(evt, propName) {
    setFormInput({ ...formInput, [propName]: evt.target.value });
  }

  function handleCheckbox(event) {
    const { delivery } = formInput;

    if (event.target.checked) {
      setFormInput({
        delivery: [...delivery, event.target.value],
      });
    } else {
      setFormInput({
        delivery: delivery.filter((event) => event !== event.target.value),
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
