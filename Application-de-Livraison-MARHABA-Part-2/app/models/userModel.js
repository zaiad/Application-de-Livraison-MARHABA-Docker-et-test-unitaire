const mongoose = require('mongoose')

const User = mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ],
    verification: Boolean
})

module.exports = mongoose.model('user', User)
