cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function () {
        const parent = cc.find('Canvas/Ball');
        const ball = cc.find('Library/Ball');

        for (let i = 0; i < 30; i++) {
            const node = cc.instantiate(ball);
            node.active = true;
            node.parent = parent;
        }

    }
});