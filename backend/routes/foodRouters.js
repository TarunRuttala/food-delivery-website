import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";


const foodRouters = express.Router();

//Image Storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouters.post("/add",upload.single("image"),addFood);
foodRouters.get("/list",listFood);
foodRouters.post("/remove",removeFood);




export default foodRouters;