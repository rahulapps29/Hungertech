var express = require("express");
let router = express.Router();
const Product = require("../models/product");

router.get("/getrecommendedprods", async (req, res) => {
	try {
		const products = await Product.find({ isRecommended: true });
		// res.set("Content-Type", "json/application");
		res.status(200).json(products);
	} catch (err) {
		res.status(500).json({ err: "Internal Server Error Occured" });
	}
});

router.get("/getproductdetail", async (req, res) => {
	try {
		const pId = req.query.pId;
		const pDetail = await Product.findOne({ _id: pId });
		res.status(200).json(pDetail);
	} catch (err) {
		res.status(500).json({ err: "Internal Server Error Occured" });
	}
});
// getproductdetail
router.get("/getAllproducts/:catId?", async (req, res) => {
	try {
		const catId = req?.params?.catId;
		const findQueryObj = catId ? { "cat._id": catId } : {};
		const products = await Product.find(findQueryObj);
		res.status(200).json(products);
	} catch (err) {
		res.status(500).json({ err: "Internal Server Error Occured" });
	}
});

router.post("/createProduct", async (req, res) => {
	try {
		const data = req.body;
		const newProduct = new Product(data);

		const product = await newProduct.save();

		res.status(200).json({ msg: "Product created Successfully" });
	} catch (err) {
		res.status(500).json({ err: "Internal Server Error Occured" });
	}
});
router.post("/updateproduct", async (req, res) => {
	try {
		const data = req.body;
		const catId = data._id;
		const updatedProd = await Product.findByIdAndUpdate(catId, data, {
			new: true,
			runValidators: true,
		});
		if (!updatedProd) {
			res.status(500).json({ err: "Category not found" });
		}
		res.status(200).json({ status: 200, msg: "Product updated Successfully" });
	} catch (err) {
		res.status(500).json({ err: err });
	}
});

router.post("/deleteProduct", async (req, res) => {
	try {
		const data = req.body;
		const pId = data.pId;
		const deletedProd = await Product.findByIdAndDelete(pId);

		if (!deletedProd) {
			res.status(500).json({ err: "Product not found" });
		}
		res.status(200).json({ status: 200, msg: "Product deleted Successfully" });
	} catch (err) {
		res.status(500).json({ err: err });
	}
});

module.exports = router;
