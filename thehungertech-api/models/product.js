const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    price:{
        type: Number,
        required: true
    },
    desc: {
        type: String,
    },
    image: {
        type: String,
    },
    inStock : {
        type: Boolean,
        default:true
    },
    isRecommended : {
        type: Boolean,
        default: false
    },
    cat:{
        type: Array,
        default:[]
    }
})
const Product = mongoose.model('Products',productSchema);
module.exports = Product;