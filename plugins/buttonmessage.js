const {
  MessageType
} = require("@adiwajshing/baileys")
let PhoneNumber = require('awesome-phonenumber')
let handler = m => m
let {
  performance
} = require('perf_hooks')
let {
  sizeFormatter
} = require('human-readable')

handler.before = async (m, {
  isAdmin,
  isBotAdmin
}) => {
// send a owner no message!
  if (m.isBaileys && m.fromMe) return true
  if(m.mtype == "buttonsResponseMessage"){
    if(m.msg.selectedButtonId == "owner"){
        conn.sendContact(m.chat, '+919389379221', 'Kakashi', m)
     
  
  
 // send whoami msg!
        }else  if(m.msg.selectedButtonId == "whoami"){
        conn.reply(m.chat, 'šš®š šš”ššš®', m)
         // send ls msg!
        }else  if(m.msg.selectedButtonId == "ls"){
        conn.reply(m.chat, '', m)
 // send pwd msg!
        }else  if(m.msg.selectedButtonId == "pwd"){
        conn.reply(m.chat, 'šš®/ššššš¤šššš®', m)
        


        // send info msg!
        }else  if(m.msg.selectedButtonId == "info"){
        conn.reply(m.chat, 'šš®šššš¤ š¹š š„ šš¤ šššš ššŖ ššššš¤šš.\nš®ÉŖį“ ÉŖź± į“É“į“į“Ź-į“į“É“ź±į“Źį“į“į“ÉŖį“É“ Źį“į“.\nš®į“Źį“į“ÉŖį“ É¢į“į“ź± į“į“ É“į“Źį“į“į“į“į“ Źį“į“ ź°ÉŖŹį“ź± į“É“į“ ššššš¤šš.\nšš®', m)
        // send a donations message!
          }else  if(m.msg.selectedButtonId == "donations"){
        conn.reply(m.chat,'šš®į“į“É“į“į“ÉŖį“É“ź± į“Źį“ É“į“į“į“į“į“ į“į“ į“į“É¢Źį“į“į“ Źį“į“ ź±į“Źį“ į“Źź± į“É“į“ į“į“ į“É“į“į“į“Źį“É¢į“ į“į“į“į“į“É“ÉŖį“Ź\nš®ź°į“Ź į“į“É“į“į“ÉŖį“É“ź± į“į“ź±ź±į“É¢į“ į“į“”É“į“Ź : wa.me/+919389379221\nšš®', m)
        // send a bittentechcourses1 message!
          }else  if(m.msg.selectedButtonId == "rules"){
        conn.reply(m.chat,'šš®1) į“į“É“į“ ź±į“į“į“ ÉŖÉ“ Źį“į“ ÉŖÉ“Źį“xšš®\nšš®2)į“į“į“į“ 1 į“ÉŖÉ“į“į“į“ ŹŹį“į“į“ Źį“ź°į“Źį“ į“ź±ÉŖÉ“É¢ É“į“xį“ į“į“į“į“į“É“į“šš®\nšš®3)į“ź±ÉŖÉ“É¢ į“į“į“į“į“É“į“ź± į“į“É“į“ÉŖÉ“į“į“į“ź±ŹŹ į“”ÉŖį“Źį“į“į“ ŹŹį“į“į“ į“į“į“ź±į“ į“ŹŹį“Źź± ÉŖÉ“ Źį“į“ į“É“į“ į“į“Ź į“į“ź±į“Źį“Ź Źį“į“ šš®\nšš®4)Źį“į“ į“į“É“ į“ź±į“ Źį“į“ ÉŖÉ“ ÉŖÉ“Źį“x į“į“į“šš®\n', m)
        // send a wiresharks course message!
          }else  if(m.msg.selectedButtonId == "support"){
        conn.reply(m.chat,'šš® šš šš šš¦š”š”š š£š„ š¾š£š š¦š” :\n https://chat.whatsapp.com/KK2nN4ZLKzrLOPjr7QRCIs', m)
         // send a hackingcourses message!
        }else  if (m.msg.selectedButtonId == "antivulgarenable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiVulgar = true;
                  conn.reply(m.chat, "Successfully enabled antivulgar for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }
        } else if (m.msg.selectedButtonId == "speed") {
          conn.reply(m.chat, "speed")

      } else if (m.msg.selectedButtonId == "antivulgardisable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiVulgar = false;
                  conn.reply(m.chat, "Successfully disabled antivulgar for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antilinkenable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiLink = true;
                  conn.reply(m.chat, "Successfully enabled antilink for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antilinkdisable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiLink = false;
                  conn.reply(m.chat, "Successfully disabled antilink for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antistickerenable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiSticker = true;
                  conn.reply(m.chat, "Successfully enabled Antisticker for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antistickerdisable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiSticker = false;
                  conn.reply(m.chat, "Successfully disabled antisticker for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antigrouplinkenable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiGroupLink = true;
                  conn.reply(m.chat, "Successfully enabled antigrouplink for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antigrouplinkdisable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiGroupLink = false;
                  conn.reply(m.chat, "Successfully disabled antigrouplink for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }
        // send a profile message!
      }else if(m.msg.selectedButtonId == "profile"){
        let pp = './src/avatar_contact.png'
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        try {
          pp = await conn.getProfilePicture(who)
        } catch (e) {
      
        } finally {
          let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
          let { name, lastclaim, registered, regTime, age } = global.DATABASE.data.users[who]
          let username = conn.getName(who)
          let str = `
     šš®ššššš¤ššš®š\n
šš®É“į“į“į“: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\nšš®į“Źį“į“į“: ' + about : ''}šš®\n
šš®É“į“į“Źį“Ź: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}šš®\n
šš®ŹÉŖÉ“į“: https://wa.me/${who.split`@`[0]}${registered ? '\nAge: ' + age : ''}\n
šš®Źį“É¢ÉŖź±į“į“Źį“į“: ${registered ? 'šYes š(' + new Date(regTime) + ')': 'šNoš'}${lastclaim > 0 ? '\nšš®Źį“ź±į“ į“Źį“ÉŖį“: ' + new Date(lastclaim) : ''}šš®\n
š®š
`.trim()
          let mentionedJid = [who]
          conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
        }
      }
  }
}

module.exports = handler
