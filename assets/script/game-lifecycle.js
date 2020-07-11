const BALL_INIT_COUNT = 40;

cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function() {
        GameEvent.on(GameEventType.GAME_READY, this.handleReady, this);
        GameEvent.on(GameEventType.GAME_START, this.handleStart, this);
        GameEvent.on(GameEventType.GAME_OVER, this.handleOver, this);
        GameEvent.on(GameEventType.GAME_PAUSE, this.handlePause, this);
        GameEvent.on(GameEventType.GAME_RESUME, this.handleResume, this);
    },

    handleReady: function() {
        const pause = cc.find('Canvas/Over');
        pause.active = false;

        GameEvent.emit(GameEventType.BALL_CLEAN_ALL);
        GameEvent.emit(GameEventType.SCORE_RESET);
        GameEvent.emit(GameEventType.TIMER_RESET);

        GameEvent.emit(GameEventType.GAME_START);
    },

    handleStart: function() {
        GameEvent.emit(GameEventType.BALL_CREATE, BALL_INIT_COUNT);
    },

    handleOver: function() {
        const pause = cc.find('Canvas/Over');
        pause.active = true;
    },

    handlePause: function() {
        const game = cc.find('Game');
        game.active = false;

        cc.director.getPhysicsManager().enabled = false;

        const pause = cc.find('Canvas/Pause');
        pause.active = true;
    },

    handleResume: function() {
        const game = cc.find('Game');
        game.active = true;

        cc.director.getPhysicsManager().enabled = true;

        const pause = cc.find('Canvas/Pause');
        pause.active = false;
    },
});