const grid = document.querySelector('.grid')
const blockWidth = 100;
const blickHeight = 20;

class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis, bottomWidth, yAxis]
    }
}


function addBlock() {
const block = document.createElement('div');
block.classList.add('block');
block.style.left = "100px";
block.style.bottom = '50px';
grid.appendChild(block)
}

addBlock()
