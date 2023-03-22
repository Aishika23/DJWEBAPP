song1="";
song2="";
leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristX = 0;
Status = "";
scoreLeftWrist = 0;
scoreRightWrist = 0;
song = "";

function preload()
{
song1 = loadSound("music.mp3");
song2 = loadSound("sound.mp3");
}

function setup()
{
    canvas = createCanvas(400, 300);
    canvas.position(570,290);
    

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded());
    posenet.on('pose', gotPoses);
}

function modelLoaded() 
{
    console.log("Model Initialized");
}

function gotPoses(results) {
    if(results.length > 0)
    {
        Status = song1.isPlaying();

        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist = "+scoreRightWrist+" scoreLeftwrist = " +scoreLeftWrist);

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
    image(video, 0, 0, 400, 300);
    if (scoreLeftWrist >= 0.2) {
        circle(leftWristX, leftWristY, 20);
        song2.stop();
        if (Status == false) {
            song1.play();
            song = "song1";
        }
    }
    if (scoreRightWrist >= 0.2) {
        circle(rightWristX, rightWristY, 20);
        song1.stop();
        if (Status == true) {
            song1.play();
            song = "song2";
        }
    }
}