// SETTING THE CONNECTION TO MONGODB 
import mongoose from "mongoose";

const PORT = 3001;

mongoose.connect("mongodb://localhost:27017/Users",{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log(`Server running on port: http://localhost:${PORT}`)
})
.catch((err) => {
  console.log(err)
});