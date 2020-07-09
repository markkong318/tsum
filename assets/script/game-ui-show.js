const BALL_AREA_HEIGHT = 200;

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        const top = cc.find('Canvas/Top');
        const bottom = cc.find('Canvas/Bottom');

        top.y = BALL_AREA_HEIGHT / 2 + top.height / 2;
        bottom.y = - BALL_AREA_HEIGHT / 2 - bottom.height / 2;
    },
});