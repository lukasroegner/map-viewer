
const { app, BrowserWindow } = require('electron')

/**
 * Creates the window for the application.
 */
function createWindow () {

    // Creates the new window
    const browserWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Map Viewer',
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Loads the index file
    browserWindow.loadFile('index.html');

    // Loads the DEV tools
    // browserWindow.webContents.openDevTools();
}

app.on('ready', createWindow);
