cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {

    },

    update: function () {
        const ctx = this.node.getComponent(cc.Graphics);

        ctx.clear();

        // ctx.moveTo(0, 0);
        // ctx.lineTo(200, 200);
        //
        // ctx.stroke();

        const node = cc.find('Game');
        const elim = node.getComponent('game-ball-eliminate');

        for (let i = 0; i < elim.waiting.length; i++) {
            console.log(elim.waiting[i].x +',' +  elim.waiting[i].y);
            ctx.circle(elim.waiting[i].x, elim.waiting[i].y, 8);
        }

        ctx.fill();
    }
});