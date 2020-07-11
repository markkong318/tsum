cc.Class({
    extends: cc.Component,

    properties: {
        balls: [cc.Node],
    },

    onLoad: function () {
        GameEvent.on(GameEventType.BALL_CREATE, this.handleBallCreate, this);
        GameEvent.on(GameEventType.BALL_CLEAN_ALL, this.handleCleanAll, this);
    },

    lottery: function() {
        const canvas = cc.find('Canvas');

        const parent = cc.find('Canvas/Ball');

        const ball = this.balls[Math.floor(Math.random() * this.balls.length)];

        const x = Math.random() * canvas.width - canvas.width / 2;

        const node = cc.instantiate(ball);
        node.x = x;
        node.active = true;
        node.parent = parent;
    },

    handleBallCreate: function(count) {
        for (let i = 0; i < count; i++) {
            this.lottery();
        }
    },

    handleCleanAll: function () {
        const balls = cc.find('Canvas/Ball').children;
        for (let i = 0; i < balls.length; i++) {
            balls[i].destroy();
        }
    },
});