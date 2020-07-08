cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function() {
        this.initX = this.node.x;
        this.initY = this.node.y;

        this.label = this.node.getComponent(cc.Label);

        this.targetNode = null;

        GameEvent.on(GameEventType.BALL_SELECT, this.handleSelect, this);
        GameEvent.on(GameEventType.BALL_DESELECT, this.handleDeselect, this);
    },

    update: function() {
        if (!this.targetNode) {
            return;
        }

        this.node.x = this.targetNode.x;
        this.node.y = this.targetNode.y + 60;
    },

    handleSelect: function(node, idx) {
        this.targetNode = node;
        this.label.string = idx;
    },

    handleDeselect: function() {
        this.targetNode = null;

        this.node.x = this.initX;
        this.node.y = this.initY;
    },
});