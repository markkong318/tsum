

cc.Class({
    extends: cc.Component,

    properties: {
        type: ''
    },

    onLoad: function() {
        this.isDead = false;
    },

    playDead: function() {
        this.node.opacity = 0;
    },
});