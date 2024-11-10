var express = require("express");
let router = express.Router();

const mockOffers = [{
    offer_id:1,
    name:'North Indian',
    image:'http://localhost:8000/files/assets/images/north-indian-food.png',
    desc:'this is description for north Indian foods'
},
{
    offer_id:22,
    name:'Ice cream',
    image:'http://localhost:8000/files/assets/images/ice-cream.jpg',
    desc:'this is description for Ice cream'
},
{
    offer_id:23,
    name:'Biryani',
    image:'http://localhost:8000/files/assets/images/biryani.jpg',
    desc:'this is description for Pizza'
},
{
    offer_id:2,
    name:'Pizza',
    image:'http://localhost:8000/files/assets/images/pizza.jpg',
    desc:'this is description for Pizza'
},
{
    offer_id:3,
    name:'Burger',
    image:'http://localhost:8000/files/assets/images/burger.jpg',
    desc:'this is description for Burger'
},
{
    offer_id:4,
    name:'Rolls',
    image:'http://localhost:8000/files/assets/images/rolls.jpg',
    desc:'this is description for Rolls'
},

{
    offer_id:6,
    name:'Cakes',
    image:'http://localhost:8000/files/assets/images/cake.jpg',
    desc:'this is description for Cakes'
},
{
    offer_id:5,
    name:'Chinese',
    image:'http://localhost:8000/files/assets/images/food.jpg',
    desc:'this is description for Chinese'
},
]

router.get("/getcategories", (req, res) => {
	res.set("Content-Type", "json/application");
	res.json(mockRecommendedCats);
});

router.post("/createcategory", (req, res) => {
	res.set("Content-Type", "json/application");
    const resp = mockRecommendedCats;
	res.send(resp);
});

module.exports = router;