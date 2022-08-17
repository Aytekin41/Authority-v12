const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")

exports.run = async(client, message, args) => {
 if (!message.member.roles.cache.has(ayarlar.mutesorumlusu) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).addField("Yetersiz Yetki",`Bu Komutu Kullanmak içi Yeterli Yetkiniz Yok`)).then(m => m.delete({timeout: 7000}));
  
  let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let reason = args.splice(1).join(" ");
  if(!uye || !reason) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription("Geçerli bir kişi/Id ve sebep belirtmelisin!")).then(x => x.delete({timeout: 5000}));
  if (message.member.roles.highest.position <= uye.roles.highest.position) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`Belirttiğin kişi senden üstün veya onunla aynı yetkidesin!`)).then(x => x.delete({timeout: 5000}));
  await uye.roles.add(ayarlar.muted).catch();
  message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`${uye} üyesi, ${message.author} tarafından **${reason}** nedeniyle mutelendi! \n **Muteyi kaldırmak için .unmute kişi/Id**`)).catch();
  client.channels.cache.get(ayarlar.mutelog).send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`${uye} İsimli Kullanıcı Metin Kanallarında Susturuldu.\n\n• Yetkili: <@!${message.author.id}> \`${message.author.id}\` \n• Mutelenen Üye: <@!${uye.id}> \`${uye.id}\` \n\n• Sebep: **${reason}**`)).catch();
};
exports.config = {
    name: "mute",
    guildOnly: true,
    aliases: ["Mute","Muted","muted"]
}