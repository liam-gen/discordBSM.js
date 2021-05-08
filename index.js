// Ceci est juste un exemple 

const client = require('./__init__.js')

const mySecret = 'VOTRE_TOKEN'

client.setStatus('ChatBot - $servers serveurs')
client.newCommand('Salut', 'Hey comment vas tu ?')
client.createBot(mySecret)
