const Discord = require('discord.js');
const db = require("quick.db");
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {


    if (![ayarlar.bansorumlusu].some(role => message.member.roles.cache.get(role)) &&

    !message.member.hasPermission("ADMINISTRATOR"))
     return message.channel.send(new Discord.MessageEmbed()
       .setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`)
       .setColor("0x800d0d")
       .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
       .setTimestamp())
        .then(x => x.delete({ timeout: 5000 }))

        //-----------------------KOD-BAŞLANGIÇ---------------------\\

        let member = message.mentions.users.first()
        let sebep = args.slice(1).join(' ')
        let guild = message.guild;
        let kanal = ayarlar.banlog

        if(!member) return message.channel.send("Banlıyacağın Kullanıcıyı Belirtirmisin.")  

        if(!sebep) return message.channel.send("Banlama Sebebini Belirtirmisin.")

        if(member.id === message.author.id) return message.channel.send("Kendini Banlayamazsın!")


        else
        guild.members.ban(member)
         message.channel.send(new Discord.MessageEmbed()
            .setDescription(`${message.author} Tarafından ${member} adlı kişi sunucudan banlandı.`)
            .setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
            .setColor("0x348f36"))
            .then(x => x.delete({ timeout: 5000 }))

        message.react("✅").then(() => {
          setTimeout(function () {

          message.delete()
          },5000);
        })
        

         const banlandı = new Discord.MessageEmbed()
          .setAuthor(message.author.username, message.author.avatarURL())
          .setTitle("Bir Kullanıcı Banlandı!")
          .setColor("RANDOM")
          .addField("Banlayan Yetkili", message.author)
          .addField("Banlanan Kullanıcı", member)
          .addField("Sebep", "`" + sebep + "`")
          .setfooter(ayarlar.footer)
          
          client.channels.cache
          .get(kanal)
          .send(banlandı)
       
    }
exports.config = {
    name: "ban",
    guildOnly: true,
    aliases: ["Ban"]
}