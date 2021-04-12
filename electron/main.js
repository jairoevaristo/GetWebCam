const { app, BrowserWindow } = require('electron');

function App() {
  const createWindow = require('./createWindow');
};

app.whenReady().then(App);

app.on('active', () => {
  if (BrowserWindow.getAllWindows.length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});