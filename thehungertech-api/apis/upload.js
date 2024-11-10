var express = require("express");
let router = express.Router();
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
         cb(null, "./public/assets/images/")

    },
    filename: (req,file,cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
})
const upload = multer({storage: storage})

router.post('/', upload.single('image') ,async (req,res)=>{
    res.status(200).json({msg:'File uploaded successfully',filePath:`files/assets/images/${req.file.filename}`});
})
module.exports = router;