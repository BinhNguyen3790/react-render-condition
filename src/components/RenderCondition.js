import { Component } from "react";

class RenderCondition extends Component {
  is_login = false;
  useName = "Kevin";

  renderUse = () => {
    if (this.is_login) {
      return <h1>Hello {this.useName}</h1>;
    } else {
      return <button>Login</button>;
    }
  };

  render() {
    return <div>{this.renderUse()}</div>;
  }
}

export default RenderCondition;
