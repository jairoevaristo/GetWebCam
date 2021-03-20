const video = document.querySelector('#video');

const App = {

  init() {
    window.onload = App.getStrem
  },

  getStrem() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(strem => {
      video.srcObject = strem;
      video.play();
    })
    .catch(err => console.log(err));
  }
}

export { App };