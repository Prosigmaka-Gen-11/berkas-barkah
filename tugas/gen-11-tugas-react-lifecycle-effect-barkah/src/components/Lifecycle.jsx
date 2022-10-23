import React from "react";

class LifeCycle extends React.Component {
  constructor() {
    super();

    this.state = {
      pc: "",
      mobo: "",
      cpu: "",
      gpu: "",
      ram: "",
      listparts: "",
      count: 0,
      price0: "Rp. 0",
      price1: "Rp. 20.000.000",
      price2: "Rp. 40.000.000",
      price3: "Rp. 60.000.000",
      price4: "Rp. 80.000.000",
      price5: "Rp. 100.000.000",
      price6: "Rp. 120.000.000",
    };
  }

  componentDidMount() {
    console.log("subscribe to db pc");
    document.addEventListener("mousemove", this.getMouseMoveEvent);
    console.log("get from db pc");
    this.setState({
      pc: "",
      mobo: "Click Button",
      cpu: "Click Button",
      gpu: "Click Button",
      ram: "Click Button",
    });
    document.write = `${this.state.count} pcs`;
  }

  componentDidUpdate(propsPrev, statePrev) {
    console.log(statePrev);
    console.log(this.setState);

    if (
      statePrev.mobo !== this.state.mobo ||
      statePrev.cpu !== this.state.cpu ||
      statePrev.gpu !== this.state.gpu ||
      statePrev.ram !== this.state.ram ||
      statePrev.pc !== this.state.pc
    ) {
      this.setState({
        listparts: `list parts for Motherboard ${this.state.mobo}, for Processor ${this.state.cpu}, for VGA ${this.state.gpu}, for RAM ${this.state.ram}. ${this.state.pc}`,
      });
    }

    document.write = `${this.state.count} pcs`;
  }

  componentWillUnmount() {
    console.log("clear list");
    console.log("unsubscribe to db pc");
    document.removeEventListener("mousemove", this.getMouseMoveEvent);
    this.setState({
      pc: "",
      mobo: "",
      cpu: "",
      gpu: "",
      ram: "",
    });
  }

  getMouseMoveEvent(evt) {}

  incrementCount() {
    return this.setState({ count: this.state.count + 1 });
  }

  decrementCount() {
    return this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <>
        <h1>Users wanna build PC @Class Lifecycle</h1>
        <p>List Parts: </p>
        <p>
          Build by: {this.state.pc}
          <ol>
            <li>Motherboard: {this.state.mobo}</li>
            <li>Processor: {this.state.cpu}</li>
            <li>VGA: {this.state.gpu}</li>
            <li>RAM: {this.state.ram}</li>
          </ol>
          {this.state.count <= 0 ? (
            <button disabled onClick={() => this.decrementCount()}>
              -
            </button>
          ) : this.state.count > 0 ? (
            <button onClick={() => this.decrementCount()}>-</button>
          ) : null}
          {this.state.count}
          <button onClick={() => this.incrementCount()}>+</button>
          pcs
        </p>
        {this.state.count == 0
          ? this.state.price0
          : this.state.count == 1
          ? this.state.price1
          : this.state.count == 2
          ? this.state.price2
          : this.state.count == 3
          ? this.state.price3
          : this.state.count == 4
          ? this.state.price4
          : this.state.count == 5
          ? this.state.price5
          : this.state.count == 6
          ? this.state.price6
          : "gadibikin otomatis cuman ngetes hehe"}

        <p>{this.state.listparts}</p>
        <button
          onClick={() =>
            alert("Added") + this.setState({ mobo: "ASRock B550 Pro4" })
          }
        >
          Motherboard
        </button>
        <button
          onClick={() =>
            alert("Added") + this.setState({ cpu: "Ryzen 5 5600x" })
          }
        >
          Processor
        </button>
        <button
          onClick={() =>
            alert("Added") + this.setState({ gpu: "Asus RTX 2060 EVO OC" })
          }
        >
          VGA
        </button>
        <button
          onClick={() =>
            alert("Added") + this.setState({ ram: "Team Dark Pro cl-14 2x8" })
          }
        >
          RAM
        </button>
        <button
          onClick={() =>
            alert("Added") + this.setState({ pc: "Build PC by NB" })
          }
        >
          Build
        </button>
      </>
    );
  }
}

export default LifeCycle;
