function handler(m) {
  this.reply(m.chat, 'ðð®ðð ðð ð ð¦ð£ ðð¦ð¡ð¡ð ð£ð¥ ð¾ð£ð ð¦ð¡ : https://chat.whatsapp.com/KK2nN4ZLKzrLOPjr7QRCIsðð®', m)
}
handler.help = ['support']
handler.tags = ['info']

handler.command = /^(Support|support)$/i

module.exports = handler
