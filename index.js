const express = require("express");
const app = express()

app.listen(3000, ()=>{
  console.log("project is running");
})
app.get("/",(req,res)=>{
  res.send("hello world");
})

const Discord = require("discord.js");
const client = new Discord.Client({intents:["GUILDS","GUILD_MESSAGES"]});

client.on("messageCreate",message=>{
  if(message.content ==="$help"){
    message.channel.send(`  Commands Available=>
    1-$help-See all available commands
    2-$hello - Greeting Message
    3-$play - Play any song
    4-$pause - Pause currently playing song
    5-$despription - Bot  Description`)
  }
  if(message.content ==="$hi"){
    message.channel.send("Hello " + message.author.username + " i am a BOT created by Tyagi_OP Have a great day")
  }
  if(message.content ==="$play"){
    message.channel.send()
  }
  if(message.content ==="!pause"){
    message.channel.send("WORK UNDER PROGRESS ")
  }
  if(message.content ==="!description"){
    message.channel.send("Apne kaam se kaam rakh na LODU")
  }
  // if(message.consent === "$hello"){
  //   let embed =new Discord.MessageEmbed()
  //   .setTitle("HEllO!")
  //   .setAuthor(message.author.username,message.author.displayAvatarUrl())
  //   // .setURL("")
  //   .setDescription("Nothing here in description")
  //   .setFooter("Have a good day")
  //   .setColor("RANDOM")
  //   .setThumbnail("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngmagic.com%2Fyo11%2Fblue-gradient-color-youtube-thumbnail-background-1280x720.htm&psig=AOvVaw2BbsczFuu1DmxbbW5UIB75&ust=1643693124134000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMiD1pig2_UCFQAAAAAdAAAAABAD")
  //   .setTimestamp()
  
  // message.channel.send({embeds :[embed]})
  // }

})
client.login(process.env.token);