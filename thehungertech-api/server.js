const express = require("express");
const app = express();
const path = require('path');
const db = require('./db')
let root = __dirname;


const port = 8000;

let cookieParser = require('cookie-parser');
app.use(cookieParser());

let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Headers","*")
//   })
app.use('/files', express.static(path.join(root,'public')))


let categoryAPiRoute = require('./apis/category.js');
app.use('/api/category', categoryAPiRoute);

let productAPiRoute = require('./apis/product.js');
app.use('/api/product', productAPiRoute);

let userAPiRoute = require('./apis/user.js');
app.use('/api/user', userAPiRoute);

let uploadAPiRoute = require('./apis/upload.js');
app.use('/api/upload', uploadAPiRoute);


app.listen(port, () => {
	console.log("server start hello");
});



