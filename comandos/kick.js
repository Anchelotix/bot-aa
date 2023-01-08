const Discord = require('discord.js');

module.exports = {
  name: "kick", 
  alias: ["expulsar"], 

execute (client, message, args){

  var botperms = message.guild.me.hasPermission("KICK_MEMBERS")
  if(!botperms) return message.channel.send("No tengo permisos para expulsar miembros")

  var perms = message.member.hasPermission("KICK_MEMBERS")
  if(!perms) return message.channel.send("No tienes permisos para expulsar miembros!")

  const usuario = message.mentions.members.first()
  if(!usuario) return message.channel.send("Debes mencionar un usuario para expulsar!")

  const razon = args.slice(1).join(' ')
  if (!razon) return message.channel.send("Debes escribir una razón para expulsar a este miembro!")

  message.guild.member(usuario).kick(razon);

  message.channel.send(`Se ha expulsado al usuario ${usuario} correctamente.\nRazón: ${razon}`)

 }

} 