import { selectionSort } from "./sorting.js";

const stage = document.getElementById('stage');

let min_bars = 10;
const num_bars = document.getElementById('number-bars');
stage.style.width = `${num_bars} * 40px`;

const gen_btn = document.getElementById('new-bars')
const solve = document.getElementById('solve-btn');
console.log(solve);



let bars =[];
let new_divs = [];
generate();
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
function show_bars(indices = []) {
    for (let i = 0; i < bars.length; i++) {
        new_divs[i].style.height = `${bars[i].height}px`;
        new_divs[i].style.backgroundColor = ''; 
        if (indices.includes(i)) {
            new_divs[i].style.backgroundColor = 'green'; 
        }
    }
}
function play() {
    const copy = [...bars];
    const swaps = selectionSort(copy);
    animate(swaps);
}

function animate(swaps) {
    if (swaps.length == 0) {
        return;
    }
    const [i, j] = swaps.shift(); // Take out the first swap
    [bars[i], bars[j]] = [bars[j], bars[i]]; // Swap bars in the array
    show_bars([i, j]); 

    setTimeout(() => {
        animate(swaps); 
    }, 400);
}


gen_btn.addEventListener('click', () => {
    min_bars  = parseInt(num_bars.value, 10)

    stage.style.width = `${min_bars * 30}px`;
    generate();
})

solve.addEventListener('click', () => {
    play();
});
