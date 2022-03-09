const { Schema } = require('mongoose')

const memeTemplateSchema = new Schema({
    template: {
        type: String
    }
})

// has to be a model as these standalone
const memeTemplate = model('memeTemplate', memeTemplateSchema)

module.exports = memeTemplateSchema