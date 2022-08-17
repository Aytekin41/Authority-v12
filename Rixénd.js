const Discord = require("discord.js")
const client = new Discord.Client()
const ayarlar = require("./ayarlar.json")
const moment = require("moment")
const fs = require("fs")
const db = require("quick.db")
const chalk = require("chalk")
require('./util/Loader.js')(client)

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`)
  files.forEach(f => {                    
    let props = require(`./commands/${f}`)
    console.log(`${props.config.name} komutu yüklendi.`)
    client.commands.set(props.config.name, props)
    props.config.aliases.forEach(alias => {       
      client.aliases.set(alias, props.config.name)
    });
  });
})

client.on('message', async message => {
  
  if(message.content === 'Tag') {
    message.channel.send(`Tagınız`) 
  }
  })
client.on('message', async message => {

  if(message.content === 'tag') {
    message.channel.send(`Tagınız`) 

}
}) 
    client.on("ready", () => {
    console.log(chalk.redBright(`${client.user.username} ismi ile başlatıldı.`))
})

// BOTUN İNTENTLERİNİ AÇMAYI UNUTMAYIN 
//
const invites = {};
const wait = require("util").promisify(setTimeout);
client.on("ready", () => {
  wait(1000);
  client.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});



client.on("guildMemberAdd", member => {
    
    if (member.user.bot) return;

    member.guild.fetchInvites().then(async guildInvites => {
      const ei = invites[member.guild.id];
  
      invites[member.guild.id] = guildInvites;
  
      const invite = await guildInvites.find(
        i => (ei.get(i.code) == null ? i.uses - 1 : ei.get(i.code).uses) < i.uses
      );
  
      const daveteden = member.guild.members.cache.get(invite.inviter.id);
  
      db.add(`davet_${invite.inviter.id}_${member.guild.id}`, +1);
  
      db.set(`bunudavet_${member.id}`, invite.inviter.id);
  
      let davetsayiv2 = await db.fetch(
        `davet_${invite.inviter.id}_${member.guild.id}`
      );
  
      let davetsayi;
  
      if (!davetsayiv2) davetsayi = 0;
      else
        davetsayi = await db.fetch(
          `davet_${invite.inviter.id}_${member.guild.id}`
        );
    let date = moment(member.user.createdAt)
       const startedAt = Date.parse(date);
       var msecs = Math.abs(new Date() - startedAt);
         
       const years = Math.floor(msecs / (1000 * 60 * 60 * 24 * 365));
       msecs -= years * 1000 * 60 * 60 * 24 * 365;
       const months = Math.floor(msecs / (1000 * 60 * 60 * 24 * 30));
       msecs -= months * 1000 * 60 * 60 * 24 * 30;
       const weeks = Math.floor(msecs / (1000 * 60 * 60 * 24 * 7));
       msecs -= weeks * 1000 * 60 * 60 * 24 * 7;
       const days = Math.floor(msecs / (1000 * 60 * 60 * 24));
       msecs -= days * 1000 * 60 * 60 * 24;
       const hours = Math.floor(msecs / (1000 * 60 * 60));
       msecs -= hours * 1000 * 60 * 60;
       const mins = Math.floor((msecs / (1000 * 60)));
       msecs -= mins * 1000 * 60;
       const secs = Math.floor(msecs / 1000);
       msecs -= secs * 1000;
         
       var Rixénd = "";
       if (years > 0) Tuomainen += `${years} yıl ${months} ay`
       else if (months > 0) Rixénd += `${months} ay ${weeks > 0 ? weeks+" hafta" : ""}`
       else if (weeks > 0) Rixénd += `${weeks} hafta ${days > 0 ? days+" gün" : ""}`
       else if (days > 0) Rixénd += `${days} gün ${hours > 0 ? hours+" saat" : ""}`
       else if (hours > 0) Rixénd += `${hours} saat ${mins > 0 ? mins+" dakika" : ""}`
       else if (mins > 0) Rixénd += `${mins} dakika ${secs > 0 ? secs+" saniye" : ""}`
       else if (secs > 0) Rixénd += `${secs} saniye`
           
member.roles.add(ayarlar.kayıtsızRol)
member.roles.add(ayarlar.kayıtsızRol)
member.roles.add(ayarlar.kayıtsızRol)
         
       Tuomainen = Tuomainen.trim();
   
       let guild = member.client.guilds.cache.get("Sunucu İd")
       let log = guild.channels.cache.get("Hoşgeldin Mesajını Atıcak Kanal İd");
       let endAt = member.user.createdAt
       let gün = moment(new Date(endAt).toISORixénd()).format('DD')
       let ay = moment(new Date(endAt).toISORixénd()).format('MM').replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")
       let yıl = moment(new Date(endAt).toISORixénd()).format('YYYY')
       let saat = moment(new Date(endAt).toISORixénd()).format('HH:mm')
       let kuruluş = `${gün} ${ay} ${yıl} ${saat}`;
  var üyesayısı = member.guild.members.cache.size
    .toRixénd()
    .replace(/ /g, "    ");
var üs = üyesayısı.match(/([0-9])/g);
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase();
  if (üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
        "0": `0`,
        "1": `1`,
        "2": `2`,
        "3": `3`,
        "4": `4`,
        "5": `5`,
        "6": `6`,
        "7": `7`,
        "8": `8`,
        "9": `9`
      }[d];
    });
  }
  
  
log.send(`

