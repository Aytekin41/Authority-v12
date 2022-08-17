const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
  
const rosses = new Discord.MessageEmbed()
.setFooter(ayarlar.footer)
.setDescription(`
> **\`${prefix}avatar -> .avatar @üye\`** 
> **\`${prefix}ban -> .ban @üye <sebep>\`** 
> **\`${prefix}say -> .say\`** 
> **\`${prefix}sil -> .sil miktar\`** 
> **\`${prefix}mute -> .mute @üye/id\`** 
> **\`${prefix}vmute -> .vmute @üye/id <Süre> <Sebep>\`** 
> **\`${prefix}jail -> .jail @üye/id <Sebep>\`** 
> **\`${prefix}unban -> .unban @üye/id\`** 
> **\`${prefix}unjail -> .unjail @üye/id\`** 
> **\`${prefix}unmute -> .unmute @üye/id\`** 
> **\`${prefix}vunmute -> .vunmute @üye/id\`** 
> **KAYIT YARDIM MENÜSÜ**
> **\`${prefix}erkek -> .e @üye/id İsim Yaş\`**
> **\`${prefix}kadın -> .k @üye/id İsim Yaş\`**
> **\`${prefix}isim -> .i @üye <İsim> <Yaş>\`** 
> **\`${prefix}İsimler -> .isimler @üye/id\`**
> **\`${prefix}kayıtsız -> .kayıtsız @üye/id\`**
> **\`${prefix}vip -> .vip @üye/id\`**
> **\`${prefix}teyit -> .teyit @üye\`**
`)
 message.channel.send(rosses)
.then(x => x.delete({timeout: 9000}))

}
exports.config = {
    name: "yardım",
    guildOnly: true,
    aliases: ["Yardım"]
}
