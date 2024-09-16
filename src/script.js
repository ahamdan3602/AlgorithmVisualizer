import {Column} from './column.js'

myCanvas.width = 500;
myCanvas.height = 300;

const n = 20; // num of elements
const array = [];

const stringHeight = myCanvas.height*0.45;

for (let i = 0; i < n;i++) {
    array[i]=Math.random();
}
const col = [];
const margin = 30;
const avaWidth = myCanvas.width - margin*2;
const padding = avaWidth/n+margin;



//context
const context = myCanvas.getContext("2d");

context.beginPath();

context.moveTo(0, stringHeight);
context.lineTo(myCanvas.width, stringHeight);
context.stroke();

for (let i = 0; i<array.length;i++) {
    const x = i * padding+spacing/2+margin;
    const y = stringHeight;
    const height = myCanvas.height*0.4 * array[i];
    col[i] = new Column(x, y, height);
    col[i].draw(context);
}