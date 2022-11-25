const db = require('../models')
const jwt = require('jsonwebtoken')
const ls = require('local-storage')

const User = db.user
const Role = db.role


const manager = async(req, res) => {
    const token = ls('token')
    const user_id = await jwt.verify(token, process.env.TOKEN_KEY)
    const user = await User.findById(user_id.id)
    const role_user = await Role.findById(user.roles)
    if(role_user.name != 'manager') throw Error ("you can't to access in this page")
    res.json({name: user.name, role: role_user.name})
}
const livreur = async(req, res) => {
    const token = ls('token')
    const user_id = await jwt.verify(token, process.env.TOKEN_KEY)
    const user = await User.findById(user_id.id)
    const role_user = await Role.findById(user.roles)
    if(role_user.name != 'livreur') throw Error ("you can't to access in this page")
    res.json({name: user.name, role: role_user.name})
}
const client = async(req, res) => {
    const token = ls('token')
    const user_id = await jwt.verify(token, process.env.TOKEN_KEY)
    const user = await User.findById(user_id.id)
    const role_user = await Role.findById(user.roles)
    if(role_user.name != 'client') throw Error ("you can't to access in this page")
    res.json({name: user.name, role: role_user.name})
}


module.exports = {
    manager,
    livreur,
    client
}