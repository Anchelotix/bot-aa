const Discord = require('discord.js')
const client = new Discord.Client();
const { Client, MessageEmbed, Guild } = require('discord.js');////////Definimos estas cosas que luego nos servirán///////
require('dotenv').config();

const keepAlive = require('./server.js')
const express = require("express")().get("/", (req,res)=> res.send("BOT ACTIVO")).listen(3000)


const fs = require('fs')
let { readdirSync } = require('fs') 

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

client.on('ready', () => {
  function presence(){
    client.user.setPresence({
      status: 'on',
      activity: {
        name: 'Programando Bots',
        type: 'PLAYING'
      }
    })
  }
  presence();
  console.log('ESTOY ON PAPA')
})

client .on('message', (message) =>{

  let prefix = '+'

  if(message.author.bot) return;

  if(!message.content.startsWith(prefix)) return;

  let usuario = message.mentions.members.first() || message.author
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase();

  

   let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if(cmd){
    cmd.execute(client, message, args)
  }

  
})

const mySecret = process.env['TOKEN']
client.login(mySecret)
