const BALL_SCORE = 10;

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        this.score = 0;

        this.label = this.node.getComponent(cc.Label);

        GameEvent.on(GameEventType.GAME_READY, this.handleGameReady, this);
        GameEvent.on(GameEventType.BALL_KILL, this.handleBallKill, this);
    },

    handleGameReady: function() {
        this.score = 0;
        this.label.string = this.score;
    },

    handleBallKill: function(length) {
        this.score += length * BALL_SCORE;
        this.label.string = this.score;
    },
});