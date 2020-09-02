var data= [
  [1,1,1,1,1,1,0,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,0,1,1,0,0,1,0,1],
  [1,0,1,1,1,1,0,1,1,1,1], 
  [1,0,1,0,0,0,0,0,1,0,1], 
  [1,0,1,1,1,0,0,1,1,0,1], 
  [1,0,1,0,1,0,0,0,1,1,1], 
  [1,0,1,0,0,0,0,0,0,0,1], 
  [1,0,1,0,1,1,0,1,1,0,1], 
  [1,0,0,0,1,0,0,0,0,0,1], 
  [1,1,1,0,1,0,0,1,1,0,1], 
  [1,0,0,0,0,0,0,0,0,0,1], 
  [1,0,1,0,0,1,0,1,0,0,1], 
  [1,0,1,0,0,0,0,1,0,0,1], 
  [1,0,1,1,1,0,0,1,1,0,1], 
  [1,0,0,0,0,0,0,0,0,0,1], 
  [1,0,1,1,1,1,0,1,1,1,1],
  [1,0,1,1,1,1,1,1,1,1,1],
 ] 
 var activeBlock=10
 var game;
 // var spawnPoints=[[1,18],[6,]]
  var gb=75,database
var level,parr,e1,example_img;
function preload(){
 //example_img=loadImage("Images\Top_Down_Survivor\trail.png")
}
function setup(){
  
  //database =firebase.database();
  createCanvas(windowWidth,windowHeight);
  console.log(width,height)
  gb=map(width,1000,10000,150,1500)
  gb=int(gb/20)*20
   console.log(width,height,gb)
  //createEditor()
  // var ref;
// var arrRef=database.ref('/')
//  arrRef.on("value",(dt)=>{
//    console.log(dt.val()+"inside ")
//  ref = dt.val();
// })

  //e1= new Enemy(1,17,level.data)
  game=new Game()
}
var click={i:0,j:0}
function draw(){
  // var l=level.data.length
  // var centery=gb*l/2
  // var mappedValue=map(player.sprite.y,
  //   gb,
  //   gb*l,
  //   gb*5,
  //   gb*(l-5),true)

  // camera.position.y =mappedValue
  
  // var centerx=gb*level.data[0].length/2
  // camera.x=map(player.sprite.x,gb,centerx*2,centerx/2,centerx*1.5)
  // //showButtons();
  // //console.log(frameRate())
  //   background(230,250,250)
  //     level.display()
   
  //   level.drawground()
  //   //e1.display();
  //   for (let i = 0; i < parr.length; i++) {
  //     parr[i].display()
  // }
  //   level.drawWalls()
  //   player.display()
  //  strokeWeight(gb/10)
  //  stroke(255,250,0,200);
  //  noFill();
  //  ellipse((click.j+1)*gb,(click.i+1)*gb,gb*0.5,gb*0.5);
game.play()
}
function mouseClicked(){ 
   if(edit){ var i=gi(mouseX, mouseY)
    level.data[i.y][i.x]=activeBlock
  }

  for (let i = 0; i < parr.length; i++) {
  
   // parr[i].moveToPos()
  }
  
player.moveToPos()
  console.log("mouseCliked")
  }
