import mongoose from "mongoose";

export const connectDb = async () =>{
    await mongoose.connect('mongodb+srv://tarunruttala76:789456@cluster0.dqyfrcr.mongodb.net/food-del').then(()=>console.log("Db Connected"));
}