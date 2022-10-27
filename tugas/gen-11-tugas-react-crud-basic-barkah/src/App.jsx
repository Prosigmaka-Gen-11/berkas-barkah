import axios from "axios";
import { useState, useEffect } from "react";

const conditionList = [
  { value: "New", label: "New" },
  { value: "Used", label: "Used" },
];

const deliveryList = [
  { value: "SiLelet", label: "SiLelet" },
  { value: "EntarAja", label: "EntarAja" },
  { value: "Ninja Brake", label: "Ninja Brake" },
];

const initialForm = {
  brand: "",
  mobo: "",
  category: "",
  condition: "New",
  delivery: [],
  releaseDate: "",
  description: "",
};

function App() {
  const [nbkomputer, setNbkomputer] = useState([]);
  const [formInput, setFormInput] = useState({ ...initialForm });
  const isEditing = formInput.id;

  //call
  async function getNbkomputer() {
    const result = await axios.get("http://localhost:3000/nbkomputer");
    setNbkomputer(result.data);
    console.log(result.data);
  }

  // handleinput
  function handleInput(evt, inputName) {
    setFormInput({ ...formInput, [inputName]: evt.target.value });
  }

  //handlesubmit
  async function handleSubmit(evt) {
    evt.preventDefault();

    if (isEditing) {
      await axios.put(
        `http://localhost:3000/nbkomputer/${formInput.id}`,
        formInput
      );
    } else {
      await axios.post("http://localhost:3000/nbkomputer", formInput);
    }
    getNbkomputer();
    setFormInput({ ...initialForm });
  }

  //edit
  function funcEdit(nbkom) {
    setFormInput({ ...nbkom });
  }

  //delete
  async function funcDelete(id) {
    await axios.delete(`http://localhost:3000/nbkomputer/${id}`);
    getNbkomputer();
  }

  //CheckBox
  function handleCheckbox(evt) {
    const { value, checked } = evt.target;
    const { delivery } = formInput;

    if (checked) {
      setFormInput({ ...formInput, delivery: [...delivery, value] });
    } else {
      setFormInput({
        ...formInput,
        delivery: delivery.filter((evt) => evt !== value),
      });
    }
  }

  useEffect(() => {
    getNbkomputer();
  }, []);

  return (
    <>
      <h1>Table</h1>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Motherboard</th>
            <th>Category</th>
            <th>Condition</th>
            <th>Delivery</th>
            <th>Release Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {nbkomputer.map((nbkom) => (
            <tr key={nbkom.id}>
              <td>{nbkom.brand}</td>
              <td>{nbkom.mobo}</td>
              <td>{nbkom.category}</td>
              <td>{nbkom.condition}</td>
              <td>{nbkom.delivery}</td>
              <td>{nbkom.releaseDate}</td>
              <td>{nbkom.description}</td>
              <td>
                <button onClick={() => funcEdit(nbkom)}>Edit</button>
                <button onClick={() => funcDelete(nbkom.id)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      <hr />

      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Brand: <br />
          <input
            type="text"
            value={formInput.delivery.brand}
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

        <label>
          Condition:
          {conditionList.map((conditionItem) => (
            <label key={conditionItem.value}>
              <br />
              <input
                type="radio"
                value={conditionItem.value}
                checked={
                  formInput.condition.indexOf(conditionItem.value) !== -1
                }
                onChange={(evt) => handleInput(evt, "condition")}
              />
              {conditionItem.label}
            </label>
          ))}
        </label>

        <br />
        <br />

        <label>
          Delivery Service:
          {deliveryList.map((deliveryItem) => (
            <label key={deliveryItem.value}>
              <br />
              <input
                type="checkbox"
                value={deliveryItem.value}
                checked={formInput.delivery.indexOf(deliveryItem.value) !== -1}
                onChange={(event) => handleCheckbox(event, "delivery")}
              />
              {deliveryItem.label}
            </label>
          ))}
        </label>

        <br />
        <br />

        <label>
          Release Date <br />
          <input
            type="date"
            value={formInput.releaseDate}
            onChange={(evt) => handleInput(evt, "releaseDate")}
          />
        </label>

        <br />
        <br />

        <label>
          Description <br />
          <textarea
            value={formInput.description}
            onChange={(evt) => handleInput(evt, "description")}
          ></textarea>
        </label>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
