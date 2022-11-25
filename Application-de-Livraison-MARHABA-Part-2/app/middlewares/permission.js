const ls = require('local-storage')
const authPermission = async ( req, res, next)=>{
    const token = ls('token')
    if(token) res.send("you're already connected")
    else next()

}
const userPermission = async ( req, res, next)=>{
    const token = ls('token')
    if(!token) res.send("you're not connected")
    else next()

}

module.exports = {
    authPermission,
    userPermission
}