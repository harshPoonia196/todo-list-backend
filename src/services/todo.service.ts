import { IGetAllToDosParams, ITodo } from "../interface/todo.interface";
import TodoSchema from "../models/todo.model";

function todoService() {
  async function createTodoService(todo: ITodo) {
    try {
      const createdTodo = await TodoSchema.create(todo);
      return createdTodo;
    } catch (err) {
      console.log("err in create TODO service ===========>", err);
    }
  }

  async function getAllTodoService(params: IGetAllToDosParams) {
    try {
      const { skip, limit } = params;
      const toDos = await TodoSchema.find({})
        .skip(skip)
        .limit(limit)
        .sort({ completed: 1 });
      const toDosDocCount = await TodoSchema.find({}).countDocuments();

      const toSkip = skip + limit;
      const hasNext = toDosDocCount >= toSkip;

      return { toSkip, hasNext, toDos };
    } catch (err) {
      console.log("err in getAllTodoService service ===========>", err);
    }
  }

  async function updateTodoServices(todo: ITodo) {
    const { _id } = todo;
    try {
      const todos = await TodoSchema.findByIdAndUpdate(_id, todo, {
        new: true,
      });

      return todos;
    } catch (err) {
      console.log("err in updateTodoServices  service ===========>", err);
    }
  }

  async function deleteTodoService(todo_id: string) {
    try {
      const todos = await TodoSchema.findByIdAndDelete(todo_id);

      return todos;
    } catch (err) {
      console.log("err in deleteTodoService  service ===========>", err);
    }
  }

  return {
    createTodoService,
    getAllTodoService,
    updateTodoServices,
    deleteTodoService,
  };
}

export default todoService;
