

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            GameEvent.emit(GameEventType.BALL_TOUCH_START, this.node);
        });

        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            var touches = event.getTouches();
            var location = touches[0].getLocation();

            const canvas = cc.find('Canvas');
            const p1 = canvas.convertToNodeSpaceAR(location);

            const balls = cc.find('Canvas/Ball').children;
            for (let i = 0; i < balls.length; i++) {
                const ball = balls[i];
                const collider = ball.getComponent(cc.PhysicsCircleCollider);

                const p2 = ball.getPosition();

                const r = collider.radius * ball.scale;
                const d = p1.sub(p2).mag();

                if (d < r) {
                    GameEvent.emit(GameEventType.BALL_TOUCH_MOVE, ball);
                }
            }
        });

        this.node.on(cc.Node.EventType.TOUCH_CANCEL, () => {
            GameEvent.emit(GameEventType.BALL_TOUCH_END, this.node);
        });

        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            GameEvent.emit(GameEventType.BALL_TOUCH_END, this.node);
        });
    }
});