const { gql } = require('apollo-server-express');

const typeDefs = gql `

    type Like {
        likes: Int 
    }

    type Meme {
        _id: ID
        meme: String
        likes: [Like]
        username: [User]
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        memes: [Meme]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: User
        allUsers: [User]
        findUser(username: String!): [User],
        allMemes: [Meme],
        myMemes(username: String!): [Meme],
    }

    type Mutation {
        login(username: String, password: String): Auth
        addUser(username: String!, email: String, password: String!): Auth
        addMeme(meme: String!): Meme
        # addLike(_id: ID!, likes: Int!): Meme
    }

`;

module.exports = typeDefs;