var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;
var ipc = electron.ipcMain;

app.on('ready', function(){

    var appWindow, infoWindow;

    // set up our regular app window to have an element in it that automatically hides it
    appWindow = new BrowserWindow({
        show:false
    });

    //load index.html from app folder
    appWindow.loadURL('file://' + __dirname + '/index.html');


    //customize window
    infoWindow = new BrowserWindow({
        width:400,
        height:300,
        transparent: true,
        show:false,
        frame: false

    });

    //use the Node.js dirname constant into a string that calls a specific file
    infoWindow.loadURL('file://' + __dirname + '/info.html');

    //do this event only once
    appWindow.once('ready-to-show', function(){
        //display this window that is currently hidden
        appWindow.show();
    });

    //close window
    ipc.on('closeInfoWindow', function(event,arg){
        event.returnValue= '';
        infoWindow.hide();

    });
});//app is ready
