const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let des = `*👋 Hello ${pushname}*👋 *HELLO, I AM SENUL-MD I AM ALIVE NOW !*`
return await conn.sendMessage(from,{image: {url: `https://i.imgur.com/qtFG9Y6.jpeg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})