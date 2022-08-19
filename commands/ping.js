module.exports = {
  name: "ping",
  code: `$author[1;$serverName[$guildID];$serverIcon[$guildID]]
   $addField[1;Last Restart#COLON#;<t:$truncate[$divide[$readyTimeStamp;1000]]:R>]
   $addField[1;Database Latency#COLON#;$dbPingms]
   $addField[1;Latency#COLON#;$Pingms]
   $color[1;RANDOM]
   $thumbnail[1;$serverIcon[$guildID]]`,
};
