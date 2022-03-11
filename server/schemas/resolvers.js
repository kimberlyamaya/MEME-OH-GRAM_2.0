const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find().sort({ createdAt: -1 })
        }
    }
};

module.exports = resolvers;