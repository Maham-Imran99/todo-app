import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './config.js';



const User  = mongoose.model("User");
const Todo = mongoose.model("Todo")

const resolvers = {
    Mutation: {
        SignUpUser:async (_, {userNew}) => {
            const user = await User.findOne({email:userNew.email})
          if(user){
              throw new Error("User already exists with that email")
          }
         const hashedPassword =  await bcrypt.hash(userNew.password,12)

        const newUser =  new User({
             ...userNew,
             password:hashedPassword
         })
        return await newUser.save();
        },

        SignInUser: async(_, {userSignin}) => {
         const user = await User.findOne({email:userSignin.email})
         if(!user){
             throw new Error("User dosent exists with that email")
         }
         const doMatch =await bcrypt.compare(userSignin.password,user.password)
         if(!doMatch){
             throw new Error("Email or Password in invalid")
         }
         const token = jwt.sign({userId:user._id},JWT_SECRET)
         return {token}
        },

        CreateTodo: async(_, {name}, {userId}) => {
            if(!userId) throw new Error("You must be logged in")
           const todo = new Todo({name})
           return await todo.save();
        },
        DeleteTodo: async (_, { id }, { userId }) => {
           if (!userId) throw new Error("You must be logged in.");
           const todo = await Todo.findOneAndDelete({ _id: id, userId });
           if (!todo) throw new Error("Todo not found");
           return todo;
        }

        }
    }


export default resolvers;