const BALL_INIT_COUNT = 40;

cc.Class({
    extends: cc.Component,

    properties: {
        balls: [cc.Node],
    },

    onLoad: function () {
        this.handleCreate(BALL_INIT_COUNT);

        GameEvent.on(GameEventType.BALL_CREATE, this.handleCreate, this);
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

    handleCreate: function(count) {
        for (let i = 0; i < count; i++) {
            this.lottery();
        }
    },
});