const RATE = 0.25;

cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function() {
        this.isChoosen = false;

        GameEvent.on(GameEventType.BALL_CHOOSE, this.handleChoose, this);
    },

    handleChoose: function(node) {
        if (node !== this.node.parent) {
            if (this.isChoosen) {
                this.node.scale -= RATE;
                this.isChoosen = false;
            }

            return;
        }


        this.node.scale += RATE;
        this.isChoosen = true;

    },
});