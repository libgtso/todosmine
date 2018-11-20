import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    const { todos, onCheck } = this.props;
    return (
      <React.Fragment>
        <ul>
          {todos.map((todo, index) => {
            return <Todo value={todo} key={index} onCheck={() => onCheck(index)} />;
          })}
        </ul>
      </React.Fragment>
    );
  }
}
