import { Game } from "../main";
import { Star } from "../objects/background/star";

export class BackgroundHandler {
    stars: Star[] = [];

    constructor(instance: Game) {
        for (let i = 0; i < instance.settings.numberOfStars; i++) {
            const x = Math.random() * instance.width;
            const y = Math.random() * instance.height;
            const star = new Star(instance, x, y);
            this.stars.push(star);
        }
    }

    tick(deltaTime: number): void {
        this.stars.forEach((o) => o.tick(deltaTime));
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.stars.forEach((o) => o.draw(ctx));
    }
}