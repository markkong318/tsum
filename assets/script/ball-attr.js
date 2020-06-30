

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        this.type = '';
        this.isDead = false;
    },

    playDead: function() {
        this.node.destroy();
    },
});