var canvas,backgroundImg, gameState = 0, playerCount
var database, form, player, game

function setup(){
canvas = createCanvas(400,400)
firebase = firebase.database()
game = new Game()
game.getState()
game.start()
}

function draw(){

}
