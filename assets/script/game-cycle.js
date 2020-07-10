cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function() {
        GameEvent.on(GameEventType.GAME_START, this.handleStart, this);
        GameEvent.on(GameEventType.GAME_OVER, this.handleOver, this);
        GameEvent.on(GameEventType.GAME_PAUSE, this.handlePause, this);
        GameEvent.on(GameEventType.GAME_RESUME, this.handleResume, this);
    },

    handleStart: function() {
        const pause = cc.find('Canvas/Over');
        pause.active = false;
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

        const pauseText = cc.find('Canvas/Pause/Text');
        this.tween = cc.tween(pauseText)
            .then(
                cc.tween()
                    .to(0.5,{ opacity: 255})
                    .to(0.5,{ opacity: 0})
            )
            .repeatForever()
            .start();
    },

    handleResume: function() {
        const game = cc.find('Game');
        game.active = true;

        cc.director.getPhysicsManager().enabled = true;

        const pause = cc.find('Canvas/Pause');
        pause.active = false;

        this.tween.stop();
    },
});