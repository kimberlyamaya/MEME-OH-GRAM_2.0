const { User } = require('../models')
const { signToken } = require('../utils/auth')

module.exports = {
  // get single user
  async getSingleUser ({ user = null, params }, res) {
    const foundUser = await User.findOne ({ 
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }]
    })

    if (!foundUser) {
        return res.status(400).json({ message: 'Cannot find a user with this id!' })
    }

    res.json(foundUser)
  },
  
  // post user
  async createUser({ body }, res) {
    const user = await User.ceate(body)

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong, please try again. '})
    }

    const token = signToken(user)

    res.json({ token, user })
  },

  // login
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] })

    if (!User) {
      return res.status(400).json({ message: "Can't find this user" })
    }

    const correcPW = await user.isCorrectPassword(body.password)

    if (!correcPW) {
        return res.status(400).json({ message: 'Wrong password!' })
    }

    const token = signToken(user)
    res.json({ token, user })
  },
}