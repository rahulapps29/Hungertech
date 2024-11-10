const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    desc: {
        type: String,
    },
    image: {
        type: String,
        required:true
    },
    isFeatured : {
        type: Boolean,
        default: true
    }
})
const Category = mongoose.model('Categories',categorySchema);
module.exports = Category;