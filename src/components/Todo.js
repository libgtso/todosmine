import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false
    };
  }

  onChangeHandler = () => {
    this.setState({
      check: !this.state.check
    });
  };

  render() {
    const { text } = this.props;
    return (
      <li
        style={{
          textDecoration: this.state.check ? "line-through" : "none",
          cursor: "pointer",
          listStyle: "none"
        }}
        onClick={this.onChangeHandler}
      >
        {text}
      </li>
    );
  }
}

export default Todo;
