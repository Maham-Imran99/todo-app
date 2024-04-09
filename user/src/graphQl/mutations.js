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

export const CREATE_TODO = gql`
mutation CreateTodo($name: String!, $status: TodoStatus){
  todo: CreateTodo(name: $name, status: $status) {
    id
    name
    status
  }
}
`

export const DELETE_TODO = gql`
mutation DeleteTodo($id: ID!) {
  DeleteTodo(id: $id) {
    id
    name
  }
}
`