var player;
var spawnPoints=[[15,1],[15,2],[2,2],[3,2],[4,2]]
class Game {
     constructor(){
        parr = new Array(spawnPoints.length)
        console.log(levels)
        data = levels.Levels.base
        if(!data.spawnPoints)data.spawnPoints =spawnPoints
        console.log(data.data)
        level = new Level(data.data,data.spawnPoints)
        player =new Player(1,level.data.length-2,level.data)
        for (let i = 0; i < level.spawnPoints.length; i++) {
            parr[i]=new Enemy(level.spawnPoints[i][1],level.spawnPoints[i][0],level.data)
            
        }
     }
     play(){
        var l=level.data.length
        var centery=gb*l/2
        var mappedValue=map(player.sprite.y,
          gb,
          gb*l,
          gb*5,
          gb*(l-5),true)
      
        camera.position.y =mappedValue
        
        var centerx=gb*level.data[0].length/2
        camera.x=map(player.sprite.x,gb,centerx*2,centerx/2,centerx*1.5)
        //showButtons();
        //console.log(frameRate())
          background(230,250,250)
            level.display()
         
          level.drawground()
          //e1.display();
          for (let i = 0; i < parr.length; i++) {
            parr[i].display()
        }
          level.drawWalls()
          player.display()
         strokeWeight(gb/10)
         stroke(255,250,0,200);
         noFill();
         ellipse((click.j+1)*gb,(click.i+1)*gb,gb*0.5,gb*0.5);
      
     }

}