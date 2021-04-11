import { WebCam } from './WebCam.js';
import { KeyEvent } from './KeyEvent.js';

const App = {
  init() {
    WebCam.getStrem();
    KeyEvent.getKeyboard()
  }
}

export { App };