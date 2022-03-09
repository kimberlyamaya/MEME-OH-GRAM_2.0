const { Schema } = require('mongoose')

const templateSchema = new Schema({
    template: {
        type: String
    },
})

// has to be a model as these standalone
const Template = model('Template', templateSchema)

module.exports = Template