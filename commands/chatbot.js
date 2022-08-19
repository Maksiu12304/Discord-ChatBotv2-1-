module.exports = [
  {
    name: "set-chatbot",
    aliases: ["setchatbot", "chatbot"],
    category: "Chatbot",
    description: "Sets chatbot of the server",

    code: `
$description[1;> Successfully enabled the chatbot to <#$findChannel[$message;no]>]
$color[1;GREEN]
$setServerVar[chatbotChannel;$findChannel[$message;no]]

$onlyIf[$findChannel[$message;no]!=;{newEmbed:{description:\:_\: Invalid Args in \`<channel>\`
Usage:
\`set-chatbot <channel name | mention>\`}{color:RED}}]

$onlyIf[$message!=;{newEmbed:{description:Invalid Args!
Usage:
\`set-chatbot <channel mention | channel name | channel ID>\`}{color:RED}}]

$onlyIf[$findChannel[$message;no]!=$getServerVar[chatbotChannel];{newEmbed:{description:\:_\: Chat bot is already active in <#$findChannel[$message;no]>}{color:RED}}]

$onlyPerms[admin;{newEmbed:{description: Missing
\`Manage_Server\` Perms}{color:RED}}]

`,
  },
  {
    name: "reset-chatbot",
    aliases: "resetchatbot",
    usage: "Reset-chatbot <#chnl>",
    category: "Chatbot",
    description: "Resets the chatbot in the server",

    code: `
   $description[1;Successfully disabled chatbot in this server]
   $color[1;#ff0000]

   $setServerVar[chatbotChannel;]
   $onlyIf[$getServerVar[chatbotChannel]!=;{newEmbed:{description:\:_\: This server has no chat bot channel!}{color:RED}}]

  $onlyPerms[admin;{newEmbed:{description:\:_\: Missing
  \`Manage_Server\` Perms!}{color:RED}}]
`,
  },
];
