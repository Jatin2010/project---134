
var status = false;
var objects = [];
var object_dector = "";

function setup() {
    canvas = createCanvas(380,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380);
    
    object_dector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : DETECTING THE OBJECTS";
}

function draw() {   
    image(video,0,0,380,380);
}

 function modelLoaded(){
    console.log('model loaded')
 }
    