import React from "react";

export default class Filter extends React.Component {
  render() {
    const {
      onCompleteFilter,
      onIncompleteFilter,
      showAllTodos,
      todos
    } = this.props;
    return (
      <React.Fragment>
        <button onClick={() => showAllTodos(todos)}>all</button>
        <button onClick={() => onIncompleteFilter(todos)}>not duing</button>
        <button onClick={() => onCompleteFilter(todos)}>alredi duing</button>
      </React.Fragment>
    );
  }
}
