import React from "react";
import SideEffect from "./components/SideEffect";
import LifeCycle from "./components/Lifecycle";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showupLifecycle: true,
      showupSideEffect: true,
    };
  }

  render() {
    return (
      <>
        <h1>
          <u>Tugas React Lifecycle&SideEffect Component</u>
        </h1>

        {/* Lifecycle for class */}
        {this.state.showupLifecycle ? <LifeCycle /> : null}
        <br />
        <br />
        <button
          onClick={() =>
            alert("Cleared") + this.setState({ showupLifecycle: false })
          }
        >
          Clear Lifecycle
        </button>
        <hr />

        {/* Sideeffect for function */}
        {this.state.showupSideEffect ? <SideEffect /> : null}
        <br />
        <br />
        <button
          onClick={() =>
            alert("Cleared") + this.setState({ showupSideEffect: false })
          }
        >
          Clear SideEffect
        </button>
      </>
    );
  }
}

export default App;
