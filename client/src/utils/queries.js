import { gql } from '@apollo/client'

export const QUERY_ME = gql`
{
  me {
    _id
    username
    meme {
      meme {
        likes {
          likes
        }
      }
    }
  }
}
`
export const QUERY_ALL_MEMES = gql`
{
  Meme {
    meme,
    likes {
      likes
    }
  }
}
`