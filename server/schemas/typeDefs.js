const { gql } = require('apollo-server-express');

const typeDefs = gql `

    type Like {
        likes: Number
    }

    type Meme {
        meme: String
        likes: [Likes]
    }

    type User {
        _id: ID
        username: String
        password: String
        memes: [Meme]
    }

    type Query {
        user: [User]
    }
`;

module.exports = typeDefs;