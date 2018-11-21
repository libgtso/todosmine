import React from "react";
import TodoList from "./TodoList";
import Filter from "./Filter";

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
      arr: [...this.state.arr, { value: this.state.value, completed: false }]
    });
  };

  onClicked = index => {
    const arr = this.state.arr;
    arr[index].completed = !arr[index].completed;
    this.setState({ arr });
  };

  onCompleteFilter = todos => {
    const arr = todos.filter(todo => todo.completed);
    this.setState({ arr });
  };

  onIncompleteFilter = todos => {
    const arr = todos.filter(todo => !todo.completed);
    this.setState({ arr });
  };

  showAllTodos = todos => {
    const arr = todos;
    this.setState({ arr });
  };

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <button onClick={this.onSubmit}>Add</button>
        <TodoList todos={this.state.arr} onCheck={this.onClicked} />
        <Filter
          showAllTodos={this.showAllTodos}
          onIncompleteFilter={this.onIncompleteFilter}
          onCompleteFilter={this.onCompleteFilter}
          todos={this.state.arr}
        />
      </React.Fragment>
    );
  }
}
