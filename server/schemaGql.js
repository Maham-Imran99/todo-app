import {gql} from "apollo-server";

const typeDefs = gql`
 type Query{
    user(_id:ID!):User
    todos(filter: String, completed: Boolean, searchTerm: String):[Todo]
    getTodo(id:ID!):Todo
 }
 type Mutation {
    SignUpUser(userNew: UserInput!) : User
    SignInUser(userSignin:UserSignInInput!): Token
    CreateTodo(name: String!, userId: ID!): Todo 
    DeleteTodo(id: ID!): Todo
    ToggleTodoCompletion(id: ID!): Todo
 }

 type User{
     _id:ID!
     firstName:String
     lastName:String
     email:String!
     password:String!
 }
 type Todo{
     id: ID
     name:String
     completed: Boolean
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

 type AuthPayload {
    token: String 
    user: User 
 }

`
export default typeDefs