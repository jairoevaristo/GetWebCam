const camera = document.querySelector('#camera');
const video = document.querySelector('#video');
const loading = document.querySelector('#loading');

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
      camera.style.display = "none"
    } else {
      camera.style.display = "flex"
      loading.style.display = "none"
    }
  }
}

export { WebCam };