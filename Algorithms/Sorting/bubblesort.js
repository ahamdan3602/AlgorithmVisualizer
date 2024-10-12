import { bubbleSort } from "./sorting.js";

const stage = document.getElementById('stage');

let min_bars = 10;
const num_bars = document.getElementById('number-bars');
stage.style.width = `${num_bars} * 40px`;

const gen_btn = document.getElementById('new-bars')
const solve = document.getElementById('solve-btn');
const stop = document.getElementById('stop-btn');

let isPaused = false;
let timeoutid;



let bars =[];
let new_divs = [];
generate();
generateSquares();
function generate() {
    stage.innerHTML = '';
    new_divs = [];
    bars = Array(min_bars).fill(0).map(_ => {
        return {
            width: 20,
            height: Math.floor(Math.random() * 150) + 1 
        }
    })
    
    for (let i = 0; i < bars.length;i++) {
        const new_bar = document.createElement('div');
        new_bar.style.width = `${bars[i].width}px`;
        new_bar.style.height = `${bars[i].height}px`;
        new_bar.style.left = `${5 + i * 30}px`;
        bars[i] = {...bars[i], position: i};
        new_bar.classList.add('bar');
        new_divs.push(new_bar);
        stage.append(new_bar);
        
    };
    console.log(num_bars.value);
}


function generateSquares() {
    const squaresContainer = document.querySelector('.squares-container');
    squaresContainer.innerHTML = ''; // Clear existing squares

    bars.forEach(bar => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = bar.height; // Display the array value
        squaresContainer.appendChild(square);
    });
}
function show_bars(indices = []) {
    const squares = document.querySelectorAll('.square');
    for (let i = 0; i < bars.length; i++) {
        new_divs[i].style.height = `${bars[i].height}px`;
        new_divs[i].style.backgroundColor = ''; 
        squares[i].style.backgroundColor = '';
        if (indices.includes(i)) {
            new_divs[i].style.backgroundColor = 'green';
            squares[i].style.backgroundColor = 'green';
        }
        if (squares[i]) {
            squares[i].textContent = bars[i].height; 
        }  
    }
}


function finish() {
    const squares = document.querySelectorAll('.square');
    for (let i = 0; i < bars.length; i++) {
        new_divs[i].style.backgroundColor = '';
        squares[i].style.backgroundColor = '';
 
    }
}
function play() {
    const copy = [...bars];
    const swaps = bubbleSort(copy);
    animate(swaps);
}

function animate(swaps) {
    if (!isPaused) {
        if (swaps.length == 0) {
            finish();
            return;
        }
        const [i, j] = swaps.shift(); // Take out the first swap
        [bars[i], bars[j]] = [bars[j], bars[i]]; // Swap bars in the array
        show_bars([i, j]); 

        timeoutid = setTimeout(() => {
            animate(swaps); 
        }, 450);
    }
}
function start() {
    isPaused = false;
    play();
}

function pause() {
    isPaused = true;
    clearTimeout(timeoutid)
}


gen_btn.addEventListener('click', () => {
    min_bars  = parseInt(num_bars.value, 10)
    stage.style.width = `${min_bars * 30}px`;
    generateSquares();
    generate();

})

solve.addEventListener('click', () => {
    start();
});

stop.addEventListener('click', () => {
    pause();
})



