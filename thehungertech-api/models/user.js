const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fName: {
        type:String,
        required:true
    },
    lName: {
        type:String,
    },
    email: {
        type: String,
        required:true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required:true,
        unique: true
    }
})
const User = mongoose.model('User',userSchema);
module.exports = User;