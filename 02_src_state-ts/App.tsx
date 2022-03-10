import React, { Component } from "react";
interface IState {
  name: string;
}
export default class App extends Component<any, IState> {
  state = {
    name: "kerwin",
  };
  handleChange = () => {
    console.log(this.state.name);
    let newname =
      this.state.name.substring(0, 1).toUpperCase() +
      this.state.name.substring(1);
    this.setState({
      name: newname,
    });
  };
  render() {
    const { name } = this.state;
    return (
      <div>
        App... {name}
        <button onClick={this.handleChange}>change</button>
      </div>
    );
  }
}
