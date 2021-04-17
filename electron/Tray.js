const { Tray } = require('electron');
const { resolve } = require('path');

function createTray() {
  const tray = new Tray(resolve(__dirname, '../', 'assets', 'cameraIcon.png'));
  return tray;
};

module.exports = createTray();