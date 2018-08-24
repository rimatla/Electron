var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;

app.on('ready', function(){
    var appWindow, infoWindow;

    appWindow = new BrowserWindow();
    appWindow.loadURL('http://altamircoelho.com');

    //customize window
    infoWindow = new BrowserWindow({
        width:400,
        height:300,
        transparent: true,
        frame: false

    });

    //use the Node.js dirname constant into a string that calls a specific file
    infoWindow.loadURL('file://' + __dirname + '/info.html');
});
