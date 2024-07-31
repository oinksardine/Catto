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

  //-------------------------------------------------------------------------------------------------------------------------------------------------
  //a optimiser mais j'ai la flemme.
  
  //Cattô a 13 ans, il réponds "feur" si tu finis ta phrase par "quoi" 1 jour sur 2, sinon il répond "coubeh"
  if(message.content.endsWith("quoi") && message.author.bot == false){
    let today =  new Date();
    if (today.getDay() / 2 == 0)
      message.reply("feur");
    else
    message.reply("coubeh");
  }

  //Cattô a 13 ans, il réponds "deux" si tu finis ta phrase par "hein"
  if(message.content.endsWith("hein") && message.author.bot == false){
      message.reply("deux");
  }

  //Cattô a 13 ans, il réponds "sititi" si tu finis ta phrase par "oui"
  if(message.content.endsWith("oui") && message.author.bot == false){
    message.reply("stiti");
  }

  //Cattô a 13 ans, il réponds "stern" si tu finis ta phrase par "ouais"
  if(message.content.endsWith("ouais") && message.author.bot == false){
    message.reply("stern");
  }

  //Cattô a 13 ans, il réponds "on" si tu finis ta phrase par "mais"
  if(message.content.endsWith("mais") && message.author.bot == false){
    message.reply("on");
  }

  //Cattô a 13 ans, il réponds "quin" si tu finis ta phrase par "re"
  if(message.content.endsWith("re") && message.author.bot == false){
    message.reply("quin");
  }

  //Cattô a 13 ans, il réponds "trois, soleil" si tu finis ta phrase par "deux"
  if(message.content.endsWith("deux") && message.author.bot == false){
    message.reply("trois, soleil !");
  }

  //Cattô a 13 ans, il réponds "dans ton cul" si tu finis ta phrase par "où ?"
  if(message.content.endsWith("où ?") && message.author.bot == false){
    message.reply("dans ton cul");
  }


  //Cattô a 13 ans, il réponds "beille" si tu finis ta phrase par "ah"
  if(message.content.endsWith("ah") && message.author.bot == false){
    message.reply("beille");
  }

  //Cattô a 13 ans, il réponds "ture" si tu finis ta phrase par "toi"
  if(message.content.endsWith("toi") && message.author.bot == false){
    message.reply("ture");
  }

  //Cattô a 13 ans, il réponds "dant cousteau !" si tu finis ta phrase par "comment"
  if(message.content.endsWith("comment") && message.author.bot == false){
    message.reply("dant cousteau !");
  }

  //Cattô a 13 ans, il rigole si tu dis un mot rigolo.
  if(message.content.includes("bite") && message.author.bot == false){
    message.reply("hinhinhinhin, bite");
    let chosenWord = wordlists.REACTIONS[Math.floor(Math.random() * wordlists.REACTIONS.length)];
    
    message.reply(chosenWord);
  }
  if(message.content.includes("vagin") && message.author.bot == false){
    message.reply("krkrkrkrkrkr, vagin");
    let chosenWord = wordlists.REACTIONS[Math.floor(Math.random() * wordlists.REACTIONS.length)];
    
    message.reply(chosenWord);
  }
  if(message.content.includes("caca") && message.author.bot == false){
    message.reply("hahahahaahHAHAAHAHAAH CAACAAAAAA");
    let chosenWord = wordlists.REACTIONS[Math.floor(Math.random() * wordlists.REACTIONS.length)];
    
    message.reply(chosenWord);
  }
  if(message.content.includes("prout") && message.author.bot == false){
    message.reply("prout hahah prfffffrrrrt prouuut");
    let chosenWord = wordlists.REACTIONS[Math.floor(Math.random() * wordlists.REACTIONS.length)];
    
    message.reply(chosenWord);
  }
  if(message.content.includes("zizi") && message.author.bot == false){
    message.reply("hihi zizi");
    let chosenWord = wordlists.REACTIONS[Math.floor(Math.random() * wordlists.REACTIONS.length)];
    
    message.reply(chosenWord);
  }
  if(message.content.includes("pipi") && message.author.bot == false){
    message.reply("piiiiiipiiiii heheheheh");
    let chosenWord = wordlists.REACTIONS[Math.floor(Math.random() * wordlists.REACTIONS.length)];
    
    message.reply(chosenWord);
  }
  if(message.content.includes("fesse") || message.content.includes("fesses") && message.author.bot == false){
    message.reply("hahinhinhin fesse");
    let chosenWord = wordlists.REACTIONS[Math.floor(Math.random() * wordlists.REACTIONS.length)];
    
    message.reply(chosenWord);
  }
  if(message.content.includes("nombril") && message.author.bot == false){
    message.reply("HAHAHAHAH non ? BRIL !!! HAHAHAHAH");
    let chosenWord = wordlists.REACTIONS[Math.floor(Math.random() * wordlists.REACTIONS.length)];
    
    message.reply(chosenWord);
  }

  //-------------------------------------------------------------------------------------------------------------------------------------------------

  //Cattô réagit à une salutation le concernant
  if (wordlists.GREETINGS.some(word => message.content.toLowerCase().includes(word)) && wordlists.CATTO.some(word => message.content.toLowerCase().includes(word)) && message.author.bot == false) {
    let chosenWord = wordlists.GREETS[Math.floor(Math.random() * wordlists.GREETS.length)];
    
    message.reply(chosenWord);
  }

  //Cattô réagit quand on l'insulte
  if (wordlists.BADWORDS.some(word => message.content.toLowerCase().includes(word)) && message.author.bot == false && wordlists.CATTO.some(word => message.content.toLowerCase().includes(word))) {
    let chosenWord = wordlists.INSULTS[Math.floor(Math.random() * wordlists.INSULTS.length)];
    
    message.reply(chosenWord);
  }

  //Cattô réagit à "ok cattô"
  if (message.content.toLowerCase().startsWith(`ok`) && wordlists.CATTO.some(word => message.content.toLowerCase().includes(word)) && message.author.bot == false) {
    let chosenWord = wordlists.GOGOLE[Math.floor(Math.random() * wordlists.GOGOLE.length)];
    
    message.reply(chosenWord);  
  }

  //Cattô réagit quand on lui dit merci
  if (wordlists.THANKS.some(word => message.content.toLowerCase().includes(word)) && message.author.bot == false && wordlists.CATTO.some(word => message.content.toLowerCase().includes(word))) {
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
