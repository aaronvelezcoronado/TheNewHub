const container = document.querySelector('.content-container')

window.onload = function () {
    createGrid(16)
    paint()
    resetBoard()
    randomColorBtn()
    colorPick()
    eraser()
}

function createGrid(s) {
    for (i = 0; i < s; i++) {
        const column = document.createElement('div')
        column.classList.add('columnstyle')
        container.appendChild(column)
        for (let j = 0; j < s; j++) {
            const row = document.createElement('div')
            row.classList.add('rows')
            column.appendChild(row)
        }
    }
}




function paint(color) {

    const squares = document.querySelectorAll('.rows')
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color
        })

    });

}






function resetBoard() {
    const resetBtn = document.querySelector('.resetbtn')
    resetBtn.addEventListener('click', () => {
        const grid = document.querySelector('.content-container')
        const squares = grid.querySelectorAll('div');
        squares.forEach((div) => div.remove());
        createGrid(16)
        paint()
        randomColorBtn()


    })


}


function userChangeSize(input) {

    if (input >= 2 || input <= 100) {
        const grid = document.querySelector('.content-container')
        const squares = grid.querySelectorAll('div');
        squares.forEach((div) => div.remove());
        createGrid(input)
        paint()
    }
}

function randomColorBtn() {



    const rndColorBtn = document.querySelector('#randomColor')
    rndColorBtn.addEventListener('click', () => {
        const squares = document.querySelectorAll('.rows')
        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                square.style.backgroundColor = '#' + randomColor
            })

        });


    })
}


function colorPick() {
    const colorPicker = document.querySelector('.picker');
    colorPicker.addEventListener('input', function () {
        paint(colorPicker.value)
    });

}

function eraser() {
    const eraser = document.querySelector('.eraser');
    eraser.addEventListener('click', () => {
        const squares = document.querySelectorAll('.rows')
        squares.forEach((square) => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'white'
            })
        })

    })


}