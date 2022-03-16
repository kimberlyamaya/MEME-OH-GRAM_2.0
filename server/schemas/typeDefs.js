const { gql } = require('apollo-server-express');

const typeDefs = gql `

    type Like {
        likes: Int 
    }

    type Meme {
        _id: ID
        link: String
        username: String
        createdAt: String
        likeCount: Int
        likes: [Like]
    }

    type User {
        _id: ID
        username: String
        email: String
        memes: [Meme]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User # your username
        findUser(username: String!): User, # profile api
        memes(username: String): [Meme] # your memes
        link(_id: ID!): Meme
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, email: String, password: String!): Auth
        addMeme(link: String!): Meme
        addLike( memeId: ID!, likes: Int!): Meme
        # addLike(_id: ID!, likes: Int!): Meme
    }

`;

module.exports = typeDefs;