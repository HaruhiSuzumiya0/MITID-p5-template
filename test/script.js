let randomButton = document.querySelector("#randomize");
let sliderStacks = document.querySelector("#nb");


randomButton.addEventListener("click", function(){
    let newStackValue = sliderStacks.value
    background(73);
    generateStacks(newStackValue);
})

function setup(){
    // function that runs only once
    createCanvas(800, 500);
    noStroke();
    background(73);
}

function draw(){
    // function that runs repeatedly
    
}

function generateStacks(numberOfStacks){
    for(let i = 0 ; i < numberOfStacks; i = i + 1){
        let randomX = random(0, 800);
        let randomY = random(0, 500);
        let randomC = random(0, 255);
        stackOfCircles(randomX, randomY, randomC);
    }
}

function stackOfCircles(posX, posY, color){
    for(let i = 0; i < 10; i = i + 1){
        circle(posX, posY+i*-2, 50);
    }
    fill(color)
}

