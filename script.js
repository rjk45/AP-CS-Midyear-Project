const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
function jump() {
    if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function (){
        dino.classList.remove('jump');
    }, 300)
}
}

let isAlive = setInterval(function () {
    //dino pos + obstacles

    //position of dinosaur on y axis
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    
    //position of cactus on x axis
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    //collisions --> is alive set to false
    //if dino is 50 px, then uses that measurment to see contact with the cactus
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop <= 140){ //check if statement to makes sure
        alert("Game Over!"); //add score and time here at the end too
    }
}, 10)

document.addEventListener("keydown", function(event) {
    jump();
});