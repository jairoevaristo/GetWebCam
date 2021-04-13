import { WebCam } from './WebCam.js';
import { KeyEvent } from './KeyEvent.js';

const App = {
  init() {
    WebCam.init();
    KeyEvent.init();
  }
}

App.init()