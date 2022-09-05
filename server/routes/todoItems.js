
import express from 'express'
import Todo from "../models/Todo.js";
import verifyToken from '../midleware/verifyToken.js';
import { createError } from '../error.js';

const router = express.Router()
//add todo item to the database
router.post("/items", async (req, res) => {
    try {
        console.log("request", req.body)
        const newItem = new Todo({
            todo: req.body.todo
        })
        // saving the item in the database
        const saveNewItem = await newItem.save()
        res.status(200).json("Item has been sucessfuly added")
    } catch (error) {
        return next(createError(500, "Unable to add item"))
    }
})

// get data from the database
router.get("/items", async (req, res, next) => {
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
router.put("/items/:id", verifyToken, async (req, res, next) => {
    console.log("request", req.user)

    try {
        // find the item by its id and update it
        const updateItem = await Todo.findById(req.params.id)
        if (!updateItem) return next(createError(404, "Item not found"))
        console.log("usee",updateItem)
        if (req.user.id === req.body.id) {
            const updatedItem = await Todo.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body
                },
                { new: true }
            );
            res.status(200).json(updatedItem).send("Item updated")
            }
        else {
            return next(createError(403, "Item does not exist"))
        }
    } catch (error) {
        return next(createError(403, "Unable to update item"))
    }

})

// delete item from database
router.delete("/items/:id", async (req, res, next) => {
    try {
        const deletedItem = await Todo.findById(req.params.id)
        if (!deletedItem) return next(createError(404, "Item not found"))
        if (req.user.id === req.body.id) {
            // find item by id and delete it 
            const deleted = await Todo.findByIdAndDelete(req.params.id);
            res.status(200).json(deleted).send("Item deleted")
        } else {
            return next(createError(403, "You can update your item"))
        }
    } catch (error) {
        return next(createError(403, "Unable to delete item"))
    }
})

export default router;