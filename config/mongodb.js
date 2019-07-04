const mongoose = require('mongoose')
// const { mongodb } = require('../.env')
const  mongodb  = 'mongodb+srv://agnsuporte:agnsuporte@cluster0-uo6in.mongodb.net/knowledge_stats?retryWrites=true&w=majority'

mongoose.connect(mongodb, { useNewUrlParser: true })
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })