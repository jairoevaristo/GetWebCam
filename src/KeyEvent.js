const camera = document.querySelector('#camera');

const KeyEvent = {
  dimensions: {},

  getKeyboard() {
    document.addEventListener("keypress", event => {
      if (event.key === 'a') {
        KeyEvent.getDimensios(KeyEvent.dimensions);

        camera.style.width = (KeyEvent.dimensions.width + 10) + "px";
        camera.style.height = (KeyEvent.dimensions.height + 10) + "px";
      }

      if (event.key === 'b') {
        KeyEvent.getDimensios(KeyEvent.dimensions);

        camera.style.width = (KeyEvent.dimensions.width - 10) + "px";
        camera.style.height = (KeyEvent.dimensions.height - 10) + "px";
      }
    })
  },

  getDimensios({ width, height }) {
    KeyEvent.dimensions.width = camera.offsetWidth
    KeyEvent.dimensions.height = camera.offsetHeight
  }
};

export { KeyEvent };