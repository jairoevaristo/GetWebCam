const { app, BrowserWindow, screen } = require('electron');

function createWindow() {
  let win = new BrowserWindow({
    width: 300,
    height: 300,
    frame: false,
    transparent: true,
    resizable: false,
    alwaysOnTop: true,
  });

  win.loadFile('index.html');
  
  win.on('will-move', (event, rect) => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    rect.height + rect.y > height && event.preventDefault();
    (rect.width + rect.x > width || rect.x < 0) && event.preventDefault();
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