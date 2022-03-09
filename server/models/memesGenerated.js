const { Schema } = require('mongoose')

const memesGeneratedSchema = new Schema({
    meme: {
        type: String
    }
})

// has to be a model so they can standalone from the user, to be displayed as generated memes
const memesGenerated = model('memesGenerated', memesGeneratedSchema)

module.exports = memesGeneratedSchema