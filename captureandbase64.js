/*
var video = document.querySelector("#video");
if (navigator.mediaDevices.getUserMedia) {
     navigator.mediaDevices.getUserMedia({ video: true })
       .then(function (stream) {
         video.srcObject = stream;
       })
       .catch(function (err0r) {
         console.log("Something went wrong!");
       });
}
*/

var resultb64 = "";
function capture() {
  var canvas = document.getElementById("canvas");
  var video = document.getElementById("video");

  canvas.style.display = "none";
  console.log(video.videoHeight);
  console.log(video.videoWidth);

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  canvas
    .getContext("2d")
    .drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
  resultb64 = canvas.toDataURL();
  //document.getElementById("printresult").innerHTML = canvas.toDataURL();
  //return data;
  console.log(resultb64);

  
  //const axios = require("axios").default;
  axios
    .post("http://127.0.0.1:8080/upload", {
      img: resultb64,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

}
document.getElementById("printresult").innerHTML = resultb64;
