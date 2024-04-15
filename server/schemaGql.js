import {gql} from "apollo-server";

const typeDefs = gql`
 type Query{
    User(_id:ID!):User
    Todos(filter: String, status: TodoStatus, searchTerm: String):[Todo]
    GetTodo(id:ID!):Todo
 }
 type Mutation {
    SignUpUser(userNew: UserInput!) : User
    SignInUser(userSignin:UserSignInInput!): Token
    CreateTodo(name: String!, status: TodoStatus): Todo 
    DeleteTodo(_id: ID!): Todo
    ToggleTodoCompletion(_id: ID!): Todo
 }

 type User {
     _id:ID!
     firstName:String
     lastName:String
     email:String!
     password:String!
 }

 enum TodoStatus {
  COMPLETE
  INCOMPLETE
  DEFAULT
}

type Todo {
  _id: ID
  name: String!
  status: TodoStatus
}

 input UserInput{
    firstName:String!
    lastName:String!
    email:String!
    password:String!
 }

 input UserSignInInput {
    email: String!
    password: String!
 }

 type Token {
    token: String
 }
`
export default typeDefs