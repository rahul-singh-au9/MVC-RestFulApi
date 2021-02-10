// this is similar to userControllers.js and userRouters.js
// only differnce is in this i did router and request at the same place
// in userControllers.js and userRouter.js i followed MVC pattern
// you can skip this file i am not using it anywhere in the code/program

import express from "express";
import User from "../models/User.js"
const userRouter = new express.Router();


// POST REQUESTS
userRouter.post("/", async(req, res) => {

  try{
    console.log(req.body)
    const createUser = new User(req.body)
    const insertUser = await createUser.save();
    res.status(201).send(insertUser)
  }
  catch(err){
    res.status(500).send(err)
  }

})

// GET REQUESTS
userRouter.get("/", async(req, res) => {

  try{
    const users = await User.find({})
    res.send(users)
  }
  catch(err){
    res.status(400).send(err)
  }
})

// GET INDIVISUAL REQUEST
userRouter.get("/:id", async(req, res) => {

  try{
    const _id = req.params.id
    const user = await User.findById({_id})
    res.send(user)
  }
  catch(err){
    res.status(400).send(err)
  }
})


// UPDATE INDIVISUAL RECORD
userRouter.patch("/:id", async(req, res) => {

  try{
    const _id = req.params.id
    const user = await User.findByIdAndUpdate(_id, req.body, {new: true});
    res.send(user)
  }
  catch(err){
    res.status(500).send(err)
  }
})

// DELETE INDIVISUAL RECORD
userRouter.delete("/:id", async(req, res) => {

  try{
    const _id = req.params.id
    const user = await User.findByIdAndDelete(_id);
    res.send(user)
  }
  catch(err){
    res.status(500).send(err)
  }
})

export default userRouter