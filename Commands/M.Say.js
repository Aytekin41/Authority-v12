const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("quick.db");

exports.run = function (client, message, args)  {


   const Rixénd = new Discord.MessageEmbed()
   .setColor("RANDOM")
   .setFooter(ayarlar.footer)

   let tag = ayarlar.tag;
   let tagg = message.guild.members.cache.filter(t => t.user.username.includes(tag)).size;

  let toplam = message.guild.memberCount;


   const sesGanalları = message.guild.channels.cache.filter(c => c.type === "voice")
   let count = 0;

   for (const [id, voiceChannel] of sesGanalları)
    count += voiceChannel.members.size;

  const yazıGanalları = message.guild.channels.cache.filter(text => text.type === "text").size;


  let boost = message.guild.premiumSubscriptionCount;


  let say = Rixénd.setDescription(`
  
   Sunucumuzda Toplam \`${toplam}\` Kullanıcı Var
   Sunucumuzda Tagımızı Alıp Bizi Destekleyen \`${tagg}\` Kullanıcı Var
   Sunucumuzda Toplam \`${count}\` Kullanıcı Sesde
   Sunucuya Toplam \`${boost}\` Boost Basılmış`);
    return message.channel.send(say);


 }
exports.config = {
    name: "say",
    guildOnly: true,
    aliases: ["Say"]
}