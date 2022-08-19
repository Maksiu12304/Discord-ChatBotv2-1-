const aoijs = require("aoi.js");
const bot = new aoijs.AoiClient({
  token:
    "ODQyMjY5MDc5NjUyOTI1NDQw.G0zvLy.GoY3NaSsL5R11sles3h-9z-XM8iiyAHf0Oywu0",
  prefix: "!",
  intents: ["GUILDS", "GUILD_MESSAGES"],
  mobilePlatform: true,
});

//status
bot.status({
  text: "Watch it",
  type: "STREAMING",
  url: "https://www.youtube.com/watch?v=jYxo9JX5peI&t=44s",
});
//Events
bot.onMessage();

//Command Example (ping)
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, "./commands/");

//Chat bot main command
bot.command({
  name: "$alwaysExecute",
  category: "Command Support",
  code: `
  $reply[$messageID;yes]
  $httpRequest[https://api.affiliateplus.xyz/api/chatbot?message=$message&name=Discord&gender=Male&master=Mohit;GET;;message]
  $botTyping
  $cooldown[2s;{newEmbed:{description:\:_\: Don't send messages to fast, you can break me by doing it}{color:RED}}]

  $onlyIf[$checkContains[$message;@everyone;@here]==false;{newEmbed:{description:\:_\: I don't disturb people!}{color:#ff0000}}]

  $onlyForChannels[$getServerVar[chatbotChannel];]

  $onlyIf[$getServerVar[chatbotChannel]!=;]
  $suppressErrors
  `,
});
bot.variables({
  money: 0,
  chatbotChannel: "",
});
