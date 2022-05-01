/* variables */


/* event listeners */



/* functions */

function setBoard(size) {
    let board = document.querySelector('.board');
    let boxes = document.querySelectorAll('div');
    /* this doesnt workkkk boxes.forEach((div) --> div.remove()); */
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for (i = 0; i < size*size; i++) {
        let box = document.createElement("div");
        box.className = 'box';
        box.innerHTML = `${i+1}`;
        document.getElementById('board').appendChild(box);
    }
}
