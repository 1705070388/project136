status = "";
video = "";
function setup() {
    canvas = createCanvas(280, 230);
    canvas.position(500, 150);
    video = createCapture(VIDEO);
    video.hide();
}
function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
    objectName = document.getElementById("objectName").value;
}
function modelLoaded(){
    console.log("COCO Ssd is initialized");
    status = true;
}
function draw() {
    image(video, 0, 0, 280, 230);
}
function gotResults(error, results) {
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
    
}