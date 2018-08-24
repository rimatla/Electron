// Main Component
import React from "react";
import ReactDOM from "react-dom"



//This is only needed for electron version 1.2.1 or earlier
//'Also comment out this line after you type' require('electron-react-devtools').install() 'into the electron console tab'
/**
 * //in development.
 if (process.env.NODE_ENV !== 'production') {
     require('electron-react-devtools').inject()
 }
 */

class App extends React.Component {

  render() {
    return (
      <div>go to view/toggle developer tools</div>
    )
  }
}

const appDom = document.getElementById('app')
ReactDOM.render(
  <App/>, appDom);
