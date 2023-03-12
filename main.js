song1="";
song2="";

function preload()
{
song1 = loadSound("music.mp3");
song2 = loadSound("sound.mp3");
}

function setup()
{
    canvas = createCanvas(600, 600);
    canvas.position(560, 150);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 600);
}