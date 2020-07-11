cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function() {
        this.node.on('click', this.handleClick, this);
    },

    handleClick: function() {
        GameEvent.emit(GameEventType.GAME_PAUSE);
    },
});