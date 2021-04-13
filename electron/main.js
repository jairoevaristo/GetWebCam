const { app, BrowserWindow, ipcMain, screen } = require('electron');

let win, customSize = 200, bigPosition;

const updateWindow = {
  "zoomin": () => {
    const { x, y } = win.getBounds();

    const newDimesionWindow = customSize * 2.4;
    
    bigPosition = {
      x,
      y,
      width: newDimesionWindow,
      height: newDimesionWindow
    };
  
    win.setBounds(bigPosition, true)  
  },

  "zoomup": () => {
    const { width, height } = win.getBounds();
    let newWidth, newHeight;

    if (width > 200 && height > 200) {
      newWidth = width - 20
      newHeight = height - 20
    }
    
    win.setSize(newWidth, newHeight);
  }
};

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
  const args = arg ? 'zoomin' : 'zoomup' ;
  updateWindow[args]();
  console.log(args)
});