lovely = "Lovely(PagalWorld).mp3"
enemy = "Enemy-MostMags.mp3"
leftWristX = 0
leftWristY = 0
rightWristX = 0
rightWristY = 0
leftWristScore = 0
leftWristSong = ""

function preload(){
    song1 = loadSound("Lovely(PagalWorld).mp3");
    song2 = loadSound("Enemy-MostMags.mp3")
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide;
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
    circle(leftWristX,leftWristY,20);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}