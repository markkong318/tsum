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
            BALL_CREATE: 'BALL_CREATE',
            BALL_DESTROY: 'BALL_DESTROY',
            BALL_CLEAN_ALL: 'BALL_CLEAN_ALL',
            GAME_READY: 'GAME_READY',
            GAME_START: 'GAME_START',
            GAME_OVER: 'GAME_OVER',
            GAME_PAUSE: 'GAME_PAUSE',
            GAME_RESUME: 'GAME_RESUME',
            GAME_TIME_UP: 'GAME_TIME_UP',
            GAME_SUM: 'GAME_SUM',
            TIMER_RESET: 'TIMER_RESET',
            TIMER_UPDATE: 'TIMER_UPDATE',
            SCORE_RESET: 'SCORE_RESET',
            SCORE_UPDATE: 'SCORE_UPDATE',
        };

        window.NodeEventType = {
        };
    },

    start: function() {
        GameEvent.emit(GameEventType.GAME_READY);
    },
});