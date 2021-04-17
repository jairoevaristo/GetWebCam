function controllerWindow(win) {
  function toggle() {
    if (win.isVisible()) {
      win.hide()
    } else {
      win.show()
    }
  }

  function controllerSize(args) {
    let customSize = 200;
    let bigPosition;

    const controllers = {
      "zoomin": () => {
        const { x, y } = win.getBounds();

        const newDimesionWindow = customSize * 2.4;

        bigPosition = {
          x,
          y,
          width: newDimesionWindow,
          height: newDimesionWindow
        };

        win.setBounds(bigPosition, true);
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

    controllers[args]();
  }

  return {
    controllerSize,
    toggle
  }
}
module.exports = controllerWindow;