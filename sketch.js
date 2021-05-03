
var database;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);

}

function draw(){

}

function writePosition(x,y){
     database.ref('ball/position').set({
         'x': position.x + x,
         'y': position.y + y
     })
}

function readPosition(data){
    position = data.val();
    
    hypnoticBall.x= position.x;
    hypnoticBall.y = position.y;
}

function showError(){
    console.log("Error writing to the database");
}