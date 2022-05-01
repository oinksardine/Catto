module.exports = {
    name: 'bestiole',
    description: 'Send a random picture from img folder',

    execute(message) {
        try {
            const fs = require('fs');
            var files = fs.readdirSync('./src/img/bestioles/');
            /* now files is an Array of the name of the files in the folder and you can pick a random name inside of that array */
    
            let chosenFile = files[Math.floor(Math.random() * files.length)];
            let string = "src/img/bestioles/" + chosenFile;
    
            message.channel.send(``, {files: [string]});
        } catch (error) {
            console.error(error);
            message.reply("Désolé, il y a eu une erreur dans l'exécution de la commande ! Contacte @Louise#1515 pour lui faire parvenir ce problème !");
        } 
    }

}