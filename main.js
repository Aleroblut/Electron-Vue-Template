// Basic init
const electron = require('electron')
const { app, BrowserWindow, webContents } = electron

let winSettings = {
    windowWidth: 640,
    windowHeight: 480,
    devTools: true
};

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname);

// To avoid being garbage collected
let mainWindow;

function createWindow(settings) {
    mainWindow = new BrowserWindow({width: settings.windowWidth, height: settings.windowHeight});

    mainWindow.loadFile("app/index.html");

    if (winSettings.devTools) {
        openConsole();
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

function openConsole() {

    if (!mainWindow) {
        return;
    }

    mainWindow.webContents.openDevTools({ mode: 'undocked' });
}

app.on('ready', () => {
    createWindow(winSettings);
});
