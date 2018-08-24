/**
 * - Files are imported through the Gulp process, and these required statements are going to be processed by the Browserify plugin.
*  - So their job is going to be to just copy and paste those libraries into this render.js that is going to be then sent to the app folder
 */

var React = require('react');
var ReactDOM = require('react-dom');

//import jQuery & bootstrap
const $ = jQuery = require('jquery');
const bootstrap = require('bootstrap');

var MainInterface = React.createClass({
    render: function(){
        return(
            <h1>Main Banana Sandiwch App</h1>
        )
    }//render
    });//main interface

//In React, when you create a class, it becomes an HTML-like tag that is going to replace whatever we target in the DOM with what's rendered through this return statement here
ReactDOM.render(
    <MainInterface/>,
    document.getElementById('petAppointments')
);//reactDOM


/**
 * jQuery testing
 */
// $(function(){
//     $('#petAppointments').append('<h3 class="text-success">App Loaded</h3><button class="btn btn-danger">We\'re in business!</button> ');
// });

