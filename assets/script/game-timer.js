const SECOND = 60;

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        this.second = SECOND;

        GameEvent.on(GameEventType.TIMER_RESET, this.handleTimerReset, this);
        GameEvent.on(GameEventType.GAME_START, this.handleGameStart, this);
    },

    handleTimerReset: function() {
        this.second = SECOND;

        GameEvent.emit(GameEventType.TIMER_UPDATE, this.second);
    },

    handleGameStart: function() {
        this.schedule(this.handleCountDown, 1, this);
    },

    handleCountDown: function() {
        this.second -= 1;

        GameEvent.emit(GameEventType.TIMER_UPDATE, this.second);

        if (this.second === 0) {
            this.unschedule(this.handleCountDown, this);

            this.scheduleOnce(() => {
                GameEvent.emit(GameEventType.GAME_OVER);
            }, 2);
        }
    },
});