import express from "express"
import cors from "cors"
import { connectDb } from "./config/db.js"
import foodRouters from "./routes/foodRouters.js"

//app config

const app = express()

const port = 4000

//middleware

app.use(express.json())
app.use(cors())

//db connection
connectDb();

//api endpoints
app.use("/api/food",foodRouters);

app.get("/",(req,res)=>{
    res.send("API working");
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})

//mongodb+srv://tarunruttala76:789456@cluster0.dqyfrcr.mongodb.net/?