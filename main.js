song=""
leftWristx=0;
leftWristy=0;
rightWristx=0;
rightWristy=0;
scoreleftwrist=0;
scorerightwrist=0;
function preload()
{
    song=loadSound("music.mp3");
    song2=loadSound("musicdemons.mpeg")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
     
    poseNet=ml5.poseNet(video,modalloaded);
}
function play(){
    song.play(musicdemons.mpeg);
}
function stop(){
    song.stop();
}
function draw(){
    image(video,0,0,600,500);

   fill('#FF0000');
   stroke("#FF0000");
   
if(scorerightwrist>0.2){
    circle(rightWristx,rightWristy,20);
    song.play(music.mp3);
}
if(scorerightwrist>0.2){
    circle(rightWristx,rightWristy,20);
    song.play(musicdemons.mpeg);
}
console.log(results)
scorerightwrist=results[0].pose.keypoints[10].score;
scoreleftwrist=results[0].pose.keypoints[9].score;
console.log("scoreleftwrist="+scoreleftwrist + "scorerightrwrist="+scorerightwrist);}
