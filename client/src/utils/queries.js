import { gql } from '@apollo/client'

export const QUERY_ME = gql`
{
  me {
    _id
    username
    email
    memes {
      _id
      link
      createdAt
      username
      likes {
        _id
        likeStorage
      }
      likeCount
    }
  }
}
`

export const QUERY_FIND_USER = gql`
  query findUser($username: String!) {
    findUser(username: $username) {
      _id
      username
      email
      memes {
        _id
        link
        createdAt
        username
        likes {
          _id
          likeStorage
        }
        likeCount
      }
    }
  }
`

export const QUERY_LINK = gql`
  query link($id: ID!) {
    link(_id: $id) {
      _id
      link
      createdAt
      username
      likeCount
      likes {
        _id
        likeStorage
      }
      likeCount
    }
  }
`

export const QUERY_MEMES = gql`
  query memes($username: String!) {
    memes(username: $username) {
      _id
      link
      createdAt
      username
      likes {
        _id
        likeStorage
      }
      likeCount
    }
  }
`