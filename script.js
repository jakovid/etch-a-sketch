/* variables */
let color = "black";
let down = false;

/* event listeners */

// board.click = colorBox;

/* functions */

function makeBoard(size) {
    let board = document.querySelector(".board");
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (i = 0; i < size*size; i++) {
        let box = document.createElement("div");
        box.className = 'box';
        box.addEventListener("mousedown", colorBox);
        box.addEventListener("click", colorBox)
        box.addEventListener("mouseover", colorBox)
        document.getElementById('board').appendChild(box);
    }
}

function changeColor(colorSelect) {
     color = colorSelect;
}

function setBoard(size) {
    if(size >= 2 && size <= 100) {
        makeBoard(size);
    } else {
        alert("size must be between 2 and 100");
    }
};

function reset() {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((div) => div.style.backgroundColor = 'white');
}

function colorBox(event){
    console.log('colorBox down:', down, event.type);

    if (event.type === "click"){
        down = !down;
    }

    if (event.type === "mouseup") {
        down = false;
    } 

    if (down) {
        if(color == 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

