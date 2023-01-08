const Discord = require('discord.js');

module.exports = {
  name: "ping", 
  alias: ["pi"], 

execute (client, message, args){

  message.channel.send(`🎾 Pong! **${client.ws.ping}ms** `)

 }

} 