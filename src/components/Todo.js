import React from "react";

class Todo extends React.Component {
  render() {
    const {
      value: { value, checked },
      onCheck
    } = this.props;
    return (
      <li
        style={{
          textDecoration: (checked && "line-through") || "none",
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
