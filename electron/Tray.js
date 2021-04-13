const { Tray } = require('electron');
const { resolve } = require('path');

let tray;

function createTray() {
  tray = new Tray(resolve(__dirname, '../', 'assets', 'camera.png'));

  return tray;
};

module.exports = { createTray };