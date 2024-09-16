export class Column {
    constructor(x, y, height) {
        this.width = 10;
        this.x = x;
        this.y = y;
        this.height = height;
    }
    draw(context) {
        const left = this.x - this.width/2;
        const right = this.x + this.width/2;
        const bottom = this.y + this.height;
        
        context.beginPath();
        context.rect(left, this.y, this.width, this.height);
        context.stroke();
    }
}