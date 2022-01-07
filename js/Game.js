class Game{
    constructor(){

    }

    play(){
        player = createSprite(400, 200,20,20);
        player.addImage(playerImg);
        
        text("Press R to reload", 50, 75);
        
        //bottle.setCollider("circle", 0, 0);
        //bottle.debug = true;
        //player.debug = true;

        this.handleBottles();
        this.handleBullets();
        this.mouseClicked();
         //this.handleControls();

         fill("Brown")
         textSize(35);
         text("CountDown :"+timer, 200,70);
 
         if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
             timer --;
           }
           if (timer == 0) {
             text("GAME OVER", width/2, height*0.7);
           }
 
    }

    handleBottles(){
        if (frameCount % 50 === 0){
            bottle = createSprite(random(50,750),random(50,350), 20, 20);
            bottle.addImage(bottleImg);
            bottle.scale = 0.05;
            
            bottle.lifetime = 150;           
            bottleGroup.add(bottle);
        }
        
    }

    mouseClicked(){
        for(var i=0;i<bottleGroup.length;i++){
            if(mousePressedOver(bottleGroup.get(i))) {
                score += 1;
                var shotBottle = bottleGroup.get(i)
                shotBottle.destroy()
                console.log("click")
            }
        }
    }

    handleBullets(){
        var bullets = 12;

        fill("black");
        textSize(20);
        text("Bullets: " +bullets, 50, 50);

        if(keyDown("r")){
            bullets = 12;
        }

        // if(bullet === 0){
            
        // }
    }

    // handleControls(){
    //      var cursor = createSprite(400, 200, 20, 20);
    //     //cursor.lifetime = 1;

    //     if(keyDown(UP_ARROW)){
    //         cursor.velocityY -= 5;
    //     }

    //     if(keyDown(DOWN_ARROW)){
    //         cursor.velocityY += 5;
    //     }

    //     if(keyDown(RIGHT_ARROW)){
    //         cursor.velocityX += 5;
    //     }

    //     if(keyDown(LEFT_ARROW)){
    //         cursor.velocityX -= 5;
    //     }

    //     // if(this.bottle.isTouching(cursor) && keyDown("space")){
    //     //     bottleGroup.destroyEach();
    //     //     score += 1;
    //     // }

    // }
    
    display(){
        this.play();
    }
}