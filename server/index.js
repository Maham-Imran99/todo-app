import {ApolloServer} from 'apollo-server';
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core';
import typeDefs from './schemaGql.js';
import mongoose from 'mongoose';
import { MONGO_URI } from "./config.js";
import './models/Todo.js';
import './models/User.js';
import resolvers from './resolvers.js';
import { JWT_SECRET } from './config.js';
import jwt from 'jsonwebtoken'

mongoose.connect(MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context:({req})=>{
        const { authorization } = req.headers;
        if(authorization){
         const {userId} = jwt.verify(authorization,JWT_SECRET)
         return {userId}
        }
    },
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

//mongodb+srv://mahamimran:<password>@cluster0.oocgyjj.mongodb.net/graphqldb