Hoşgeldin ${member} Seninle birlikte sunucumuz (\`${üyesayısı}\`) kişiyiz.

Hesabın **${kuruluş} (${Tuomainen})** önce oluşturulmuş.

Kurallar sunucunun düzenini sağlamak için konulmuştur <#Kurallar Kanal İd> kanalından kurallarımızı okumayı ihmal etme. <@&Register Rolün İd>

\`Tagımızı alarak bizleri destekleyebilirsin (Tagınız) İyi eğlenceler\`

**Davet eden** ${daveteden} **${davetsayi}** daveti oldu.`)
      
})});
client.on("guildMemberRemove", async member => {
    let davetçi = await db.fetch(`bunudavet_${member.id}`);
  
    const daveteden = member.guild.members.cache.get(davetçi);
  
    db.add(`davet_${davetçi}_${member.guild.id}`, -1);
  })
    
 //------------------------------------------------------AFK------------------------------------------------------\\


 //------------------------------------------------------AFK------------------------------------------------------\\

//------------------------------------------------------AYARLAMALI-REKLAM-ENGEL------------------------------------------------------\\

client.on("message", message => { // undefined
  if(!db.has(`reklamlen_${message.guild.id}`)) return;

   const undefined = [
    ".com",
    ".net",
    ".xyz",
    ".tk",
    ".pw",
    ".io",
    ".me",
    ".gg",
    "www.",
    "https",
    "http",
    ".gl",
    ".org",
    ".com.tr",
    ".biz",
    "net",
    ".rf.gd",
    ".az",
    ".party",
    "discord.gg"
   ];

   if(undefined.some(kelime => message.content.toLowerCase().includes(kelime))) {
    try {

      if(!message.member.hasPermission("ADMINISTRATOR")) { // bu yetkiye sahip olanları etkilemiyor
       message.delete();

        return message.channel.send(new Discord.MessageEmbed()
         .setDescription(`${message.author} Bu sunucuda reklam yapmak yasaktır!`)
         .setColor("RED")
         .setAuthor(message.member.displayName, message.author.avatarURL())
         .setTimestamp())
         .then(x => x.delete({ timeout: 5000 }));  

     }
   } catch (err) {
           console.log(err);
        }
   }
}); // undefined

//------------------------------------------------------AYARLAMALI-REKLAM-ENGEL------------------------------------------------------\\

//------------------------------------------------------AYARLAMALI-KÜFÜR-ENGEL------------------------------------------------------\\

