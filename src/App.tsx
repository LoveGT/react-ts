import React, { Component } from "react";
interface IState {
  list: string[];
}
export default class App extends Component<any, IState> {
  state = {
    list: []
  }
  inputRef  = React.createRef<HTMLInputElement>()
  handleAdd = () => {
   console.log((this.inputRef.current as HTMLInputElement).value)
  //  this.state.list = [(this.inputRef.current as HTMLInputElement).value,...this.state.list]
  };

  render() {
    const {list} = this.state
    return (
      <div>
        <input ref={this.inputRef} type="text" />
        <button onClick={this.handleAdd}>Add</button>
        <ul>
        {
            list.map(item=> {
              return 
            })
        }
        </ul>
      </div>
    );
  }
}
