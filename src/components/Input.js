import React from "react";
import TodoList from "./TodoList";
import Filter from "./Filter";

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      arrView: [],
      arrMemory: []
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  onSubmit = () => {
    const arrView = [
      ...this.state.arrView,
      { value: this.state.value, completed: false }
    ];
    this.setState({
      value: "",
      arrView,
      arrMemory: arrView
    });
  };

  onClicked = index => {
    const arrView = this.state.arrView;
    arrView[index].completed = !arrView[index].completed;
    this.setState({ arrView, arrMemory: arrView });
  };

  onIncompleteFilter = () => {
    const arrView = this.state.arrMemory.filter(todo => !todo.completed);
    this.setState({
      arrView
    });
  };

  onCompleteFilter = () => {
    const arrView = this.state.arrMemory.filter(todo => todo.completed);
    this.setState({
      arrView
    });
  };

  showAllTodos = () => {
    this.setState({
      arrView: this.state.arrMemory
    });
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
        <TodoList todos={this.state.arrView} onCheck={this.onClicked} />
        <Filter
          showAllTodos={this.showAllTodos}
          onIncompleteFilter={this.onIncompleteFilter}
          onCompleteFilter={this.onCompleteFilter}
        />
      </React.Fragment>
    );
  }
}
