const Discord = require('discord.js');

module.exports = {
  name: "help", 
  alias: ["ayuda"], 

execute (client, message, args){

  const user = message.author

  const embedPrincipal = new Discord.MessageEmbed()
  .setTitle("Apartado de ayuda")
  .setDescription("👊 => Apartado de Diversión\n🚀 => Apartado de Moderacion\n🎮 => Regresar al Menu")
  .setTimestamp()

  const embed1 = new Discord.MessageEmbed()
  .setTitle("Apartado de Diversión")
  .setDescription("say: El Bot responde con lo que tu digas\navatar: muestra el avatar de un usuario")
  .setTimestamp()

  const embed2 = new Discord.MessageEmbed()
  .setTitle("Apartado de Moderación")
  .setDescription("kick: expulsa a un usuario\nban: banea a un usuario")
  .setTimestamp()

  message.channel.send(embedPrincipal).then(async (e) => {

    e.react("👊")
    e.react("🚀")
    e.react("🎮")

    e.awaitReactions((reaction, user) => {

      if(message.author.id !== user.id) return;

      if(reaction.emoji.name === '👊'){
        e.edit(embed1)
      }
      if(reaction.emoji.name === '🚀'){
        e.edit(embed2)
      }
      if(reaction.emoji.name === '🎮'){
        e.edit(embedPrincipal)
      }
    })
  })

 }

}