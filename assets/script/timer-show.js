cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        this.label = this.node.getComponent(cc.Label);

        GameEvent.on(GameEventType.TIMER_UPDATE, this.handleTimerUpdate, this);
    },

    handleTimerUpdate: function(second) {
        this.label.string = second;
    },
});