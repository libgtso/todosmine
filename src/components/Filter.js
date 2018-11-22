import React from "react";

export default class Filter extends React.Component {
  render() {
    const { onCompleteFilter, onIncompleteFilter, showAllTodos } = this.props;
    return (
      <React.Fragment>
        <button onClick={() => showAllTodos()}>all</button>
        <button onClick={() => onIncompleteFilter()}>not duing</button>
        <button onClick={() => onCompleteFilter()}>alredi duing</button>
      </React.Fragment>
    );
  }
}
