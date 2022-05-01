module.exports = {
    name: 'meme',
    description: 'Send a random picture from meme folder',
    

    execute(message) {
        try {
            const fs = require('fs');
            var files = fs.readdirSync('./src/img/memes/');
            /* now files is an Array of the name of the files in the folder and you can pick a random name inside of that array */
    
            let chosenFile = files[Math.floor(Math.random() * files.length)];
            let string = "src/img/memes/" + chosenFile;
    
            message.channel.send(``, {files: [string]});
        } catch (error) {
            console.error(error);
            message.reply("Désolé, il y a eu une erreur dans l'exécution de la commande ! Contacte @Louise#1515 pour lui faire parvenir ce problème !");
        } 
    }

    

}