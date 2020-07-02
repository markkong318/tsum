cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        window.GameEvent = new cc.EventTarget();

        window.GameEventType = {
            BALL_TOUCH_START: 'BALL_TOUCH_START',
            BALL_TOUCH_END: 'BALL_TOUCH_END',
            BALL_TOUCH_MOVE: 'BALL_TOUCH_MOVE',
            BALL_MOVE_ENTER: 'BALL_MOVE_ENTER',
            BALL_MOVE_EXIT: 'BALL_MOVE_EXIT',
            GAME_START: 'GAME_START',
            GAME_OVER: 'GAME_OVER',
        };

        window.NodeEventType = {
        };
    },
});