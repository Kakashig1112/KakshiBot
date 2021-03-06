let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
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
   ๐๐ฎ๐๐๐๐๐ค๐๐ ๐น๐ ๐ฅ๐ฎ๐\n
๐๐ฎษดแดแดแด: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\n๐๐ฎแดสแดแดแด: ' + about : ''}๐๐ฎ\n
๐๐ฎษดแดแดสแดส: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}๐๐ฎ\n
๐๐ฎสษชษดแด: https://wa.me/${who.split`@`[0]}${registered ? '\nAge: ' + age : ''}\n
๐๐ฎสแดษขษช๊ฑแดแดสแดแด: ${registered ? '๐Yes ๐(' + new Date(regTime) + ')': '๐No๐'}${lastclaim > 0 ? '\n๐๐ฎสแด๊ฑแด แดสแดษชแด: ' + new Date(lastclaim) : ''}๐๐ฎ\n
๐ฎ๐
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile$/i
module.exports = handler

