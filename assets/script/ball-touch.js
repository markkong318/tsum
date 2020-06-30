

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            GameEvent.emit(GameEventType.BALL_TOUCH_START, this.node);
        });


        this.node.on(cc.Node.EventType.TOUCH_CANCEL, () => {
            GameEvent.emit(GameEventType.BALL_TOUCH_END, this.node);
        });

        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            GameEvent.emit(GameEventType.BALL_TOUCH_END, this.node);
        });


        this.node.on(cc.Node.EventType.MOUSE_ENTER, () => {
            GameEvent.emit(GameEventType.BALL_MOVE_ENTER, this.node);
        });
    }
});