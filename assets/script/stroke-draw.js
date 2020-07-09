cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {

    },

    update: function () {
        const ctx = this.node.getComponent(cc.Graphics);

        ctx.clear();

        const node = cc.find('Game');
        const gameBallKill = node.getComponent('game-ball-kill');

        for (let i = 0; i < gameBallKill.waiting.length; i++) {
            ctx.circle(gameBallKill.waiting[i].x, gameBallKill.waiting[i].y, 12);

            ctx.fill();

            if (i !==  gameBallKill.waiting.length - 1) {
                const from = gameBallKill.waiting[i];
                const to = gameBallKill.waiting[i + 1];

                console.log(i);
                console.log(from);
                console.log(to);

                ctx.moveTo(from.x, from.y);
                ctx.lineTo(to.x, to.y);

                ctx.lineWidth = 5;
                ctx.strokeColor = cc.Color.WHITE;
                ctx.stroke();
            }
        }


    }
});