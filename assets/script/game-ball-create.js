cc.Class({
    extends: cc.Component,

    properties: {
        balls: [cc.Node],
    },

    onLoad: function () {
        const parent = cc.find('Canvas/Ball');

        for (let i = 0; i < 30; i++) {
            const ball = this.balls[Math.floor(Math.random() * this.balls.length)];

            const node = cc.instantiate(ball);
            node.active = true;
            node.parent = parent;
        }

    }
});