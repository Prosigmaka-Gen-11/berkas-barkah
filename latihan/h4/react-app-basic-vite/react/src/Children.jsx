import React, { Component } from "react";

export const Name = "aku";

class Children extends Component {
  render() {
    return (
      <>
        <h2>sip child {this.props.name}</h2>
        <button onClick={() => this.props.sebutNama("bargansmaxxx")}>
          sebut nama child
        </button>
      </>
    );
  }
}

export default Children;
