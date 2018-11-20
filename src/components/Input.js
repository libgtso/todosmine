import React from "react";
import TodoList from "./TodoList";

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      arr: []
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  onSubmit = () => {
    this.setState({
      value: "",
      arr: [...this.state.arr, this.state.value]
    });
  };

  render() {
    return (
      <React.Fragment>
        <input type="text" onChange={this.handleChange} value={this.state.value} />
        <button onClick={this.onSubmit}>Add</button>
        <TodoList todos={this.state.arr} />
      </React.Fragment>
    );
  }
}