client.on("message", message => { // undefined
  if(!db.has(`kufurcum_${message.guild.id}`)) return;
  
   const undefined = ["skm","aq","orospu","amık","Oç","0ç","yavşak","y3a3rram","a.m.k","A.M.K","or1spu","anan1 s1k1m","orospu evladı","ananı sikim","anneni sikim","anneni sikeyim","ananı sikeyim","ağzına sıçim","ağzına sıçayım","ağzına s","ambiti","amını","amını s","amcık","amcik","amcığını","amciğini","amcığını","amcığını s","amck","amckskm","amcuk","amına","amına k","amınakoyim","amına s","amunu","amını","amın oğlu","amın o","amınoğlu","amnskm","anaskm","ananskm","amkafa","amk çocuğu","amk oç","piç","amk ç","amcıklar","amq","amındaki","amnskm","ananı","ananın am","ananızın","aneni","aneni s","annen","anen","ananın dölü","sperm","döl","anasının am","anası orospu","orospu","orosp,","kahpe","kahbe","kahße","ayklarmalrmsikerim","ananı avradını","avrat","avradını","avradını s","babanı","babanı s","babanın amk","annenin amk","ananın amk","bacını s","babası pezevenk","pezevenk","pezeveng","kaşar","bitch","yarrak","cibiliyetini","bokbok","bombok","dallama","götünü s","ebenin","ebeni","ecdadını","gavat","gavad","ebeni","fahişe","sürtük","fuck","gotten","götten","göt","gtveren","gttn","gtnde","gtn","hassiktir","hasiktir","hsktr","haysiyetsiz","ibne","ibine","ipne","kaltık","kancık","kevaşe","kevase","kodumun","orosbu","fucker","penis","porno","sikiş","s1kerim","puşt","sakso","skcm","siktir","sktr","skecem","skeym","slaleni","sokam","sokuş","sokarım","sokarm","sokaym","şerefsiz","şrfsz","sürtük","taşak","taşşak","tasak","tipini s","yarram","yararmorospunun","yarramın başı","yarramınbaşı","yarraminbasi","yrrk","zikeyim","zikik","zkym","amk","mk","oç"];
   
   if(undefined.some(kelimeğ => message.content.toLowerCase().includes(kelimeğ))) {
    try {

       if(!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();

         return message.channel.send(new Discord.MessageEmbed()
          .setDescription(`${message.author} Bu sunucuda küfür etmek yasaktır!`)
          .setColor("RED")
          .setAuthor(message.member.displayName, message.author.avatarURL())
          .setTimestamp())
          .then(x => x.delete({ timeout: 5000}))

        }
      } catch (err) {
              console.log(err);
           }
      }
   }); //
   //------------------------------------------------------AYARLAMALI-KÜFÜR-ENGEL------------------------------------------------------\\

//------------------------------------------------------TAG-ALINCA-VERİLECEK-ROL------------------------------------------------------\\

client.on("userUpdate", async (oldUser, newUser) => {
   if(oldUser.username !== newUser.username) {

     let tag = "Tagınız";
     let sunucu = "Sunucu Id";
     let ganal = "Tagı Alınca Mesaj Göndercek Kanal Id";
     let rolcük = "Tagı Aldıkdan Sonra Verilcek Rol Id";


      // TAG ALAN KULLANICI
     if(newUser.username.includes(tag) && !client.guilds.cache 
       .get(sunucu)
       .members.cache.get(newUser.id)
       .roles.cache.has(rolcük)) {


        client.channels.cache
        .get(ganal)
        .send(`${newUser} **\`${tag}\`** tagını aldığı için <@&${rolcük}> rolünü kazandı!`)

        client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .roles.add(rolcük)

       }

     // TAG SALAN KULLANICI
    if(!newUser.username.includes(tag) && client.guilds.cache 
       .get(sunucu)
       .members.cache.get(newUser.id)
       .roles.cache.has(rolcük)) {


        client.channels.cache
        .get(ganal)
        .send(`${newUser} **\`${tag}\`** tagını isminden çıkardığı için <@&${rolcük}> rolünü kaybetti!`)
        
        client.guilds.cache
        .get(sunucu)
        .members.cache.get(newUser.id)
        .roles.remove(rolcük)

    }   
  }
});

//------------------------------------------------------TAG-ALINCA-VERİLECEK-ROL------------------------------------------------------\\

//------------------------------------------------------SA-AS------------------------------------------------------\\
client.on('message', message => {
  // Data
  let sistem = db.fetch(`cmfsaas_${message.guild.id}`)

  // Sa
  var sa = ["Sa","SA","sa","Sea","sea","SEA","selamın aleyküm","Selamın Aleyküm","SELAMIN ALEYKÜm","selamun aleyküm","Selamun Aleyküm","SELAMUN ALEYKÜM"]

  if(sistem === 'aktif'){
    if(sa.includes(message.content.toLowerCase())){
      message.channel.send(`${message.author} **Aleyküm Selam Hoşgeldin.**`)
    }
  } else {
    // Sistem Kapalıysa Bot İplemesin.
    return;
  }
})
  
//------------------------------------------------------SA-AS------------------------------------------------------\\

//
client.login(process.env.token)

client.on("ready", () => {
  client.channels.cache.get(ayarlar.botSesKanal).join();
  });
