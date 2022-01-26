
import Ball_array from './Ball_array.js';

class app{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        this.width = document.body.clientWidth;
        this.height = document.body.clientHeight;
        this.canvas.height = this.height;
        this.canvas.width = this.width;
        new Ball_array(this.width, this.height, this.ctx)
    }

}

window.onload = () => {
    new app();
}