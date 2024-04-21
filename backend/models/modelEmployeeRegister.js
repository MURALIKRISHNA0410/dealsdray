let mongoose = require("mongoose")
let schema1 = new mongoose.Schema({
    name:String,
    email: String,
    phone : Number,
    designation: String,
    gender: String,
    image: String,
    course : {
        type : Array,
        default : []
    },
})

let modelEmployeeRegister = mongoose.model("t_employee", schema1)

module.exports = modelEmployeeRegister;