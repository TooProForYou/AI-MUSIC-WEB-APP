song_1 = " ";
song_2 = " ";

function preload()
{
    song = loadSound("song1.mp3")
    song = loadSound("song2.mp3")
}

function draw() {
      image(video, 0, 0, 600, 500);

      fill("#FF0000");
      stroke("#FF0000");
  }

function play()
{
    song.play();
}

function stop()
{
    song.stop();
}


function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
