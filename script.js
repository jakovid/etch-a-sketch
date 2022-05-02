/* variables */


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
        box.innerHTML = `${i+1}`;
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
        });
        document.getElementById('board').appendChild(box);
    }
}

function setBoard(size) {
    if(size >= 2 && size <= 100) {
        makeBoard(size);
    } else {
        console.log("size must be between 2 and 100");
    }
};
