import { gql } from '@apollo/client'

// -ka do I pass username or email inside login mutation?
export const LOGIN_USER = gql`
mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`

export const ADD_MEME = gql`
mutation addMeme($link: String!) {
  addMeme(link: $link) {
    _id
    link
    username
    createdAt
    likeCount
    likes {
      _id
    }
  }
}
`

export const ADD_LIKE = gql`
mutation addLike($memeId: ID!, $likes: Int) {
  addLike(memeId: $memeId, likes: $likes) {
    _id
    likeCount
  }
}
`