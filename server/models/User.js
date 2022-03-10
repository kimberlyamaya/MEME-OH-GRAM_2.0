const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

// import Meme
const memeSchema = require('./Meme')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    memes: [memeSchema],
  }
 )

 // hash password
 userSchema.pre('save', async function (next) {
   if (this.isNew || this.isModified('password')) {
     const costFactor = 10
     this.password = await bcrypt.hash(this.password, costFactor) 
   }

   next()
 })

 // compare and validate password for logging in
 userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password)
 }

 // populate virtual

 const User = model('User', userSchema)

 module.exports = User