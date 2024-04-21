let mongoose = require("mongoose")
let schema1 = new mongoose.Schema({
    name:String,
    email: String,
    cnfPassword: String,
   
})

let registeredUsers = mongoose.model("t_login", schema1)

module.exports = registeredUsers;