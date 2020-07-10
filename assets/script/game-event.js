cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        window.GameEvent = new cc.EventTarget();

        window.GameEventType = {
            BALL_TOUCH_START: 'BALL_TOUCH_START',
            BALL_TOUCH_END: 'BALL_TOUCH_END',
            BALL_TOUCH_MOVE: 'BALL_TOUCH_MOVE',
            BALL_SELECT: 'BALL_SELECT',
            BALL_DESELECT: 'BALL_DESELECT',
            BALL_KILL: 'BALL_KILL',
            GAME_READY: 'GAME_READY',
            GAME_START: 'GAME_START',
            GAME_OVER: 'GAME_OVER',
            GAME_PAUSE: 'GAME_PAUSE',
            GAME_RESUME: 'GAME_RESUME',
            TIMER_UPDATE: 'TIMER_UPDATE',
            SCORE_UPDATE: 'SCORE_UPDATE',
        };

        window.NodeEventType = {
        };
    },

    start: function() {
        GameEvent.emit(GameEventType.GAME_START);
    },
});