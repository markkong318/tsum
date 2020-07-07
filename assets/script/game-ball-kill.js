const DISTANCE = 30;
const THRESHOLD = 2;

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function () {
        this.waiting = [];
        this.ballType = '';
        this.isTouched = false;

        GameEvent.on(GameEventType.BALL_TOUCH_START, this.handleTouchStart, this);
        GameEvent.on(GameEventType.BALL_TOUCH_END, this.handleTouchEnd, this);
        GameEvent.on(GameEventType.BALL_TOUCH_MOVE, this.handleMoveEnter, this);
    },

    handleTouchStart(node) {
        if (this.waiting.length) {
            return;
        }

        const ballAttr = node.getComponent('ball-attr');
        this.ballType = ballAttr.type;

        this.isTouched = true;

        this.waiting.push(node);
        GameEvent.emit(GameEventType.BALL_CHOOSE, node);
    },

    handleTouchEnd(node) {
        if (!this.isTouched) {
            return;
        }

        const done = [];

        for (let i = 0; i < this.waiting.length; i++) {
            done[i] = this.waiting[i];
        }

        this.waiting = [];

        this.isTouched = false;

        if (done.length > THRESHOLD) {
            for (let i = 0; i < done.length; i++) {
                const ballAttr = done[i].getComponent('ball-attr');

                this.scheduleOnce(() => {
                    ballAttr.playDead();
                }, 0.2 * i + 0.2);
            }

            this.scheduleOnce(() => {
                for (let i = 0; i < done.length; i++) {
                    done[i].destroy();
                }

                GameEvent.emit(GameEventType.BALL_CREATE, done.length);
            }, 0.2 * (done.length - 1) + 0.2 + 0.2);
        }
    },

    handleMoveEnter(node) {
        if (!this.isTouched) {
            return;
        }

        if (this.waiting.length > 1) {
            if (this.waiting[this.waiting.length - 2] === node) {
                this.waiting.splice(-1, 1);
                GameEvent.emit(GameEventType.BALL_CHOOSE, node);
                return;
            }
        }

        if (this.waiting.indexOf(node) > -1) {
            return;
        }

        const ballAttr = node.getComponent('ball-attr');
        if (ballAttr.isDead) {
            return;
        }

        if (ballAttr.type !== this.ballType) {
            return;
        }

        const n1 = this.waiting[this.waiting.length - 1];
        const n2 = node;

        const c1 = n1.getComponent(cc.PhysicsCircleCollider);
        const c2 = n2.getComponent(cc.PhysicsCircleCollider);

        const p1 = n1.getPosition();
        const p2 = n2.getPosition();

        const d = p1.sub(p2).mag() - c1.radius * n1.scale - c2.radius * n2.scale;

        console.log('d: ' + d);

        if (d > DISTANCE) {
            return;
        }

        console.log('add node');

        this.waiting.push(node);
        GameEvent.emit(GameEventType.BALL_CHOOSE, node);
    },
});