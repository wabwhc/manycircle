export default class ball{
    constructor(w, h, ctx, degree, x, y){
        this.width = w;
        this.height = h;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.breakX;
        this.breakY;
        this.degree = degree;
        this.vx = Math.cos(this.degree) * 2;
        this.vy = Math.sin(this.degree) * 2;
        this.fillStyle = "#" + Math.round(Math.random() * 0xffffff).toString(16);
        this.break = 0;
    }   

    location(){
        if(this.x + 10 >= this.width){
            this.vx *= -1;
        }else if(this.x -10 <= 0){
            this.vx *= -1;
        }
        if(this.y + 10 >= this.height){
            this.vy *= -1;
        }else if(this.y - 10 <= 0){
            this.vy *= -1;
        }
        this.x += this.vx;
        this.y += this.vy;
    }

    draw(){
        if(this.break === 0){
            this.ctx.beginPath();
            this.ctx.strokeStyle = this.fillStyle;
            this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
            this.ctx.stroke();
            this.ctx.closePath();
            this.location();
            this.breakX = this.x;
            this.breakY = this.y;
        }else{
            this.x = -20;
            this.y = -20;
            if(this.break >= 20){
                
            }else{ 
                this.break += 1;
                this.dispersion();
            }
            
        }
    }
    setDegree(degree){
        this.degree = degree;
        this.vx = Math.cos(this.degree) * 2;
        this.vy = Math.sin(this.degree) * 2;
        this.x += this.vx * 2;
        this.y += this.vy * 2;
    }

    dispersion(){
        for(let i = 0; i < 6; i++){
            this.ctx.beginPath();
            this.ctx.arc(this.breakX + Math.cos(((Math.PI * 2) / 6) * i) * this.break, this.breakY + Math.sin(((Math.PI * 2)/ 6) * i) * this.break, 5, 0, Math.PI * 2, false);
            this.ctx.strokeStyle = this.fillStyle;
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }
}