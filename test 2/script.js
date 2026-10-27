let randomButton = document.querySelector("#randomize");
let sliderStacks = document.querySelector("#nb");
let sliderCircles = document.querySelector("#circles");
let sliderSquares = document.querySelector("#squares");
let stopButton = document.querySelector("#stop");

let stackValue = 0;
let circlesValue = 10;
let squaresValue = 10;
let isGenerating = false;

randomButton.addEventListener("click", function(){
    stackValue = Number(sliderStacks.value);
    circlesValue = Number(sliderCircles.value);
    squaresValue = Number(sliderSquares.value);
    isGenerating = true;
    background(255);
})

stopButton.addEventListener("click", function(){
    isGenerating = false;
})

function setup(){
    // function that runs only once
    createCanvas(800, 500);
    noStroke();
    rectMode(CENTER); // so that squares are drawn from their center, like circles are
    background(255);
}

function draw(){
    if (isGenerating) {
        generateStacks(stackValue);
    }
}

function generateStacks(numberOfStacks){
    for(let i = 0 ; i < numberOfStacks; i = i + 1){
        let randomX = random(0, 800);
        let randomY = random(0, 500);
        let randomC = color(random(0, 255), random(0, 255), random(0, 255));
        let randomS = random(0, 150)
        stackOfCircles(randomX, randomY, randomS, randomC, circlesValue);

        let randomSquareX = random(0, 800);
        let randomSquareY = random(0, 500);
        let randomSquareC = color(random(0, 255), random(0, 255), random(0, 255));
        let randomSquareS = random(0, 150)
        stackOfSquares(randomSquareX, randomSquareY, randomSquareS, randomSquareC, squaresValue);
    }
}

function stackOfCircles(posX, posY, size, color, numberOfCircles){
    fill(color)
    for(let i = 0; i < numberOfCircles; i = i + 1){
        circle(posX, posY+i*-2, size);
    }
}

function stackOfSquares(posX, posY, size, color, numberOfSquares){
    fill(color)
    for(let i = 0; i < numberOfSquares; i = i + 1){
        square(posX, posY+i*-2, size);
    }
}

