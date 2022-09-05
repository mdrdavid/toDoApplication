
import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import todoItemRoute from "./routes/todoItems.js"
import useRoutes from "./routes/auth.js"

const app = express()

dotenv.config()

//connect to mongodb database
const connect = ()=>{
    mongoose.connect("mongodb+srv://davidm:davidm@todolistapp.to1kqjy.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("Connected to MongoDB")
    })
    .catch((err) =>{
        throw err;
    });
}

// create routes




//use express.josn() to get data into json format
app.use(express.json())
app.use("/api", todoItemRoute)
app.use("/api/auth", useRoutes)




const PORT = process.env.PORT || 8000
//connect to sever 
app.listen(PORT, ()=>{
connect()
console.log(`Server Running at Port ${PORT}`)})
