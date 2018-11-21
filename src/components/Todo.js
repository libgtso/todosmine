import React from "react";

class Todo extends React.Component {
  render() {
    const {
      value: { value, completed },
      onCheck
    } = this.props;
    return (
      <li
        style={{
          textDecoration: (completed && "line-through") || "none",
          cursor: "pointer",
          listStyle: "none"
        }}
        onClick={onCheck}
      >
        {value}
      </li>
    );
  }
}

export default Todo;
