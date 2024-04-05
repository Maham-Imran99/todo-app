import {gql} from '@apollo/client';

export const SIGNUP_USER = gql`
mutation SignUpUser($userNew: UserInput!) {
  user: SignUpUser(userNew: $userNew) {
    _id
    firstName
    lastName
    email
  }
}
`

export const LOGIN_USER = gql`
mutation SignInUser($userSignin: UserSignInInput!) {
  user: SignInUser(userSignin: $userSignin) {
  token
  }
}
`