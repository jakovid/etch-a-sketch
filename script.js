/* variables */
let color = "black";

/* event listeners */



/* functions */

function makeBoard(size) {
    let board = document.querySelector(".board");
    let boxes = document.querySelectorAll(".box");
    boxes.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (i = 0; i < size*size; i++) {
        let box = document.createElement("div");
        box.className = 'box';
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = `${color}`;
        });
        document.getElementById('board').appendChild(box);
    }
}

function changeColor(color) {
    let color = `${color}`;
}

function setBoard(size) {
    if(size >= 2 && size <= 100) {
        makeBoard(size);
    } else {
        console.log("size must be between 2 and 100");
    }
};

function reset() {
    let boxes = document.querySelectorAll(".box");
    boxes.style.backgroundColor = "white";
}