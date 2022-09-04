
import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

const app = express()

dotenv.config()
const connect = ()=>{
    mongoose.connect("mongodb+srv://admin:admin@onlineshop.x3pfm.mongodb.net/todo?retryWrites=true&w=majority").then(()=>{
        console.log("Connected to MongoDB")
    })
    .catch((err) =>{
        throw err;
    });
}
const PORT = 5000

app.get("/", (req, res)=>{
    res.send("hello world")
})
app.listen(process.env.PORT, ()=>{
connect()
console.log(`Server Running at Port ${PORT}`)})
