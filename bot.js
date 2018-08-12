const Discord = require('discord.js');
const client = new Discord.Client();

console.log("BOT ONLINE");
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم :heart:
لو انت مطفر ادخل 5 day بتصير مطنوخ :heart:
                               [ https://discord.gg/J5hT6eV ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)

})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل سيرفرى
                               [ https://discord.gg/J5hT6eV ] 
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
