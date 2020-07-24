
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var snare = new Audio("sounds/snare.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        playSound(this.innerHTML);
        buttonAnimaion(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimaion(event.key);
});

function playSound(sound){
    switch(sound){
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            snare.play();
            break;
        case "k":
            crash.play();
            break;
        case "l":
            kick.play();
            break;
    }
}

function buttonAnimaion(pressedButton){
    console.log("pressed");
    var activeButton = document.querySelector("."+pressedButton);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 150);
}