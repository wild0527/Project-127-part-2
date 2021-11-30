music1 = "";
music2 = "";

function preload() {
    song1 = loadSong("music.mp3");
    song2 = loadSong("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = create(VIDEO);
    video.hide();

    posNet = ml5.posNet(video, modelLoaded);
    posNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("model is initialized");
}

function draw() {
    image(video, 0, 0, 600, 500);
}