

const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1803545730:AAHK1_tmjoyI6OgalATl-la9H-nVmw7Sa9A'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from bd11k1, bot says: "Hi, ${msg.from.first_name}"`)
    }
)