const { gql } = require('apollo-server-express');

const typeDefs = gql `

    type Like {
        likes: Int 
    }

    type Meme {
        meme: String
        likes: [Like]
    }

    type User {
        _id: ID
        username: String
        password: String
        memes: [Meme]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: [User],
        allMemes: [Meme]
    }

    type Mutation {
        login(username: String, password: String): Auth
        addUser(username: String!, password: String!): Auth
    }

`;

module.exports = typeDefs;