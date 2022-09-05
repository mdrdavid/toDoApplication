
import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import todoItemRoute from "./routes/todoItems.js"
import useRoutes from "./routes/auth.js"

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
app.use(express.json())
app.use("/api", todoItemRoute)
app.use("/api/auth", useRoutes)


//connect to sever 
const PORT = process.env.PORT || 8000
app.listen(PORT, ()=>{
connect()
console.log(`Server Running at Port ${PORT}`)})
