const RATE = 0.25;

cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function() {
        this.isSelected = false;

        GameEvent.on(GameEventType.BALL_SELECT, this.handleSelect, this);
        GameEvent.on(GameEventType.BALL_DESELECT, this.handleDeselect, this);
    },

    handleSelect: function(node) {
        if (node !== this.node.parent) {
            if (this.isSelected) {
                this.node.scale -= RATE;
                this.isSelected = false;
            }

            return;
        }

        this.node.scale += RATE;
        this.isSelected = true;
    },

    handleDeselect: function() {
        if (!this.isSelected) {
            return;
        }

        this.node.scale -= RATE;
        this.isSelected = false;
    },
});