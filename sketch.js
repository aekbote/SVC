
 var play,about,info
 var mangoImg,mango
 var pizzaImg,pizza
 var waitimg
 var gameState="wait"

 function preload(){
    
    mangoImg = loadImage("/assets/mango.png");
    pizzaImg = loadImage("/assets/pizza.png");
    waitimg=loadImage("/assets/splashscreen.webp")
    carrotImg = loadImage("/assets/carrot.png");
    chipsImg = loadImage("/assets/chips.png");
    donutImg = loadImage("/assets/donut.png");
    orangeImg = loadImage("/assets/orange.png");
    //aboutpop
    
}

function setup(){
    createCanvas(windowWidth,windowHeight)
  
    // all the buttons
    play=createImg("assets/play.png")
    play.position(width/4,height-200)
    play.size(250,250)
    
    how=createImg("assets/how.png")
    how.position((width/4+width/2),height-150)
    how.size(250,250)
    
    
    about=createImg("assets/about.png")
    about.position((width/2),height-200)
    about.size(250,250)
    

    home=createButton("Home")
    home.position((width/2),height-200)
    home.hide()

    aboutpop=createSprite(width/2,height/2)
    aboutpop.visible=false

    howpop=createSprite(width/2,height/2)
    howpop.visible=false

/* home=createImg("assets/about.png")
home.position((width/2)-100,height-200)
home.size(250,250)*/

// healthy food sprites
/*mango= createSprite(100,100)
mango.addImage(mangoImg)

pizza= createSprite(100,200)
pizza.addImage(pizzaImg)

orange= createSprite(100,210)
orange.addImage(orangeImg)

donut= createSprite(100,240)
donut.addImage(donutImg)

chips= createSprite(100,280)
chips.addImage(chipsImg)

carrot= createSprite(100,400)
carrot.addImage(carrotImg)*/



}

function draw(){
    if(gameState==="waitstate"){
background(waitimg)

about.show()
play.show()
how.show()
home.hide()
aboutpop.visible=false
howpop.visible=false

}

textSize(30);
text("Keep Fit",900,450)

if(play.mousePressed(()=>{
    gameState="playstate"
about.hide()
play.hide()
how.hide()
home.show()
aboutpop.visible=false
howpop.visible=false

}))
   
if(home.mousePressed(()=>{
    gameState="waitstate"
        
    
}))
 



if(how.mousePressed(()=>{
    gameState="howstate"
    home.show()
    about.hide()
    play.hide()
    how.hide()
    aboutpop.visible=false
    howpop.visible=true

}))

if(about.mousePressed(()=>{
    gameState="aboutstate"
        
    home.show()
    about.hide()
    play.hide()
    how.hide()
    aboutpop.visible=true
    howpop.visible=false

}))
    


if(gameState==="playstate"){
    background(0)
}


if(gameState==="howstate"){
    background(255)
}
if(gameState==="aboutstate"){
    background(180)
}




drawSprites()
}