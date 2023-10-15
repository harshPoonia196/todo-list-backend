import { Document, Schema, model } from "mongoose";
import { ITodo } from "../interface/todo.interface";

const TodoSchema: Schema = new Schema({
  todo: { type: String },
  completed: { type: Boolean, default: false },
});

const TodoModel = model<ITodo & Document>("TodoSchema", TodoSchema);

export default TodoModel;
