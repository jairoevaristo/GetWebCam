const { app, BrowserWindow, ipcMain, screen } = require('electron');

let win, customSize = 200, bigPosition;

function updateWindow(win) {
    const { x, y } = win.getBounds();
    const newDimesionWindow = customSize * 2.4;

    bigPosition = {
      x,
      y,
      width: newDimesionWindow,
      height: newDimesionWindow
    };

    win.setBounds(bigPosition, true)
  }

function createWindow() {
  win = new BrowserWindow({
    width: customSize,
    height: customSize,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    }
});

  win.loadFile('index.html');
  
  win.on('will-move', (event, rect) => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    rect.height + rect.y > height && event.preventDefault();
    (rect.width + rect.x > width || rect.x  < 0) && event.preventDefault();
  });
}

app.whenReady().then(createWindow);

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

ipcMain.on('message-size', (event, arg) => {
  updateWindow(win);
});