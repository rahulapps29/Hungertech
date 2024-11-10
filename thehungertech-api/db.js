const mongoose = require('mongoose');
const constants = require('./constants'); 

const  mongoUrl = constants.MONGO_URI

mongoose.connect(mongoUrl)

const db = mongoose.connection;
db.on('connected', ()=>{
    console.log('connected to mongoDB server')
})
db.on('disconnected', ()=>{
    console.log('mongo disconnected')
})
db.on('error', (err)=>{
    console.log('mongo err occured::',err)
})

module.exports = db;
