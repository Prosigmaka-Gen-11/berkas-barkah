import React, { Component } from "react";

class LifeCycle extends Component {
  constructor() {
    super();

    this.state = {
      mobil: "",
      motor: "",
      rangkuman: "",
    };
  }

  componentDidMount() {
    console.log("subscribe ke db");
    document.addEventListener("mousemove", this.getMouseMoveEvent);
    console.log("ambil dr database");
    this.setState({
      mobil: "Mercy",
      motor: "Harley",
    });
  }

  componentDidUpdate(propsPrev, statePrev) {
    console.log(statePrev);
    console.log(this.setState);

    if (
      statePrev.mobil !== this.state.mobil ||
      statePrev.motor !== this.state.motor
    ) {
      this.setState({
        rangkuman: `saya punya mobil ${this.state.mobil} dan motor ${this.state.motor}`,
      });
    }
  }

  componentWillUnmount() {
    console.log("saya akan menghilang");
    console.log("unsubscribe ke db gopay");
    document.removeEventListener("mousemove", this.getMouseMoveEvent);
    this.setState({
      mobil: "",
      motor: "",
      rangkuman: "",
    });
  }

  getMouseMoveEvent(evt) {}

  render() {
    return (
      <>
        <h3>my name: {this.props.name}</h3>
        <ul>
          <li>Mobil: {this.state.mobil}</li>

          <li>Motor: {this.state.motor}</li>
        </ul>
        <p>{this.state.rangkuman}</p>
        <button onClick={() => this.setState({ mobil: "BMW" })}>
          Ubah Mobil
        </button>
        <button onClick={() => this.setState({ motor: "Supra bapak" })}>
          Ubah Motor
        </button>
      </>
    );
  }
}

export default LifeCycle;
