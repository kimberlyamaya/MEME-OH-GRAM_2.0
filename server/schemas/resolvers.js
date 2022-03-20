const { User, Meme } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        
        me: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('memes')
                
                return user;
            }
            
            throw new AuthenticationError('Login to continue!');
        },

        findUser: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('memes');
        },

        link: async (parent, { _id }) => {
            return Meme.findOne({ _id });
          },

       memes: async (parent, { username }) => {
           const params = username ? { username } : {};
           return Meme.find(params).sort({ createdAt: -1 });
       },

       allMemes: async () => {
        return Meme.find().sort({ createdAt: -1 });
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = User.create(args);
            const token = signToken(user);

            return { token, user };
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
        },

        addLike: async (parent, { memeId, likeCount }, context) => {
            if (context.user) {
                const updateMeme = await Meme.findOneAndUpdate(
                    { _id: memeId },
                    // { $push: { likes: { likeCount, username: context.user.username }}},
                    { $push: { likeCount: likeCount  } },
                    { new: true, runValidators: true }
                );
                
                return updateMeme;
            }
        },

        removeMeme: async (parent, args, context) => {

            if(context.user) {
              const meme = await Meme.findById({ ...args, username: context.user.username });
                
              await User.findByIdAndUpdate(
                
                { _id: context.user._id },
                { $pull: { memes: { _id: meme._id} } },
                { new: true }
            );

            return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;