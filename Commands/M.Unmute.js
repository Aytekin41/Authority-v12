const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args, ayar, emoji) => {
 if (!message.member.roles.cache.has(ayarlar.mutesorumlusu) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).addField("Yetersiz Yetki",`Bu Komutu Kullanmak içi Yeterli Yetkiniz Yok`)).then(m => m.delete({timeout: 7000}));
  let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if(!uye) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription("Geçerli bir üye belirtmelisin!")).then(x => x.delete({timeout: 5000}));
  if (message.member.roles.highest.position <= uye.roles.highest.position) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`Belirttiğin kişi senden üstün veya onunla aynı yetkidesin!`)).then(x => x.delete({timeout: 5000}));
  uye.roles.remove(ayarlar.vmuted).catch();
  uye.roles.remove(ayarlar.muted).catch();
  if (uye.voice.channel) uye.voice.setMute(false);
  message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`${uye} üyesinin, ${message.author} tarafından mutesi kaldırıldı!`)).catch();
  client.channels.cache.get(ayarlar.mutelog).send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`${uye} İsimli Kullanıcının Mutesi Kaldırıldı\n\n• Yetkili: <@!${message.author.id}> \`${message.author.id}\`\n• Kullanıcı: <@!${uye.id}> \`${uye.id}\``)).catch();
};
exports.config = {
    name: "unmute",
    guildOnly: true,
    aliases: ["Unmute","Unmuted","unmuted"]
}