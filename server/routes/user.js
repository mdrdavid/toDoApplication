import express from 'express'
// import{ deleteUser, getUser, update} from "../controllers/auth.js"



const router = express.Router()

//get User
router.get("/find/:id" )

//update User
router.put("/:id")

//delete User
router.delete("/:id")


export default router