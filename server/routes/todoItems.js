
import express from 'express'
import Todo from "../models/Todo.js";
import verifyToken from '../midleware/verifyToken.js';

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
router.get("/items", async(req,res, next)=>{
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

router.put("/items/:id", verifyToken, async (req, res, next)=>{
    console.log("request", req.user)
    
    try {
    // find the item by its id and update it
    const updateItem = await Todo.findByIdAndUpdate(req.params.id,
        
        {$set: req.body},
        // { new:true }
        )
        // find whether item exists and update before 
        
            res.status(200).json("Item updated")
       
} catch (error) {
    res.status(500).json({
        message: "unable to update item",
        error: error.message,
      })
    }

// }
// else{
//     return next(createError(403, "You can only update your item"))
// }

})

// delete item from database

router.delete("/items/:id", async (req, res, next)=>{
    // if(req.params?.id === req?.user?.id){
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
// }
// else{
//     return next(createError(403, "You can only delete your item"))
// }
    
})

export default router;