
import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import todoItemRoute from "./routes/todoItems.js"
import useRoutes from "./routes/auth.js"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

//connect to mongodb database
const connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("Connected to MongoDB")
    })
    .catch((err) =>{
        throw err;
    });
}

//use express.josn() to get data into json format
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use("/api", todoItemRoute)
app.use("/api/auth", useRoutes)


<<<<<<< HEAD
//connect to sever 
const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
=======
const port = process.env.PORT || 5500
//connect to sever 
app.listen(port, ()=>{
>>>>>>> development
connect()
console.log(`Server Running at Port ${port}`)})
