import React from "react";
import "./style.css";

class Wrapper extends React.Component {
  render() {
    return (
      <div className="container">{this.props.children}</div>
    );
  }
}

export default Wrapper;
