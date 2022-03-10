const { Meme } = require('../models')

module.exports = {
  // post meme
  async createMeme({ body }, res) {
    const meme = await Meme.create(body)

  if (!meme) {
    return res.status(400).json({ message: 'Something is wrong '})
  }

  res.json({ meme })
  },

  // update likes
  async incrementLikes({ meme }, res) {
    try {
      const updateLike = await Meme.findOneAndUpdate(
        { _id: meme._id },
        { $inc: { likes: 1 } }
      )
      return res.json(updateLike)
    } catch (err) {
      return res.status(400).json(err)
    }
  }
}