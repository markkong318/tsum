const BALL_SCORE = 10;

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        this.score = 0;

        GameEvent.on(GameEventType.SCORE_RESET, this.handleScoreReset, this);
        GameEvent.on(GameEventType.GAME_SUM, this.handleGameSum, this);
    },

    handleScoreReset: function() {
        this.score = 0;

        GameEvent.emit(GameEventType.SCORE_UPDATE, this.score);
    },

    handleGameSum: function({ balls }) {
        this.score += balls.length * BALL_SCORE;

        GameEvent.emit(GameEventType.SCORE_UPDATE, this.score);
    },
});