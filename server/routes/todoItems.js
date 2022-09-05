
import express from 'express'
import Todo from "../models/Todo.js";

const router = express.Router()

//add todo item to the database

router.post("/items", async (req,res)=>{
try {
    console.log("request", req.body)
    const newItem = new Todo({
        todo:req.body.todo
    })
    // saving the item in the database
const saveNewItem = await newItem.save()
res.status(200).json("Item has been sucessfuly added")
} catch (error) {
    res.status(500).json({
        message: "Unable to add item",
        error: error.message,
      })
    }
})

// get data from the database
router.get("/items", async(req,res)=>{
    try {
        const getAllToDoItems = await Todo.find({
        
        })
        res.status(200).json(getAllToDoItems)
    } catch (error) {
        res.status(400).json({
            message: "item not found",
            error: error.message,
          })
        }
})

// update item in the database

router.put("/items/:id", async (req, res)=>{
try {
    // find the item by its id and update it
    const updateItem = await Todo.findByIdAndUpdate(req.params.id,
        {$set: req.body})
        res.status(200).json("Item updated")
} catch (error) {
    res.status(500).json({
        message: "unable to update item",
        error: error.message,
      })
    }
})

// delete item from database

router.delete("/items/:id", async (req, res)=>{
    try {
        // find item by id and delete it 
        const deletedItem = await Todo.findByIdAndDelete(req.params.id)
            res.status(200).json("Item deleted")
    } catch (error) {
        res.status(500).json({
            message: "unable to delete item",
            error: error.message,
          })
    }
    
})

export default router;