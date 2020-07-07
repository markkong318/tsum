cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        window.GameEvent = new cc.EventTarget();

        window.GameEventType = {
            BALL_TOUCH_START: 'BALL_TOUCH_START',
            BALL_TOUCH_END: 'BALL_TOUCH_END',
            BALL_TOUCH_MOVE: 'BALL_TOUCH_MOVE',
            BALL_CHOOSE: 'BALL_CHOOSE',
            BALL_CREATE: 'BALL_CREATE',
            GAME_START: 'GAME_START',
            GAME_OVER: 'GAME_OVER',
        };

        window.NodeEventType = {
        };
    },
});