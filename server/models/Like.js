const { Schema } = require('mongoose');

// sub document to Meme
const likeSchema = new Schema({

    likeStorage: {
        type: Number,
        default: 0
    }
    },
    {
    toJSON: {
        getters: true
    }
    }
);

module.exports = likeSchema;