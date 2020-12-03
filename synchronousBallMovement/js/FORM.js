class Form {

    constructor(){


        
    }
display(){

var title= createElement('h2');
title.html("CAR RACING GAME");
title.position(200,150,30);

var input=createInput("enter your name")
input.position(300,200);

var button=createButton("click to play")
button.position(350,250)

var greeting=createElement('h3')



button.mousePressed(function(){
input.hide();
button.hide();

var name= input.value();

playerCount+=1;
player.update(name);
player.updateCount(playerCount);

greeting.html("HELLO " + name)
greeting.position(400,250) 


})

}
}