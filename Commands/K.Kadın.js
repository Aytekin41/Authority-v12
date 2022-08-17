const Discord = require("discord.js")
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if(!ayarlar.yetkiliRol.some(Tuomainen => message.member.roles.cache.has(Tuomainen)) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${client.emojis.cache.get(ayarlar.no)} **Bu işlemi gerçekleştirmek için gerekli yetkin yok!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))
  
    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!etiketlenenKişi) return message.channel.send(`${client.emojis.cache.get(ayarlar.no)} **Kaydetmek için bir kişi etiketlemelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))
  
const isim = args[1];
const yaş = args[2];
if(!isim) return message.channel.send(`${client.emojis.cache.get(ayarlar.no)} **Kaydetmek için bir isim belirtmelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))
if(!yaş) return message.channel.send(`${client.emojis.cache.get(ayarlar.no)} **Kaydetmek için bir yaş belirtmelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))
if(isNaN(yaş)) return message.channel.send(`${client.emojis.cache.get(ayarlar.no)} **Belirttiğin yaş rakamlardan oluşmalı!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))
  
etiketlenenKişi.roles.add(ayarlar.kadınRol1)
etiketlenenKişi.roles.add(ayarlar.kadınRol2)
etiketlenenKişi.roles.add(ayarlar.kadınRol3)
etiketlenenKişi.roles.remove(ayarlar.kayıtsızRol)
etiketlenenKişi.setNickname(`${ayarlar.tag} ${isim} ${ayarlar.sembol} ${yaş}`)

message.react(client.emojis.cache.get(ayarlar.yes))

const Tuomainen = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`Başarıyla kayıt oldu. Kullanıcının ismi \`${ayarlar.tag} ${isim} ${ayarlar.sembol} ${yaş}\`Olarak değiştirildi. Verilen roller <@&${ayarlar.kadınRol1}> <@&${ayarlar.kadınRol2}> <@&${ayarlar.kadınRol3}>`)
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp()

message.channel.send(Tuomainen)

db.push(`isimler.${etiketlenenKişi.id}`, {
İsim: isim,
Yaş: yaş,
Yetkili: message.author.id
})

db.add(`kadinTeyit.${message.member.id}`, `1`)
db.add(`toplamTeyit.${message.member.id}`, `1`)

client.channels.cache.get(ayarlar.sohbetKanal).send(`${etiketlenenKişi} **Sunucumuza Biri Katıldı Ona Merhaba Diyelim**`)
  
}
exports.config = {
    name: "kadın",
    guildOnly: true,
    aliases: ["k", "female", "kız"]
}