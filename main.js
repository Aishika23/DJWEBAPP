song1="";
song2="";
leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;

function preload()
{
song1 = loadSound("music.mp3");
song2 = loadSound("sound.mp3");
}

function setup()
{
    canvas = createCanvas(500, 300);
    canvas.position(500,250)

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded());
    posenet.on('pose', gotPoses);
}

function modelLoaded() 
{
    console.log("Model Initialized")
}

function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = "+leftWristX+" Left Wrist Y = "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = "+rightWristX+" Right Wrist Y = "+rightWristY);
    }
}

function draw() 
{
    image(video, 0, 0, 500, 300);
}