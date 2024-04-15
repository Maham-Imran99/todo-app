import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from './config.js';



const User = mongoose.model("User");
const Todo = mongoose.model("Todo")

const resolvers = {
  Mutation: {
    SignUpUser: async (_, { userNew }) => {
      const user = await User.findOne({ email: userNew.email })
      if (user) {
        throw new Error("User already exists with that email")
      }
      const hashedPassword = await bcrypt.hash(userNew.password, 12)

      const newUser = new User({
        ...userNew,
        password: hashedPassword
      })
      return await newUser.save();
    },

    SignInUser: async (_, { userSignin }) => {
      const user = await User.findOne({ email: userSignin.email })
      if (!user) {
        throw new Error("User dosent exists with that email")
      }
      const doMatch = await bcrypt.compare(userSignin.password, user.password)
      if (!doMatch) {
        throw new Error("Email or Password in invalid")
      }
      const token = jwt.sign({ userId: user._id }, JWT_SECRET)
      return { token }
    },

    CreateTodo: async (_, { name }, { userId }) => {
      // if(!userId) throw new Error("You must be logged in")
      const todo = new Todo({ name })
      return await todo.save();
    },
    DeleteTodo: async (_, { _id }, { userId }) => {
      console.log(_id, userId)
      // if (!userId) throw new Error("You must be logged in.");

      const todo = await Todo.deleteOne({ _id: _id });
      if (todo.deletedCount === 1) {
        console.log("Successfully deleted one document.");
      } else {
        console.log("No documents matched the query. Deleted 0 documents.");
      }
    }

  },
  Query: {
    Todos: async (_, { filter, status, searchTerm }) => {
      try {
        // Construct the filter object based on provided arguments
        const filterOptions = {};
        if (filter) {
          // Apply filter if provided
          filterOptions.someField = filter; // Replace 'someField' with the actual field to filter by
        }
        if (status) {
          // Apply status if provided
          filterOptions.status = status;
        }
        if (searchTerm) {
          // Apply search term if provided
          filterOptions.name = { $regex: searchTerm, $options: 'i' }; // Assuming 'name' is the field to search
        }

        // Query todos from the database based on filter options
        const todos = await Todo.find(filterOptions);

        return todos;
      } catch (error) {
        console.error('Error fetching todos:', error);
        throw new Error('Failed to fetch todos');
      }
    },
  },
};

export default resolvers;