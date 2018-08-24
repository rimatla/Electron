// Main Component
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {

  render() {
    return (
      <div>Hello Electron & React World!</div>
    )
  }
}

const appDom = document.getElementById('app')

ReactDOM.render(
  <App/>, appDom);
