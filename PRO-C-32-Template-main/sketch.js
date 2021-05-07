const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg = "sunrise1.png";

function preload() {
    // create getBackgroundImg( ) here

    getBackgroundImg();

    backgroundImg = loadImage(bg);

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
        }


    Engine.update(engine);

    // write code to display time in correct format here
    

    



}
async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON =  await response.json();
    console.log("Time", responseJSON);

    var datetime = responseJSON.datetime
    var hour = datetime.slice(11, 13);

     console.log(hour);
     
    if(hour >= 04&&hour <= 06){
     bg = "sprites/sunrise1.png";    
    }
    
    else if(hour >= 06&&hour <= 08){
        bg = "sprites/sunrise2.png";    
    }

    else if(hour >= 08&&hour <= 10){
        bg = "sprites/sunrise3.png";    
    }

    else if(hour >= 10&&hour <= 12){
        bg = "sprites/sunrise4.png";    
    }

    else if(hour >= 12&&hour <= 14){
        bg = "sprites/sunrise5.png";    

    }

    else if(hour >= 14&&hour <= 16){
        bg = "sprites/sunrise6.png";    
    }

    else if(hour >= 16&&hour <= 18){
        bg = "sprites/sunset7.png";    
    }

    else if(hour >= 18&&hour <= 20){
        bg = "sprites/sunset8.png";    
    }

    else if(hour >= 20&&hour <= 22){
        bg = "sprites/sunset9.png";    
    }

    else if(hour >= 22&&hour <= 24){
        bg = "sprites/sunset10.png";    
    }

    else if(hour >= 00&&hour <= 03){
        bg = "sprites/sunset11.png";    
    }

    
    else{
        bg = "sprites/sunset12.png";  
    }



    backgroundImg = addImage(bg);
    console.log(backgroundImg);

}


