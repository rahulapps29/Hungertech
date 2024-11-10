var express = require("express");
let router = express.Router();
const Category = require("../models/category");



router.get("/getcategories", async (req, res) => {
	try {
		const categories = await Category.find();
		res.status(200).json(categories);
	} catch (err) {
		res.status(500).json({ err: "Internal Server Error Occured" });
	}
});
router.get("/getcategorydetail", async (req, res) => {
	try {
		const catId = req.query.catId
		const categoryDetail = await Category.findOne({_id:catId})
		res.status(200).json(categoryDetail);
	} catch (err) {
		res.status(500).json({ err: "Internal Server Error Occured" });
	}
});

router.post("/createcategory", async (req, res) => {
	try {
		const data = req.body;
		const newCategory = new Category(data);
		await newCategory.save();
		res.status(200).json({ msg: "category created Successfully" });
	} catch (err) {
		res.status(500).json({ err: err });
	}
});

router.post("/updatecategory", async (req, res) => {
	try {
		const data = req.body;
		const catId = data._id
		const updatedCat = await Category.findByIdAndUpdate(catId,data,{
			new:true,
			runValidators:true
		})
		if(!updatedCat){
			res.status(500).json({ err: "Category not found" });
		}
		res.status(200).json({ status:200,msg: "category updated Successfully" });
	} catch (err) {
		res.status(500).json({ err: err });
	}
});
router.post("/deleteCat", async (req, res) => {
	try {
		const data = req.body;
		const catId = data.catId;
		const deletedCat = await Category.findByIdAndDelete(catId)
		
		if(!deletedCat){
			res.status(500).json({ err: "Category not found" });
		}
		res.status(200).json({ status:200,msg: "category deleted Successfully" });
	} catch (err) {
		res.status(500).json({ err: err });
	}
});

module.exports = router;
