var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;

app.on('ready', function(){
    var appWindow, infoWindow;

    // set up our regular app window to have an element in it that automatically hides it
    appWindow = new BrowserWindow({
        show:false
    });
    appWindow.loadURL('http://altamircoelho.com');

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
        //once the above window has finished loading show the other window as well 3 seconds later and hide it again after 5 seconds
        setTimeout(function(){
            infoWindow.show();
            setTimeout(function(){infoWindow.hide();}, 5000)
        }, 3000);
    })
});
