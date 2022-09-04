
import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required:true,
    },
}, { timestamps:true })

export default mongoose.model("ToDo", UserSchema)