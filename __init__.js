// NE PAS TOUCHER !

const discord = require('discord.js')
const client = new discord.Client()

let commands = { 'discordBSM': 'https://github.com/liam-gen/discordBSM.js' }

client.on('message', message => {
    for (message.content.split(" ")[0] in Object.keys(commands)){
        code = commands[message.content.split(" ")[0]]
        message.channel.send(code)
    }
})
function newCommand(name, code){
    commands[name] = code
}

function setStatus(name){
    client.on('ready', () => {
        status = name.replace('$servers', client.guilds.cache.size)
        client.user.setActivity(`${status}`)
    })
}

function createBot(bot_token){
    client.on('ready', () => {
        console.log(`Logged has ${client.user.tag}`)
    })
    client.login(bot_token)
}

module.exports.createBot = createBot
module.exports.setStatus = setStatus
module.exports.newCommand = newCommand
