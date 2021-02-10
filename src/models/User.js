import mongoose from "mongoose";
import validator from "validator";

// USER SCHEMA FOR VALIDATION AND I USED VALIDATOR PACKAGE HERE TO VERY EMAIL AND PHONE IF THEY ARE UNIQUE OR NOT

const userSchema = mongoose.Schema({

  name: {
    type: String,
    minlength: 3,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: [true,"Email is already registered"],
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Please enter a valid Email !")
      }
    }
  },

  phone: {
    type: Number,
    minlength: 10,
    maxlength: 13,
    required: true,
    unique: true
  },

  address: {
    type: String,
    required: true,
  }
})

// MODEL
// we will create a new collection
const User = new mongoose.model("User", userSchema)

// export User to other files
export default User