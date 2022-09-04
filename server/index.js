
import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import useRoutes from "./routes/user.js"

const app = express()

dotenv.config()
const connect = ()=>{
    mongoose.connect("mongodb+srv://admin:admin@onlineshop.x3pfm.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("Connected to MongoDB")
    })
    .catch((err) =>{
        throw err;
    });
}

// app.get("/", (req, res)=>{
//     res.send("hello world")
// })
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/users", useRoutes)

const PORT = 5000
app.listen(process.env.PORT, ()=>{
connect()
console.log(`Server Running at Port ${PORT}`)})
