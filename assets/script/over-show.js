cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        this.maskNode = this.node.getChildByName('Mask');

        this.node.on(cc.Node.EventType.TOUCH_START, () => {
        });

        this.node.on(cc.Node.EventType.TOUCH_MOVE, () => {
        });

        this.node.on(cc.Node.EventType.TOUCH_CANCEL, () => {
        });

        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            GameEvent.emit(GameEventType.GAME_READY);
        });
    },
});