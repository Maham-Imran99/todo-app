import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
mutation CreateTodo($name: String!, $status: TodoStatus){
  todo: CreateTodo(name: $name, status: $status) {
    _id
    name
    status
  }
}
`
export const DELETE_TODO = gql`
mutation DeleteTodo($id: ID!) {
  DeleteTodo(_id: $id) {
    _id
    name
  }
}
`