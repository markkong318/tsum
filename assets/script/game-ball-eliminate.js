const DISTANCE = 100;
const THRESHOLD = 2;

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function () {
        this.waiting = [];
        this.done = [];

        this.isTouched = false;


        GameEvent.on(GameEventType.BALL_TOUCH_START, this.handleTouchStart, this);
        GameEvent.on(GameEventType.BALL_TOUCH_END, this.handleTouchEnd, this);
        GameEvent.on(GameEventType.BALL_MOVE_ENTER, this.handleMoveEnter, this);
    },

    handleTouchStart(node) {
        if (this.waiting.length) {
            return;
        }

        this.isTouched = true;

        this.waiting.push(node)
    },

    handleTouchEnd(node) {
        if (!this.isTouched) {
            return;
        }

        this.done = [];

        for (let i = 0; i < this.waiting.length; i++) {
            this.done[i] = this.waiting[i];
        }

        this.waiting = [];

        this.isTouched = false;

        if (this.done.length > THRESHOLD) {
            for (let i = 0; i < this.done.length; i++) {
                this.done[i].destroy();
            }
        }
    },

    handleMoveEnter(node) {
        if (!this.isTouched) {
            return;
        }

        if (this.waiting.length > 1) {
            if (this.waiting[this.waiting.length - 2] === node) {
                this.waiting.splice(-1, 1);
                return;
            }
        }

        if (this.waiting[this.waiting.length - 1] === node) {
            return;
        }

        const ballAttr = node.getComponent('ball-attr');
        if (ballAttr.isDead) {
            return;
        }

        const p1 = this.waiting[this.waiting.length - 1].getPosition();
        const p2 = node.getPosition();

        const d = p1.sub(p2).mag();

        if (d > DISTANCE) {
            return;
        }
        
        this.waiting.push(node);

        console.log(this.waiting);
    },
});