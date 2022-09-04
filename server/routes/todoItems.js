
import express from 'express'
import Todo from "../models/Todo.js";

const router = express.Router()

//add todo item to the database

router.post("/api/item", async (req,res)=>{
try {
    const newItem = new Todo({
        todo:req.body.todo
    })
    // saving the item in the database
const saveNewItem = await newItem.save()
res.status(200).json("Item has been sucessfuly added")
} catch (error) {
    
}
})

// get data from the database
router.get("/api/items", async(req,res)=>{
    try {
        const getAllToDoItems = await Todo.find({
        
        })
        res.status(200).json(getAllToDoItems)
    } catch (error) {
        
    }
})

// update item in the database

router.put("/api/item/:id", async (req, res)=>{
try {
    // find the item by its id and update it
    const updateItem = await Todo.findByIdAndUpdate(req.params.id,
        {$set: req.body})
        res.status(200).json("Item updated")
} catch (error) {
    
}
})

// delete item from database

router.delete("/api/item/:id", async (req, res)=>{
    try {
        // find item by id and delete it 
        const deletedItem = await Todo.findByIdAndDelete(req.params.id)
            res.status(200).json("Item deleted")
    } catch (error) {
        
    }
    
})

export default router;