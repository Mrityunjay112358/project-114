upperlipX = 0;
upperlipY = 0;
lipX = 0;
lipY = 0;
function preload(){
mustache = loadImage("https://i.postimg.cc/PrY4dHTW/mustahe.png");
lips=loadImage("https://i.postimg.cc/zf52sBhH/lips1.png");
}

function setup(){
    canvas= createCanvas(300,300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300,300);
     video.hide();
 
     posenet = ml5.poseNet(video,modelLoaded);
 posenet.on('pose',gotPoses);
 }
 
 function modelLoaded(){
     console.log("model loaded");
 }
  
 
 function draw(){
     image(video,0,0,300,300);
    // circle(noseX,noseY,20);
     image(mustache,upperlipX,upperlipY,50,30);
     //fill(255,0,0);
     //stroke(177, 252, 3);
     image(lips,lipX,lipY,40,20);
 }
 
 function take_snapshot(){
     save("Clown.png");
 }
 
 function gotPoses(results){
  
      if(results.length>0){
          console.log(results);
          upperlipX=results[0].pose.nose.x-20;
          console.log("mustacheX "+upperlipX);
          upperlipY=results[0].pose.nose.y;
          console.log("mustacheY "+upperlipY);
          lipX=results[0].pose.nose.x-20;
          lipY=results[0].pose.nose.y+23;
      }
  
 }