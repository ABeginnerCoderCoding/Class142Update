music1 = "";
music2 = "";
leftWirstX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload(){
    music1 = loadSound("mp3-1.mp3");
    music2 = loadSound("mp3-2.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)  ;
}
function modelLoaded(){
    console.log('poseNet is initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWirstX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWirstX + " leftWristY = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
    }
}
function draw(){
    image(video,0,0,600,500);
}