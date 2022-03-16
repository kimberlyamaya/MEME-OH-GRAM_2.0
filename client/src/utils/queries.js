import { gql } from '@apollo/client'

export const QUERY_ME = gql`
{
  me {
    _id
    username
    email
    meme {
      _id
      link
      username
      createdAt
      likesCount
      likes {
        _id
        likeStorage
      }
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
      meme {
        _id
        link
        createdAt
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
      likeCount
      likes {
        _id
        likeStorage
      }
    }
  }
`
export const QUERY_ALL_MEMES = gql`
  query allMemes($link: String!) {
    allMemes(link: $link) {
      _id
      link
      createdAt
      username
      likeCount
      likes {
        _id
        likeStorage
      }
    }
  }
`