const chalk = require('chalk')
const fs = require('fs')

global.listmen = (prefix, packname, author, creator, runtime, sender, itsMeGans, getStat, no, ad, pushname) => {
return `Hai Kak ${pushname}
▬▭▬▭▬ *Ꮖᑎᖴᝪ ᗷᝪᎢ* ▰▭▰▭▰
ᢳ─⟪ *${packname}* ⟫─ᐕ
⳹ BᴏT Nᴀᴍᴇ : ${packname} ⳼
⳹ Oᴡɴᴇʀ: ${author} ⳼
⳹ Nᴜᴍʙᴇʀ: ${creator.split("@")[0]} ⳼
⳹ Lɪʙʀᴀʀʏ : Baileys ⳼
⳹ Bᴀɪʟᴇʏs :  Multi-Device ⳼
⳹ Lᴀɴɢᴜᴀɢᴇ : JavaScript ⳼
⳹ Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())} ⳼
▖▗▬▭▬▭▬▭▬▭▬▭▬▖▗
❮ Ꮖᑎᖴᝪ ᑌᔑᗴᖇ ❯
⳹ Nᴀᴍᴇ: ${pushname} ⳼
⳹ Bɪᴏ: ${getStat ? getStat : "-"} ⳼
⳹ Nᴜᴍʙᴇʀ: ${sender.split("@")[0]} ⳼
⳹ Status: ${itsMeGans ? 'Owner' : 'User'} ⳼

┷┷┷𝐋𝐢𝐬𝐭 𝐌𝐞𝐧𝐮┷┷┷
⏳ ɢᴀꜱᴍᴇɴᴜ
⏳ ᴄᴏɴᴠᴇʀᴛᴍᴇɴᴜ
⏳ ʙᴜɢᴍᴇɴᴜ
⏳ ɢᴀᴍᴇᴍᴇɴᴜ
⏳ ɢʀᴏᴜᴘᴍᴇɴᴜ
⏳ ᴋᴀɴᴇᴍᴇɴᴜ
⏳ ɴsғᴡᴍᴇɴᴜ
⏳ ᴘᴀɴᴇʟᴍᴇɴᴜ
⏳ ɪɴᴛᴇʀɴᴇᴛᴍᴇɴᴜ
⏳ ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
⏳ ᴏᴡɴᴇʀᴍᴇɴᴜ
▬▭▬▭▬𝐆𝐚𝐧𝐬𝐁𝐎𝐓𝐳▭▬▭▬▭
`
}
global.gasmenu = (prefix, pushname) => {
return `Hai Kak ${pushname}
╔╤════════╫➼
║┝❏ Ⓞ: Owner Only
║┝❏ ⓟ: Premium Only
║┝❏ Ⓕ: Free
║┝❏ Ⓛ: Limit
║┝❏ Ⓖ: Group Only
║╰╼╾╼╾╼╾╼╾╼╾╼╾◯ 
╚════════════♰

▬▭▬▭▬𝐆𝐚𝐬 𝐌𝐞𝐧𝐮▭▬▭▬▭

◪ ${prefix}spamsms (628xx) ⓟ
◩ ${prefix}call (628xx) ⓟ
◪ ${prefix}kenon (628xx) ⓟ
◩ ${prefix}verif@ (628xx) ⓟ
◪ ${prefix}banned (628xx) ⓟ
◩ ${prefix}unbannedv2 (628xx) ⓟ
◪ ${prefix}unbannedv3 (628xx) ⓟ
◩ ${prefix}unbannedv4 (628xx) ⓟ
◪ ${prefix}unbannedv5 (628xx) ⓟ
`
}
global.bugmenu = (prefix, pushname) => {
return `Hai Kak ${pushname}
╔╤════════╫➼
║┝❏ Ⓞ: Owner Only
║┝❏ ⓟ: Premium Only
║┝❏ Ⓕ: Free
║┝❏ Ⓛ: Limit
║┝❏ Ⓖ: Group Only
║╰╼╾╼╾╼╾╼╾╼╾╼╾◯ 
╚════════════♰

▬▭▬▭▬𝐁𝐔𝐆 𝐌𝐞𝐧𝐮▭▬▭▬▭

◤𝑺𝒂𝒏𝒕𝒆𝒕 𝑴𝒆𝒏𝒈𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝑵𝒐𝒎𝒐𝒓◥
◪ ${prefix}🗿 (628xxxx) ⓟ
◪ ${prefix}🥶 (628xxxx) ⓟ
◪ ${prefix}💣 (628xxxx) ⓟ
◪ ${prefix}🌹 (628xxxx) ⓟ
◪ ${prefix}🥀 (628xxxx) ⓟ
◪ ${prefix}🌷 (628xxxx) ⓟ
◪ ${prefix}🔒 (628xxxx) ⓟ
◪ ${prefix}⚠️ (628xxxx) ⓟ
◪ ${prefix}☢ (628xxxx) ⓟ
◪ ${prefix}🔥 (628xxxx) ⓟ
◪ ${prefix}☠ (628xxxx) ⓟ
◪ ${prefix}💀 (628xxxx) ⓟ
◪ ${prefix}santet (628xxxx) ⓟ
◪ ${prefix}santetdia (628xxxx) ⓟ
◪ ${prefix}serang (628xxxx) ⓟ
◪ ${prefix}gascrash (628xxxx) ⓟ
◪ ${prefix}bugcrash (628xxxx) ⓟ
◪ ${prefix}crash (628xxxx) ⓟ

◤𝑺𝒂𝒏𝒕𝒆𝒕 𝑮𝒓𝒐𝒖𝒑◥
◪ ${prefix}santetgc (idgc) ⓟ
◪ ${prefix}troligc (idgc) ⓟ
◪ ${prefix}gasgc (idgc) ⓟ
◪ ${prefix}gasfullgc (idgc) ⓟ
◪ ${prefix}sendbuggc (idgc) ⓟ
◪ ${prefix}seranggc (idgc) ⓟ
◪ ${prefix}hajargc (idgc) ⓟ
◪ ${prefix}hantamgc (idgc) ⓟ
◪ ${prefix}unlidelaygc (idgc) ⓟ
◪ ${prefix}unlilaggc (idgc) ⓟ
◪ ${prefix}unlibomgc (idgc) ⓟ

◤𝑺𝒂𝒏𝒕𝒆𝒕 𝑴𝒆𝒏𝒈𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝑱𝒖𝒎𝒍𝒂𝒉◥
◪ ${prefix}catalog (628xxxx|jumlah) ⓟ
◪ ${prefix}virdoc (628xxxx|jumlah) ⓟ
◪ ${prefix}bugdeff (628xxxx|jumlah) ⓟ
◪ ${prefix}gasbug (628xxxx|jumlah) ⓟ

◤𝑺𝒆𝒏𝒅 𝑩𝒖𝒈 𝑴𝒆𝒏𝒈𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝑱𝒖𝒎𝒍𝒂𝒉◥
◪ ${prefix}🥔 (jumlah) Ⓟ
◪ ${prefix}🌰 (jumlah) Ⓟ
◪ ${prefix}🎂 (jumlah) Ⓟ
◪ ${prefix}🍆 (jumlah) Ⓟ
◪ ${prefix}🥑 (jumlah) Ⓟ
◪ ${prefix}🥒 (jumlah) Ⓟ
◪ ${prefix}🥦 (jumlah) Ⓟ
◪ ${prefix}🌽 (jumlah) Ⓟ
◪ ${prefix}🍠 (jumlah) Ⓟ
◪ ${prefix}🥕 (jumlah) Ⓟ
◪ ${prefix}🌶️ (jumlah) Ⓟ
◪ ${prefix}🍅 (jumlah) Ⓟ
◪ ${prefix}🥥 (jumlah) Ⓟ
◪ ${prefix}🍇 (jumlah) Ⓟ
◪ ${prefix}🥝 (jumlah) Ⓟ
◪ ${prefix}🍐 (jumlah) Ⓟ
◪ ${prefix}🍏 (jumlah) Ⓟ
◪ ${prefix}🍈 (jumlah) Ⓟ
◪ ${prefix}🍋 (jumlah) Ⓟ
◪ ${prefix}🍌 (jumlah) Ⓟ
◪ ${prefix}🍍 (jumlah) Ⓟ
◪ ${prefix}🍊 (jumlah) Ⓟ
◪ ${prefix}🍑 (jumlah) Ⓟ
◪ ${prefix}🍉 (jumlah) Ⓟ
◪ ${prefix}🍎 (jumlah) Ⓟ
◪ ${prefix}🍒️ (jumlah) Ⓟ
◪ ${prefix}🍓 (jumlah) Ⓟ
◪ ${prefix}🍄 (jumlah) Ⓟ
◪ ${prefix}🌻 (jumlah) Ⓟ
◪ ${prefix}🏵️ (jumlah) Ⓟ
◪ ${prefix}💮 (jumlah) Ⓟ
◪ ${prefix}🌸 (jumlah) Ⓟ
◪ ${prefix}🤯 (jumlah) Ⓟ
◪ ${prefix}🖕 (jumlah) Ⓟ
◪ ${prefix}🤙 (jumlah) Ⓟ
◪ ${prefix}💋 (jumlah) Ⓟ
◪ ${prefix}💦 (jumlah) Ⓟ
◪ ${prefix}💩 (jumlah) Ⓟ
◪ ${prefix}👿 (jumlah) Ⓟ
◪ ${prefix}👻 (jumlah) Ⓟ
◪ ${prefix}🤡 (jumlah) Ⓟ
◪ ${prefix}🤮 (jumlah) Ⓟ
◪ ${prefix}😇 (jumlah) Ⓟ
◪ ${prefix}😠 (jumlah) Ⓟ
◪ ${prefix}😭 (jumlah) Ⓟ
◪ ${prefix}😎 (jumlah) Ⓟ
◪ ${prefix}😜 (jumlah) Ⓟ
◪ ${prefix}😡 (jumlah) Ⓟ
◪ ${prefix}🤫 (jumlah) Ⓟ
◪ ${prefix}❤️ (jumlah) Ⓟ
◪ ${prefix}😱 (jumlah) Ⓟ
◪ ${prefix}🤣 (jumlah) Ⓟ
◪ ${prefix}😂 (jumlah) Ⓟ
◪ ${prefix}😘 (jumlah) Ⓟ
◪ ${prefix}💔 (jumlah) Ⓟ
◪ ${prefix}👊 (jumlah) Ⓟ
◪ ${prefix}virkon (jumlah) ⓟ
◪ ${prefix}ngecrash (jumlah) ⓟ
◪ ${prefix}autocrash (jumlah) ⓟ
`
}
global.groupmenu = (prefix, pushname) => {
return `Hai Kak ${pushname}
╔╤════════╫➼
║┝❏ Ⓞ: Owner Only
║┝❏ ⓟ: Premium Only
║┝❏ Ⓕ: Free
║┝❏ Ⓛ: Limit
║┝❏ Ⓖ: Group Only
║╰╼╾╼╾╼╾╼╾╼╾╼╾◯ 
╚════════════♰

▬▭▬▭▬𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮▭▬▭▬▭

◪ ${prefix}antilink (on/off) Ⓖ
◩ ${prefix}welcome (on/off) Ⓖ
◪ ${prefix}group (open/close) Ⓖ
◩ ${prefix}editinfo (open/close) Ⓖ
◪ ${prefix}add (628xx) Ⓖ
◩ ${prefix}kick (@tag/reply) Ⓖ
◪ ${prefix}promote (@tag/reply) Ⓖ
◩ ${prefix}demote (@tag/reply) Ⓖ
◪ ${prefix}hidetag (text) Ⓖ
◪ ${prefix}tagall (text) Ⓖ
◪ ${prefix}totag (reply) Ⓖ
◪ ${prefix}linkgc Ⓖ
◪ ${prefix}listadmin Ⓖ
◪ ${prefix}listonline Ⓖ
`
}
global.gemmenu = (prefix, pushname) => {
return `Hai Kak ${pushname}
╔╤════════╫➼
║┝❏ Ⓞ: Owner Only
║┝❏ ⓟ: Premium Only
║┝❏ Ⓕ: Free
║┝❏ Ⓛ: Limit
║┝❏ Ⓖ: Group Only
║╰╼╾╼╾╼╾╼╾╼╾╼╾◯ 
╚════════════♰

▬▭▬▭▬𝐆𝐚𝐦𝐞 𝐌𝐞𝐧𝐮▭▬▭▬▭

◪ ${prefix}tebak gambar Ⓛ
◪ ${prefix}tebak kata Ⓛ
◪ ${prefix}tebak kalimat Ⓛ
◪ ${prefix}tebak lirik Ⓛ
◪ ${prefix}tebak lontong Ⓛ
◪ ${prefix}tebak bendera Ⓛ
◪ ${prefix}asahotak Ⓛ
◪ ${prefix}kuismath Ⓛ
`
}
global.downmenu = (prefix, pushname) => {
return `Hai Kak ${pushname}
╔╤════════╫➼
║┝❏ Ⓞ: Owner Only
║┝❏ ⓟ: Premium Only
║┝❏ Ⓕ: Free
║┝❏ Ⓛ: Limit
║┝❏ Ⓖ: Group Only
║╰╼╾╼╾╼╾╼╾╼╾╼╾◯ 
╚════════════♰

▬▭▬▭▬𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮▭▬▭▬▭

◪ ${prefix}ytmp4 (link) Ⓛ
◪ ${prefix}ytmp3 (link) Ⓛ
◪ ${prefix}tiktok (link) Ⓛ
◪ ${prefix}tiktokmp3 (link) Ⓛ
◪ ${prefix}igdl (link) Ⓛ
◪ ${prefix}twitter (link) Ⓛ
◪ ${prefix}fbdl (link) Ⓛ
◪ ${prefix}xnxxdl (link) Ⓛ
`
}
global.netmenu = (prefix, pushname) => {
return `Hai Kak ${pushname}
╔╤════════╫➼
║┝❏ Ⓞ: Owner Only
║┝❏ ⓟ: Premium Only
║┝❏ Ⓕ: Free
║┝❏ Ⓛ: Limit
║┝❏ Ⓖ: Group Only
║╰╼╾╼╾╼╾╼╾╼╾╼╾◯ 
╚════════════♰

▬▭▬▭▬𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭 𝐌𝐞𝐧𝐮▭▬▭▬▭

◪ ${prefix}google Ⓛ
◪ ${prefix}yts Ⓛ
◪ ${prefix}play Ⓛ
◪ ${prefix}gimage Ⓛ
◪ ${prefix}pinterest Ⓛ
◪ ${prefix}ssweb Ⓛ
◪ ${prefix}translate Ⓛ
◪ ${prefix}xnxx Ⓛ
`
}
global.kanemenu = (prefix, pushname) => {
return `Hai Kak ${pushname}
╔╤════════╫➼
║┝❏ Ⓞ: Owner Only
║┝❏ ⓟ: Premium Only
║┝❏ Ⓕ: Free
║┝❏ Ⓛ: Limit
║┝❏ Ⓖ: Group Only
║╰╼╾╼╾╼╾╼╾╼╾╼╾◯ 
╚════════════♰

▬▭▬▭▬𝐊𝐚𝐧𝐞 𝐌𝐞𝐧𝐮▭▬▭▬▭

◪ ${prefix}mangkane1 Ⓕ 
◪ ${prefix}mangkane2 Ⓕ 
◪ ${prefix}mangkane3 Ⓕ 
◪ ${prefix}mangkane4 Ⓕ 
◪ ${prefix}mangkane5 Ⓕ 
◪ ${prefix}mangkane6 Ⓕ 
◪ ${prefix}mangkane7 Ⓕ 
◪ ${prefix}mangkane8 Ⓕ 
◪ ${prefix}mangkane9 Ⓕ 
◪ ${prefix}mangkane10 Ⓕ 
◪ ${prefix}mangkane11 Ⓕ 
◪ ${prefix}mangkane12 Ⓕ 
◪ ${prefix}mangkane13 Ⓕ 
◪ ${prefix}mangkane14 Ⓕ 
◪ ${prefix}mangkane15 Ⓕ 
◪ ${prefix}mangkane16 Ⓕ 
◪ ${prefix}mangkane17 Ⓕ 
◪ ${prefix}mangkane18 Ⓕ 
◪ ${prefix}mangkane19 Ⓕ 
◪ ${prefix}mangkane20 Ⓕ 
◪ ${prefix}mangkane21 Ⓕ 
◪ ${prefix}mangkane22 Ⓕ 
◪ ${prefix}mangkane23 Ⓕ 
◪ ${prefix}mangkane24 Ⓕ
`
}
global.convmenu = (prefix, pushname) => {
return `Hai Kak ${pushname}
╔╤════════╫➼
║┝❏ Ⓞ: Owner Only
║┝❏ ⓟ: Premium Only
║┝❏ Ⓕ: Free
║┝❏ Ⓛ: Limit
║┝❏ Ⓖ: Group Only
║╰╼╾╼╾╼╾╼╾╼╾╼╾◯ 
╚════════════♰

▬▭▬▭▬𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮▭▬▭▬▭

◪ ${prefix}sticker Ⓕ
◪ ${prefix}swm Ⓛ
◪ ${prefix}smeme Ⓛ
◪ ${prefix}hd Ⓛ
◪ ${prefix}qc Ⓛ
◪ ${prefix}toimg Ⓕ
◪ ${prefix}toonce Ⓕ
◪ ${prefix}togif Ⓕ
◪ ${prefix}tourl Ⓕ
◪ ${prefix}tomp3 Ⓕ
◪ ${prefix}tovn Ⓕ
◪ ${prefix}emojimix Ⓕ
◪ ${prefix}removebg Ⓛ
`
}
global.ownmenu = (prefix, pushname) => {
return `Hai Kak ${pushname}
╔╤════════╫➼
║┝❏ Ⓞ: Owner Only
║┝❏ ⓟ: Premium Only
║┝❏ Ⓕ: Free
║┝❏ Ⓛ: Limit
║┝❏ Ⓖ: Group Only
║╰╼╾╼╾╼╾╼╾╼╾╼╾◯ 
╚════════════♰

▬▭▬▭▬𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮▭▬▭▬▭

◪ ${prefix}public Ⓞ
◪ ${prefix}self Ⓞ
◪ ${prefix}listpc Ⓞ
◪ ${prefix}listgc Ⓞ
◪ ${prefix}ban add (628xxx) Ⓞ
◪ ${prefix}ban del (628xxx) Ⓞ
◪ ${prefix}listban Ⓞ
◪ ${prefix}addprem (@tag) Ⓞ
◪ ${prefix}delprem (@tag) Ⓞ
◪ ${prefix}listprem Ⓞ
◪ ${prefix}autobio (on/off) Ⓞ
◪ ${prefix}anticall (on/off) Ⓞ
◪ ${prefix}setcmd Ⓞ
◪ ${prefix}delcmd Ⓞ
◪ ${prefix}lockcmd Ⓞ
◪ ${prefix}listcmd Ⓞ
◪ ${prefix}setppbot (reply/foto) Ⓞ
◪ ${prefix}setnamebot (nama) Ⓞ
◪ ${prefix}setbiobot (text) Ⓞ
◪ ${prefix}creategc (namagc) Ⓞ
◪ ${prefix}getcase (case) Ⓞ
◪ ${prefix}bcgc (text) Ⓞ
◪ ${prefix}cekidgc Ⓞ
◪ ${prefix}jpm (text) Ⓞ
◪ ${prefix}jpm2 (reply) Ⓞ
◪ ${prefix}pushkontak (text) Ⓞ
◪ ${prefix}pushkontakv1 (idgc|text) Ⓞ
◪ ${prefix}savecontact Ⓞ
◪ ${prefix}savecontactv1 (idgc) Ⓞ
◪ ${prefix}shutdown Ⓞ
`
}
global.islammenu = (prefix, pushname) => {
return `Hai Kak ${pushname}
╔╤════════╫➼
║┝❏ Ⓞ: Owner Only
║┝❏ ⓟ: Premium Only
║┝❏ Ⓕ: Free
║┝❏ Ⓛ: Limit
║┝❏ Ⓖ: Group Only
║╰╼╾╼╾╼╾╼╾╼╾╼╾◯ 
╚════════════♰

▬▭▬▭▬𝐈𝐬𝐥𝐚𝐦 𝐌𝐞𝐧𝐮▭▬▭▬▭

◪ ${prefix}jadwalsholat Ⓕ
◪ ${prefix}asmaulhusna Ⓕ
◪ ${prefix}alquran Ⓕ
◪ ${prefix}alquranaudio Ⓕ
◪ ${prefix}kisahnabi Ⓕ
◪ ${prefix}listsurah Ⓕ
`
}
global.nsfwmenu = (prefix, pushname) => {
return `Hai Kak ${pushname}
╔╤════════╫➼
║┝❏ Ⓞ: Owner Only
║┝❏ ⓟ: Premium Only
║┝❏ Ⓕ: Free
║┝❏ Ⓛ: Limit
║┝❏ Ⓖ: Group Only
║╰╼╾╼╾╼╾╼╾╼╾╼╾◯ 
╚════════════♰

▬▭▬▭▬𝐍𝐬𝐟𝐰 𝐌𝐞𝐧𝐮▭▬▭▬▭

◪ ${prefix}ahegao ⓟ
◪ ${prefix}ass ⓟ
◪ ${prefix}bdsm ⓟ
◪ ${prefix}blowjob ⓟ
◪ ${prefix}cuckold ⓟ
◪ ${prefix}cum ⓟ
◪ ${prefix}eba ⓟ
◪ ${prefix}ero ⓟ
◪ ${prefix}femdom ⓟ
◪ ${prefix}foot ⓟ
◪ ${prefix}gangbang ⓟ
◪ ${prefix}gifs ⓟ
◪ ${prefix}masturbation ⓟ
◪ ${prefix}glasses ⓟ
◪ ${prefix}hentai ⓟ
◪ ${prefix}jahy ⓟ
◪ ${prefix}manga ⓟ
◪ ${prefix}neko ⓟ
◪ ${prefix}neko2 ⓟ
◪ ${prefix}nsfwloli ⓟ
◪ ${prefix}orgy ⓟ
◪ ${prefix}panties ⓟ
◪ ${prefix}pussy ⓟ
◪ ${prefix}tentacles ⓟ
◪ ${prefix}thighs ⓟ
◪ ${prefix}yuri ⓟ
◪ ${prefix}zettai ⓟ
`
}
global.panmenu = (prefix, pushname) => {
return `Hai Kak ${pushname}
╔╤════════╫➼
║┝❏ Ⓞ: Owner Only
║┝❏ ⓟ: Premium Only
║┝❏ Ⓕ: Free
║┝❏ Ⓛ: Limit
║┝❏ Ⓖ: Group Only
║╰╼╾╼╾╼╾╼╾╼╾╼╾◯ 
╚════════════♰

▬▭▬▭▬𝐏𝐚𝐧𝐞𝐥 𝐌𝐞𝐧𝐮▭▬▭▬▭

◪ ${prefix}addusr Ⓞ
◪ ${prefix}addsrv Ⓞ
◪ ${prefix}delusr Ⓞ
◪ ${prefix}delsrv Ⓞ
◪ ${prefix}createadmin Ⓞ
◪ ${prefix}1gb (user,tag) Ⓞ
◪ ${prefix}2gb (user,tag) Ⓞ
◪ ${prefix}3gb (user,tag) Ⓞ
◪ ${prefix}4gb (user,tag) Ⓞ
◪ ${prefix}5gb (user,tag) Ⓞ
◪ ${prefix}6gb (user,tag) Ⓞ
◪ ${prefix}7gb (user,tag) Ⓞ
◪ ${prefix}8gb (user,tag) Ⓞ
◪ ${prefix}unli (user,tag) Ⓞ
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})