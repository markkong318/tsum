cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        this.label = this.node.getComponent(cc.Label);

        GameEvent.on(GameEventType.SCORE_UPDATE, this.handleScoreUpdate, this);
    },

    handleScoreUpdate: function(score) {
        this.label.string = score;
    },
});