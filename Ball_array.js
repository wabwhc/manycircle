import ball from "./ball.js";

export default class Ball_array{
    constructor(w, h, ctx){
        this.w = w;
        this.h = h;
        this.ctx = ctx;
        this.ballcount = 100;
        this.balls = [];
        this.makeBall();
    }
    
    makeBall(){
        for(let i = 0; i < this.ballcount; i++){
            this.degree = Math.random()* 2 * Math.PI;
            this.x = Math.random() * (this.w - 20) + 10
            this.y = Math.random() * (this.h - 20) + 10
            this.balls[i] = new ball(this.w, this.h, this.ctx, this.degree, this.x, this.y);
            if(i !== 0){
                for(let j = 0; j < i; j++){
                    if(20 >= this.distance(this.balls[i].x, this.balls[i].y, this.balls[j].x, this.balls[j].y)){
                        i -= 1;
                    }
                }
            }
        }
        this.drawBall();
    }

    distance(x1, y1, x2, y2){
        this.dis = Math.sqrt((x1 - x2) ** 2 + (y2 - y1) ** 2)
        return this.dis;
    }
    
    drawBall(){
        this.ctx.clearRect(0,0,this.w, this.h);
        for(let i = 0; i < this.ballcount; i++){
            if(i !== 0){
                for(let j = 0; j < i; j++){
                    if(20 >= this.distance(this.balls[i].x, this.balls[i].y, this.balls[j].x, this.balls[j].y)){
                        if(this.balls[i].break === 0){
                            this.balls[i].break = 1;
                        }
                        if(this.balls[j].break === 0){
                            this.balls[j].break = 1;
                        }
                    }
                }
            }
            this.balls[i].draw();
        }
        requestAnimationFrame(this.drawBall.bind(this));
    }



}