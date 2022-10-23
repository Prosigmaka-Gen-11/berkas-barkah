import React from "react";
import Children, { Name } from "./Children";
import LifeCycle from "./LifeCycle";
import SideEffect from "./SideEffect";

class App extends React.Component {
  // property state

  constructor(props) {
    super(props);
    this.state = {
      name: "barkah",
      munculinLifecycle: true,
      munculinSideEffect: true,
    };
  }

  // // without constructor
  // state = {
  //   name: "barkah",
  // };

  // function
  ubahNama() {
    this.setState({
      name: "barganss",
    });
  }

  render() {
    return (
      <>
        <h1>sipppp {this.state.name}</h1>
        <button onClick={() => this.ubahNama()}> ubah nama {Name} </button>

        {/* children */}
        <Children
          name="sipy"
          sebutNama={(namaYgDisebut) => {
            alert("Hai " + namaYgDisebut);
            this.setState({
              name: namaYgDisebut,
            });
          }}
        />

        {/* lifecycle for class */}

        <button onClick={() => this.setState({ munculinLifecycle: false })}>
          hilangin Lifecycle
        </button>

        {this.state.munculinLifecycle ? (
          <LifeCycle name={this.state.name} />
        ) : null}

        {/* contoh else if */}
        {/* {this.state.munculinLifecycle ? (
          <>
            <h1>Bagian dari lifecycle</h1>
            <h2>Aku juga</h2>
            <LifeCycle name={this.state.name} />
          </>
        ) : this.state.name == "kah" ? (
          <h2>nama ku steve</h2>
        ) : this.state.name == "kahuhuy" ? (
          <h2>nama ku mubarok</h2>
        ) : null} */}
        <br />
        <br />

        {/* sideeffect for function */}

        <button onClick={() => this.setState({ munculinSideEffect: false })}>
          hilangin SideEffect
        </button>

        {this.state.munculinSideEffect ? <SideEffect /> : null}
      </>
    );
  }
}

export default App;
