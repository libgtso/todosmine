import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  render() {
    const { todos } = this.props;
    return (
      <React.Fragment>
        <ul>
          {todos.map((todo, index) => {
            return <Todo text={todo} key={index} />;
          })}
        </ul>
      </React.Fragment>
    );
  }
}
