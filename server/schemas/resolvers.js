const { User, Meme } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                
                return user;
            }
            
            throw new AuthenticationError('Login to continue!');
        },

        allUsers: async () => {
            return User.find({})
            .select('-__v -password')
            .populate('memes')
            .populate('likes');
        },

        findUser: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('memes');
        },

       allMemes: async () => {
        return Meme.find({})
       },

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
        },

        addMeme: async (parent, args, context) => {
            if (context.user) {
                const meme = await Meme.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { memes: meme._id } },
                    { new: true }
                );

                return meme;
            }

            return new AuthenticationError('You need to login first!');
        }
    }
};

module.exports = resolvers;