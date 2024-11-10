var express = require("express");
const bcrypt = require("bcrypt");
let router = express.Router();
const User = require("../models/user");
const { generateJwtToken,jwtAuthMiddleware } = require("../utilities/jwt");

router.post("/signup", async (req, res) => {
	try {
		let data = req.body;

		bcrypt.hash(data.password, 8, async function (err, hash) {
			if (err) {
				res.status(500).json({ err: err });
			} else {
				data = { ...data, password: hash };
				const newUser = new User(data);
				const userCreated = await newUser.save();
				const tokenPayload = {
					id: userCreated._id,
					email: data.email,
					fName: data.fName,
				};
				const token = generateJwtToken(tokenPayload);
				res.status(200).json({
					msg: "user signed up Successfully",
					token: token,
					user:{
						email:userCreated.email,
						fName:userCreated.fName,
						lName:userCreated.lName,
						phone:userCreated.phone
					}
				});
			}
		});
	} catch (err) {
		res.status(500).json({ err: err });
	}
});
router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email: email });
		if (!user) {
			res.status(401).json({
				error: "user not found",
			});
		} else {
			const validPassword = await bcrypt.compare(password, user.password);
			if (validPassword) {
				const tokenPayload = {
					id: user._id,
					email: user.email,
					fName: user.fName,
				};
				const token = generateJwtToken(tokenPayload);
				const user1 = await User.findOne({ email: user.email },{password:0});
				res.status(200).json({
					msg: "user signed in Successfully",
					token: token,
					user:user1
				});
			} else {
				res.status(401).json({
					error: "invalid username or password",
				});
			}
		}
	} catch {
		res.status(500).json({
			error: "Internal Server Error",
		});
	}
});
router.get('/userprofile',jwtAuthMiddleware, async (req,res) => {
	const user = await User.findOne({ id: req.user._id , email:req.user.email},{password:0});
	res.status(200).json({user:user})
})

module.exports = router;
