const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DATA_BASE, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('connected...')
    })
    .catch(error=>{
        console.log('connection error', error)
    })