const RATE = 0.25;

cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function() {
        this.label = this.node.getComponent(cc.Label);

        GameEvent.on(GameEventType.BALL_SELECT, this.handleSelect, this);
        GameEvent.on(GameEventType.BALL_DESELECT, this.handleDeselect, this);
    },

    handleSelect: function(node) {
        const poss = node.getPosition();
    },

    handleDeselect: function() {
    },
});