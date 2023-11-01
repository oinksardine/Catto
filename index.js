const fs = require('fs');
const Discord = require('discord.js');

//Récupération des informations de configuration
const { prefix, token } = require('./src/conf/config.json');

//Nouveau client
const client = new Discord.Client();
client.commands = new Discord.Collection();

//Trouve les fichiers de commandes
const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./src/commands/${file}`);
  client.commands.set(command.name, command);
};

//Récupération de la liste des mots
const wordlists = require('./src/jsonfiles/wordlists.json');

/*
  EVENTS
*/

//Quand Cattô est opérationnel
client.once('ready', () => {
  console.log('Ready!');
});


//A chaque message (channels où Cattô est présent)
client.on('message', message => {
  
  //Cattô a 13 ans, il réponds "feur" si tu finis ta phrase par "quoi"
  if(message.content.endsWith("quoi")){
      message.reply("feur");
  }

  //Cattô a 13 ans, il réponds "deux" si tu finis ta phrase par "hein"
  if(message.content.endsWith("hein")){
      message.reply("deux");
  }

  //Cattô a 13 ans, il réponds "sititi" si tu finis ta phrase par "oui"
  if(message.content.endsWith("oui")){
    message.reply("stiti");
  }

  //Cattô a 13 ans, il réponds "trois, soleil" si tu finis ta phrase par "deux"
  if(message.content.endsWith("deux")){
    message.reply("trois, soleil !");
  }

  //Cattô réagit à une salutation le concernant
  if (wordlists.GREETINGS.some(word => message.content.toLowerCase().includes(word)) && wordlists.CATTO.some(word => message.content.toLowerCase().includes(word)) && message.author.bot == false) {
    let chosenWord = wordlists.GREETS[Math.floor(Math.random() * wordlists.GREETS.length)];
    
    message.reply(chosenWord);
  }

  //Cattô réagit quand on l'insulte
  if (wordlists.BADWORDS.some(word => message.content.toLowerCase().includes(word)) && message.author.bot == false && wordlists.CATTO.some(word => message.content.toLowerCase().includes(word)) && message.author.bot == false) {
    let chosenWord = wordlists.INSULTS[Math.floor(Math.random() * wordlists.INSULTS.length)];
    
    message.reply(chosenWord);
  }

  //Cattô réagit à "ok cattô"
  if (message.content.toLowerCase().startsWith(`ok`) && wordlists.CATTO.some(word => message.content.toLowerCase().includes(word)) && message.author.bot == false) {
    let chosenWord = wordlists.GOGOLE[Math.floor(Math.random() * wordlists.GOGOLE.length)];
    
    message.reply(chosenWord);  
  }

  //Cattô réagit quand on lui dit merci
  if (wordlists.THANKS.some(word => message.content.toLowerCase().includes(word)) && message.author.bot == false && wordlists.CATTO.some(word => message.content.toLowerCase().includes(word)) && message.author.bot == false) {
    //selectionne une valeur entre 1 et 2
    let chosenWord = wordlists.NP[Math.floor(Math.random() * wordlists.NP.length)];
    
    message.reply(chosenWord);
  }


  //Cattô réagit aux commandes
  else if (!message.content.startsWith(prefix) && message.author.bot == false ) return;

    //splite la commande du ! au mot et met en minuscules
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //si la commande n'existe pas, ne retourne rien
    if (!client.commands.has(command)) return;

    try {
      client.commands.get(command).execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply("Une erreur s'est produite pendant l'exécution de la commande !");
    };

})


//Connexion
client.login(token).catch(console.error);
