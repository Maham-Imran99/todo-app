import {ApolloServer} from 'apollo-server'
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import typeDefs from './schemaGql.js';
import mongoose from 'mongoose'
import { MONGO_URI } from "./config.js";

mongoose.connect(MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});


import './models/Todo.js';
import './models/User.js';

import resolvers from './resolvers.js'

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

//mongodb+srv://mahamimran:<password>@cluster0.oocgyjj.mongodb.net/graphqldb

