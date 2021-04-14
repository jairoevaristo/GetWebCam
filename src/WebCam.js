const video = document.querySelector('#video');
const camera = document.querySelector('#camera');
const loading = document.querySelector('h1');

const WebCam = {
  state: true,
  
  init() {
    WebCam.loadCamera()
    WebCam.getStrem();
  },

  getStrem() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(strem => {
      video.srcObject = strem;
      video.play();
      
      WebCam.state = false;      
      WebCam.loadCamera();

    })
    .catch(err => console.log(err));
  },

  loadCamera() {
    if (WebCam.state) {
      video.style.display = "none"
    } else {
      video.style.display = "block"
      loading.style.display = "none"
    }
  }
}

export { WebCam };