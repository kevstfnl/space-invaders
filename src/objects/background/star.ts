import { Game } from "../../main";

export class Star {
    protected instance: Game;
    protected x: number;
    protected y: number;
    protected speed: number;
    protected size: number;

    constructor(instance: Game, x: number, y: number) {
        this.instance = instance;
        this.x = x;
        this.y = y;

        let sharedRandom: number = Math.random() * 2.5;
        this.speed = sharedRandom * 300;
        this.size = sharedRandom;
    }

    public tick(deltaTime: number): void {
        this.y += this.speed * deltaTime;
        if (this.y > this.instance.height) {
            this.y = 0;
        }
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        for (let i = 0; i < 10; i++) {
            let divider = (i * 3);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.beginPath();
            ctx.arc(this.x, this.y - divider, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }
    }
}