// import fetch from "node-fetch";
// import fs from "fs";

// var fetch = require("node-fetch");
// var fs = require("fs");

// async function query(filename) {
//     const data = fs.readFileSync(filename);
//     const response = await fetch(
//         "https://api-inference.huggingface.co/models/google/vit-base-patch16-224",
//         {
//             headers: { Authorization: `Bearer ${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}` },
//             method: "POST",
//             body: data,
//         }
//     );
//     const result = await response.json();
//     return result;
// }
// query("cat.jpeg").then((response) => {
//     console.log(JSON.stringify(response));
// });
// var Output = document.getElementById("Output");
// var OutputLine = "<p>" + JSON.stringify(response) + "</p>";
// Output.innerHTML += OutputLine;


import Cropper from '/cropperjs/dist/cropper.esm.js';

var image = document.getElementById('imgcrop');

var cropper = new Cropper(image, {
    dragMode: 'move',
    aspectRatio: 1,
    viewMode: 2,
    guides: false,
    movable: false,
    rotatable: false,
    zoomable: false,
    scalable: false,
    zoomOnWheel: false,
    zoomOnTouch: false,
    cropBoxMovable: true,
    cropBoxResizable: false,
    toggleDragModeOnDblclick: false,
    restore: false,
    autoCropArea: 0.5,
    // ready(){
    //     console.log('ready');
    //     this.cropper.crop(event){
    //         console.log(event.detail.x);
    //         console.log(event.detail.y);
    //         console.log(event.detail.width);
    //         console.log(event.detail.height);
    //         console.log(event.detail.rotate);
    //         console.log(event.detail.scaleX);
    //         console.log(event.detail.scaleY);
    //     }
    // }
});


document.getElementById('cropbtn').addEventListener('click', function(){
    // alert("X: "+ cropper.getData().x+", Y: "+cropper.getData().y);
    document.getElementById('transfer').value =`{"model":"Completion","x":${cropper.getData().x},"y":${cropper.getData().y}}`;
});

