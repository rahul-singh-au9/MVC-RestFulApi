import express from "express";
import "./db/connection.js"
import userRouter from "./routes/userRouters.js"

const app = express();
const PORT = process.env.PORT || 3001;

// FOR PARSING THE JSON , WE DONT HAVE TO USE UN-NECESSARY BODY-PARSER PACKAGE BCS THE METHOD IS AVAILABLE INSIDE THE EXPRESS

app.use(express.json());

// HOMEPAGE
app.get("/", (req, res)=>{
  res.send("Welcome to the Users API!")
})

// USER ROUTES
app.use("/user", userRouter)

// ROUTES THAT NOT BEEN DEFINED
app.get("*", (req, res) => {
  res.send("You've tried reaching a route that doesn't exist.")
})

// CONNECTING TO THE SERVER
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`)
}
)