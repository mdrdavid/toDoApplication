import express from 'express'
import { deleteUser } from '../controllers/user.js'
import { getUser } from '../controllers/user.js'
import { update } from '../controllers/user.js'


const router = express.Router()

//get User
router.get("/find/:id", getUser)

//update User
router.put("/:id", update)

//delete User
router.delete("/:id", deleteUser)


export default router