import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['COMPLETE', 'INCOMPLETE', 'DEFAULT'], 
    default: 'DEFAULT',
  }
},
{ timestamps: true });

mongoose.model('Todo', todoSchema);

