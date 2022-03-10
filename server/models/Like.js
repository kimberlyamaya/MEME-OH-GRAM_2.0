const { Schema } = require('mongoose')

// sub document to Meme
const likeSchema = new Schema({
    likes: {
        type: Number
    },
})

module.exports = likeSchema;