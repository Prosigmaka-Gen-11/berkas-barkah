import React from "react";

const conditionList = [
  { value: "New", label: "New" },
  { value: "Used", label: "Used" },
];

const deliveryList = [
  { value: "SiLelet", label: "SiLelet" },
  { value: "EntarAja", label: "EntarAja" },
  { value: "Ninja Brake", label: "Ninja Brake" },
];

class ClassFormHandlingHook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "",
      mobo: "",
      category: "",
      condition: "",
      delivery: "",
      releaseDate: "",
      description: "",
    };
  }

  handleFormInput(evt, propName) {
    this.setState({ [propName]: evt.target.value });
  }

  handleCheckbox(event) {
    const { value, checked } = event.target;
    const { delivery } = this.state;

    if (checked) {
      this.setState({
        delivery: [...delivery, value],
      });
    } else {
      this.setState({
        delivery: delivery.filter((event) => event !== value),
      });
    }
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <>
        <h1>
          <u>Tugas Form handling @Class Component</u>
        </h1>
        <p>Brand: {this.state.brand}</p>
        <p>Mobo: {this.state.mobo}</p>
        <p>Category: {this.state.category}</p>
        <p>Condition: {this.state.condition}</p>
        <p>Delivery Service: {this.state.delivery}</p>
        <p>Release Date: {this.state.releaseDate}</p>
        <p>Description: {this.state.description}</p>
        <hr />

        <form onSubmit={(evt) => this.handleSubmit(evt)}>
          <label>
            Brand <br />
            <input
              type="text"
              value={this.state.brand}
              onChange={(evt) => this.handleFormInput(evt, "brand")}
            />
          </label>
          <br />
          <br />
          <label>
            Type Motherboard <br />
            <input
              type="text"
              value={this.state.mobo}
              onChange={(evt) => this.handleFormInput(evt, "mobo")}
            />
          </label>
          <br />
          <br />
          <label>
            Category <br />
            <select
              value={this.state.category}
              onChange={(evt) => this.handleFormInput(evt, "category")}
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
                onChange={(evt) => this.handleFormInput(evt, "condition")}
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
                onChange={(event) => this.handleCheckbox(event, "delivery")}
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
              value={this.state.releaseDate}
              onChange={(evt) => this.handleFormInput(evt, "releaseDate")}
            />
          </label>
          <br />
          <br />
          <label>
            Description <br />
            <textarea
              value={this.state.description}
              onChange={(evt) => this.handleFormInput(evt, "description")}
            ></textarea>
          </label>
          <br />
          <br />
          <button>submit</button>
        </form>
      </>
    );
  }
}

export default ClassFormHandlingHook;
