cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad: function() {
        this.node.on('click', this.handleClick, this);
    },

    handleClick: function() {
        console.log('btn');

        const balls = cc.find('Canvas/Ball').children;

        for (let i = 0; i < balls.length; i++) {
            const ball = balls[i];
            const body = ball.getComponent(cc.RigidBody);

            body.applyForceToCenter(cc.v2(200000, 200000));

            console.log('apply')
        }
    }
});