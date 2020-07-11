cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        this.maskNode = this.node.getChildByName('Mask');
        this.textNode = this.node.getChildByName('Text');

        this.maskNode.on(cc.Node.EventType.TOUCH_START, () => {
        });

        this.maskNode.on(cc.Node.EventType.TOUCH_MOVE, () => {
        });

        this.maskNode.on(cc.Node.EventType.TOUCH_CANCEL, () => {
        });

        this.maskNode.on(cc.Node.EventType.TOUCH_END, () => {
            GameEvent.emit(GameEventType.GAME_RESUME);
        });
    },

    start: function() {
        this.tween = cc.tween(this.textNode)
            .then(
                cc.tween()
                    .to(0.5,{ opacity: 255})
                    .to(0.5,{ opacity: 0})
            )
            .repeatForever()
            .start();
    },
});