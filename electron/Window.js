const { BrowserWindow, screen } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 200,
    height: 200,
    frame: false,
    show: false, 
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

  return win;
}

module.exports = createWindow();