const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');


/**Keep a global reference of the window object, if you don't, the window will closed automatically when the JavaScript object is garbage collected.*/
let mainWindow;
/**Create the browser window*/
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 300,
    minHeight: 200
  });

// un-comment this if you like to keep the same aspect ratio when mainWindow.setAspectRatio(1.3)

  /**load the index.html of the app*/
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));


  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  /**when the window is closed*/
  mainWindow.on('closed', function() {
    /**if your app supports multi windows, this is the time when you should delete the corresponding element*/
    mainWindow = null
  })
}

/**
 * When Electron has finished initialization and is ready to create browser windows.
 * Ps: Some APIs can only be used after this event occurs.*/
app.on('ready', createWindow);

/**Quit when all windows are closed*/
app.on('window-all-closed', function() {
  /**On OS X it is common for applications and their menu to stay active until the user quits explicitly with Cmd + Q*/
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function() {
    /**On OS X it is common for applications and their menu to stay active until the user quits explicitly with Cmd + Q*/
  if (mainWindow === null) {
    createWindow()
  }
});

/**
 \Users\acoelho\AppData\Local\Google\Chrome\User Data\Default\Extensions>
 */