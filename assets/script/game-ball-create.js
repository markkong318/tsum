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
        const parent = cc.find('Canvas/Ball');

        const ball = this.balls[Math.floor(Math.random() * this.balls.length)];

        const node = cc.instantiate(ball);
        node.active = true;
        node.parent = parent;
    },

    handleCreate: function(count) {
        for (let i = 0; i < count; i++) {
            this.lottery();
        }
    },
});