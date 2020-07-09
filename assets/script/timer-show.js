const SECOND = 60;

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        this.second = SECOND;

        this.label = this.node.getComponent(cc.Label);

        GameEvent.on(GameEventType.GAME_START, this.handleGameStart, this);
    },

    handleGameStart: function() {
        this.second = SECOND;

        this.schedule(this.handleCountDown, 1, this);
    },

    handleCountDown: function() {
        this.second -= 1;

        this.label.string = this.second;

        if (this.second === 0) {
            this.unschedule(this.handleCountDown, this);

            GameEvent.emit(GameEventType.GAME_OVER);
        }
    },
});