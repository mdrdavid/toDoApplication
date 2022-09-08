
import express from 'express'
import Todo from "../models/Todo.js";
import verifyToken from '../midleware/verifyToken.js';
import { createError } from '../error.js';

const router = express.Router()
//add todo item to the database
router.post("/items", verifyToken, async (req, res, next) => {
    try {
        const userId = req.user.payload.id
        const newItem = new Todo({
            todo: req.body.todo,
            userId,
            completed: false
        })
        // saving the item in the database
        const saveNewItem = await newItem.save()
        res.status(200).json({ data: saveNewItem, message: "Item has been sucessfuly added" })
    } catch (error) {
        console.log("error", JSON.stringify(error))
        return next(createError(500, "Unable to add item"))
    }
})

// get data from the database
router.get("/items", verifyToken, async (req, res, next) => {
    try {
        const userId = req.user.payload.id
        const getAllToDoItems = await Todo.find({
            userId
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
router.put("/items/:id", verifyToken, async (req, res, next) => {
    try {
        const userId = req.user.payload.id
        const _id = req.params.id
        console.log("body", req.body)

        // find the item by its id and update it
        const itemToUpdate = await Todo.find({ _id, userId })
        if (!itemToUpdate) { return next(createError(404, "Item not found")) }
        else {
            const updatedItem = await Todo.findByIdAndUpdate(
                _id,
                {
                   ...req.body 
                },
            );
            res.status(200).json({ data: updatedItem, message: "Item updated" })
        }
    } catch (error) {
        return next(createError(403, "Unable to update item"))
    }

})

// delete item from database
router.delete("/items/:id", verifyToken, async (req, res, next) => {
    const userId = req.user.payload.id
    const _id = req.params.id
    try {
        const item = await Todo.find({ _id, userId })
        if (!item) { return next(createError(404, "Item not found")) }
        else {
            // find item by id and delete it 
            await Todo.findByIdAndDelete({ _id });
            res.status(200).json({ message: "Item deleted" })
        }
    } catch (error) {
        console.log("error", JSON.stringify(error))
        return next(createError(500, "Unable to delete item"))
    }
})

export default router;