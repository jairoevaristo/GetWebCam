const { app, ipcMain } = require('electron');
const controllerWindow = require('./WindowController');

let win, tray;

function App() {
  win = require('./Window');
  tray = require('./Tray');
  const { toggle } = controllerWindow(win);

  tray.on('click', toggle);
}

app.whenReady().then(App);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('message-size', (event, arg) => { 
  const args = arg ? 'zoomin' : 'zoomup' ;
  const { controllerSize } = controllerWindow(win, args);

  controllerSize(args);
});