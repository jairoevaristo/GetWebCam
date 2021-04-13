const { ipcRenderer } = require('electron');
const camera = document.querySelector('#camera');

const KeyEvent = {
  state: 1.1,

  init() {
    KeyEvent.getKeyboard()
  },

  getKeyboard() {
    document.addEventListener("keypress", event => {
      if (event.key === "=" && KeyEvent.state < 2.4) {
          camera.style.transform = `scale(${KeyEvent.state += 0.1})`;

          ipcRenderer.send('message-size', KeyEvent.state)
      }

      if (event.key === "-" && KeyEvent.state > 1.1) {
        camera.style.transform = `scale(${KeyEvent.state -= 0.1})`;
      }
    });
  },
};

export { KeyEvent };

