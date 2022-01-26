import ball from "./ball.js";

export default class Ball_array{
    constructor(w, h, ctx){
        this.width = w;
        this.height = h;
        this.ctx = ctx;
        this.ballSize = 15;
        this.ballcount = 50;
        this.balls = [];
        this.makeBall();
        document.body.addEventListener('click', (e) => this.clickMake(e))
    }
    
    makeBall(){
        for(let i = 0; i < this.ballcount; i++){
            this.degree = Math.random()* 2 * Math.PI;
            this.x = Math.random() * (this.width - 20) + 10
            this.y = Math.random() * (this.height - 20) + 10
            this.balls[i] = new ball(this.width, this.height, this.ctx, this.degree, this.x, this.y, this.ballSize);
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
    clickMake(e){
        this.ballcount += 1;
        this.degree = Math.random()* 2 * Math.PI;
        this.x = Math.random() * (this.width - 20) + 10
        this.y = Math.random() * (this.height - 20) + 10
        this.balls[this.ballcount - 1] = new ball(this.width, this.height, this.ctx, this.degree, e.clientX, e.clientY, this.ballSize);
    }

    distance(x1, y1, x2, y2){
        this.dis = Math.sqrt((x1 - x2) ** 2 + (y2 - y1) ** 2)
        return this.dis;
    }

    drawBall(){
        this.ctx.clearRect(0,0,this.width, this.height);
        for(let i = 0; i < this.ballcount; i++){
            if(i !== 0){
                for(let j = 0; j < i; j++){
                    if(this.ballSize * 2 >= this.distance(this.balls[i].x, this.balls[i].y, this.balls[j].x, this.balls[j].y)){
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