import React from "react";
import ReactDOM from "react-dom";

class LlbComponent extends React.Component {
  render() {
    return (
      <div>
        <h1> Develop your react content here! </h1>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<LlbComponent/>, app);
