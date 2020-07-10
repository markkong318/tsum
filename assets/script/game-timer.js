const SECOND = 10;

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        this.second = SECOND;

        GameEvent.on(GameEventType.GAME_START, this.handleGameStart, this);
    },

    handleGameStart: function() {
        this.second = SECOND;

        this.schedule(this.handleCountDown, 1, this);
    },

    handleCountDown: function() {
        this.second -= 1;

        GameEvent.emit(GameEventType.TIMER_UPDATE, this.second);

        if (this.second === 0) {
            this.unschedule(this.handleCountDown, this);

            GameEvent.emit(GameEventType.GAME_OVER);
        }
    },
});