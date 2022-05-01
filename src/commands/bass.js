module.exports = {
    name: 'bass',
    description: 'send an accurate description of bass guitar',

    execute(message) {
        let random = Math.floor(Math.random() * 3) + 1;
        switch (random) {
            case (1) :
                message.channel.send(`« [La ligne de basse est] la base et la fondation de toutes les autres parties, car on les construit en se basant sur elle. »

                — Charles Masson 1669:31`);
            break;

            case (2) :
                message.channel.send(`« [La ligne de basse est] le terreau ou la fondation sur laquelle chaque composition musicale se doit d'être érigée. »

                — Christopher Simpson 1667:19`);
            break;

            case (3) :
                message.channel.send(`« [La ligne de basse] constitue la fondation de l'harmonie. »

                — Gioseffo Zarlino 1561:239, 1558:179`);
            break;
        }
    }

};