cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function() {
        this.isClicked = false;

        this.node.on('click', this.handleClick, this);
    },

    handleClick: function() {
        if (this.isClicked === true) {
            return;
        }

        this.isClicked = true;

        const balls = cc.find('Canvas/Ball').children;

        for (let i = 0; i < balls.length; i++) {
            const ball = balls[i];
            const body = ball.getComponent(cc.RigidBody);

            const fx = Math.random() * 2 - 1;
            const fy = Math.random();

            const force = cc.v2(fx, fy).normalize().mul(200000);

            body.applyForceToCenter(force);

            body.applyTorque(100000);
        }

        this.scheduleOnce(() => {
            this.isClicked = false;
        }, 0.5);
    }
});