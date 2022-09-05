
import mongoose from "mongoose";

//use mongoose to create todo schema
const ToDoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required:true,
    },
}, { timestamps:true })

export default mongoose.model("ToDo", ToDoSchema)