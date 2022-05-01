/* variables */

/* event listeners */

/* functions */

function createGrid(dimension) {
    /* reset(); need to reset the grid somehow*/
    createBoxes(dimension);
}

function createBoxes(dimension) {
    for (let i = 0; i < dimension; i++) {
        let newBox = document.createElement("box");
        newBox.className = `box`;
        newBox.innerHTML = `${i+1}`;
        newBox.addEventListener("click", colorChange);
        document.getElementById('container').appendChild(newBox)
    }
}

function colorChange() {
    
}