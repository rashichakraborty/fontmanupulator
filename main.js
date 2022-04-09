noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;



function setup(){
    canvas = createCanvas(400,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotposes);
}

function draw(){
    background("white");
    document.getElementById("size").innerHTML = "Width and height of the square will be = "+ difference + "px";
    fill("pink");
    stroke("red");
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log("Posenet is loaded");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY = " + noseY);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor( leftWristX - rightWristX);
        console.log("rightWristX =" + rightWristX + "leftWristX = " + leftWristX);
    }
}
    
