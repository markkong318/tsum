const RATE = 0.25;

cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function() {
        this.initX = this.node.x;
        this.initY = this.node.y;

        this.sprite = this.node.getComponent(cc.Sprite);

        this.targetNode = null;

        GameEvent.on(GameEventType.BALL_SELECT, this.handleSelect, this);
        GameEvent.on(GameEventType.BALL_DESELECT, this.handleDeselect, this);
    },

    update: function() {
        if (!this.targetNode) {
            return;
        }

        this.node.x = this.targetNode.x;
        this.node.y = this.targetNode.y;
        this.node.rotation = this.targetNode.rotation;
    },

    handleSelect: function(node) {
        const sprite = node.getComponent(cc.Sprite);

        this.sprite.spriteFrame = sprite.spriteFrame;

        this.targetNode = node;

        this.node.scale = node.scale + RATE;
    },

    handleDeselect: function() {
        this.targetNode = null;

        this.node.x = this.initX;
        this.node.y = this.initY;
    },
});