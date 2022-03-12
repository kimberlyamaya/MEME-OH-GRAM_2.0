const { User, Meme } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
       me: async (parent, args, context) => {
           if (context.user) {
               var user = await User.findOne({ _id: context.user.id })
               .select('-__v -password')

               return user
           }

           throw new AuthenticationError('Login to continue!');
       },

       allMemes: async (parent, { username }) => {
           const params = username ? { username } : {};
           return Meme.find(params).sort({ createdAt: -1 });
       }

    },

    Mutation: {
        addUser: (parent, args) => {
            const newUser = User.create(args);
            const token = signToken(newUser);

            return { newUser, token };
        },

        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect Password');
            }

            const token = signToken(user);

            return {token, user};
        }
    }
};

module.exports = resolvers;