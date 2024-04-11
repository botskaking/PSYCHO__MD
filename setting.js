/*
WHATSAPP BOT BY PSYCHO_MD
WHATSAPP - 94775341543

ℹ️ SPECIAL INFORMATION ℹ️

Welcome 

Information provided to you.
If you use true or false
true = if you want to do that task
false = return if you don't want to do the task.

*/

const fs = require('fs')
const chalk = require('chalk')

/*
⚙️ PSYCHO_MD_BOT_SETTING ⚙️
*/
//👇 if you need seen massage use " true " ,
global.READ_MASSAGE = false
//👇 enable DISABLE Girls Voice Reply ,
global.VOICE_REPLY = false
//👇 Do you want show time on your bio use "true" want DISABLE use "false" , 
global.AUTO_BIO = false
//👇 Inbox massage block PM block , 
global.INBOX_BLOCK = false
//👇 Auto react  ,
global.AUTO_REACT = false
//👇 Bad word Auto delete ( you must add bad words )  
global.ANTI_BADWORD = false
//👇 Kick And Auto Delete Group link Senders , 
global.ANTI_G_LINK = false
//👇 212 Number block
global.NUMBER_212_BLOCK = false
//👇 Send Welcome ( true or false )  
global.SEND_WELCOME = false
global.SEND_GOODBYE = false
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = false
//👇 Put Bot Offline
global.BOT_OFFLINE = false
//👇 Only PreFix [ true / false ]
global.ONLY_PREFIX = false
//👇 This uplaod youtube videos without limit ⚠️ if you use this you must have paid sever
global.UPLOAD_MAX = false
//👇 Desabale Bot inbox
global.DISABLE_INBOX = false 
//👇 DISABLE inbox message send 
global.DISABLE_INBOX_MESSAGE_SEND = false
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = false
//👇 Only Inbox Use ( Only PM Work )
global.INBOX_ONLY_WORK = false
//👇 Auto ChatGPT ( You Must put CHATGPT API KEY For use this )
global.AUTO_OPEN_AI = false
//👇 Bot On Privet
global.PRIVET_BOT = false
//👇 DISABLE Bot Commands But Others Are Working 
global.DISABLE_COMMANDS = false
//👇 DISABLE Bot Commands On Message Send On Off
global.DISABLE_COMMAND_MESSAGE_SEND = false 
global.AUTO_SEEN_STATUS = true



/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['94775341543'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙿𝙾𝚆𝙴𝚁𝙳   𝙱𝚈  𝙿𝚂𝚈𝙲𝙷𝙾_𝙱𝙰𝙱𝙰   ˣˣˣ'
//👇 Your Bot Name
global.botnma =  'ᴩꜱʏᴄʜᴏ 𝘔𝘋 🚫' 
//👇 Your name
global.ownernma =  '𝕄ℝ.  ᴩꜱʏᴄʜᴏ ˣˣˣ' 
//👇 Sticker Author Name
global.packname =  'ᴩꜱʏᴄʜᴏ 𝘔𝘋 🚫' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK  BY 𝘗𝘚𝘠𝘊𝘏𝘖 𝘔𝘋 🚫!!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '💻'
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Song...ᴩꜱʏᴄʜᴏ 𝘔𝘋 🚫```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...ᴩꜱʏᴄʜᴏ 𝘔𝘋 🚫```'
//👇 Menu imoji 
global.MENU_IMOJI = '🚫'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = 'apikey get on remoebg.com'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://telegra.ph/file/8b72c528726bfe8eb6d70.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `*මම මැරිලා නැ රත්තරන් ❤️මන් online ඉන්නවා 🚫

🧸̶⃮⃖🤍̶⃮⃖name:|| `𝙿𝙾𝚆𝙴𝚁𝙳   𝙱𝚈  𝙿𝚂𝚈𝙲𝙷𝙾_𝙱𝙰𝙱𝙰    ˣˣˣ`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || `......................𝗪𝗘𝗟𝗖𝗢𝗠𝗘...........

මහ ගොඩක් වැඩ අස්සෙ වුනත් තමන් වෙනුවෙන් පුංචිම තත්පර කිහිපයක් කැපකරන ආදරයක් කියන්නෙම රත්තරං වලටත් වඩා වටින දෙයක්... ✨🤍

 *_ඒක නිසා ඒ ආදරේ පරිස්සම් කරගන්න..☺️💗`
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || `https://telegra.ph/file/a408f010898fc10cec0e1.jpg`
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || `https://telegra.ph/file/1f74d7b49039f54954ab5.jpg`
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || `......................GOOD BYE...........

මහ ගොඩක් වැඩ අස්සෙ වුනත් තමන් වෙනුවෙන් පුංචිම තත්පර කිහිපයක් කැපකරන ආදරයක් කියන්නෙම රත්තරං වලටත් වඩා වටින දෙයක්... ✨🤍

 *_ඒක නිසා ඒ ආදරේ පරිස්සම් කරගන්න..☺️💗`
//👇 DISABLE download words
global.IMG_BLOCKER = ["xxx","sex","mia"]
//👇 Sex  video Download Allowed Groups
global.SEX_DOWNLOAD_GROUPS = ['120363147404508506@g.us']
//👇 Your Bot Group Link
global.GROUP_LINK = https://chat.whatsapp.com/D4eytSR8uFxG1DkOpnlFyP'
/*

   🍃 OTHER 🍃

*/
global.PORT = process.env.PORT ||  '8000'
global.zenzapi = '01ABEB1E11'
/*

💬 MESSAGE 💬

*/
global.mess = {
    success: '✅ Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*♲ Please Wait ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    IMG_BLOCK : "This Word is Ban from image downloader",
    DISABLE_INBOX : "Inbox DISABLE By Bot Owner Please Only Use Groups",
    DISABLE_CMD : "🚫 Commands Are DISABLE by owner",
    BAD_DETECT : '',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}




//other
global.pemilik = ['94775341543'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94775341543'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'PSYCHO_MD' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '👽'
global.weem = 'PSYCHO_BABA'

global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//global.alivelogo = `https://telegra.ph/file/8b72c528726bfe8eb6d70.jpg`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
