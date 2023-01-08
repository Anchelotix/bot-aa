const Discord = require('discord.js');

module.exports = {
  name: "avatar", 
  alias: ["ava"], 

execute (client, message, args){

  const usuario = message.mentions.members.first() || message.member

  const embed = new Discord.MessageEmbed()
  .setTitle(`Avatar de ${usuario.user.username}`)
  .setImage(usuario.user.displayAvatarURL({ size: 1024, dynamic: true }))
  .setFooter(`Solicitado por: ${message.author.tag}`)
  .setColor('RANDOM')

  message.channel.send(embed)

  
 }

} 