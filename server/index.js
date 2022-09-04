
import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import todoItemRoute from "./routes/todoItems.js"
// import useRoutes from "./routes/user.js"

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



app.get("/", (req, res)=>{
    res.send("hello world")
})

//use express.josn() to get data into json format
app.use(express.json())

app.use("/", todoItemRoute)
// app.use("/api/users", useRoutes)



const PORT = 5000
//connect to sever 
app.listen(process.env.PORT || 5500, ()=>{
connect()
console.log(`Server Running at Port ${PORT}`)})
