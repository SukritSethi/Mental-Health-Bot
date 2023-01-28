console.log("beep beeo!");
require("dotenv").config();

const keepAlive = require("./server.js")

const replyArray = [
  "Small progress is still progress",
  "Struggling means you're learning",
  "Whenever we’re afraid, it’s because we don’t know enough. If we understood enough, we would never be afraid",
  "I know you'll sort it out",
  "It'll feel magical when it's working"
];

const { Client, GatewayIntentBits } = require("discord.js");

// Creating a new client:
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});



client.on("ready", readyDiscord);

function readyDiscord() {
  console.log("<3");
}

client.on("messageCreate", (message) => {
  if (message.author.bot) return false;
  if (message.content === "!happy") {
    const index=Math.floor(Math.random()*replyArray.length)
    // message.reply(replyArray[index]);
    message.reply(replyArray[index]);
    // console.log(items);
  }
});

keepAlive()
client.login(process.env.TOKEN);