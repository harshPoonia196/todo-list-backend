import { Request, Response } from "express";
import todoService from "../services/todo.service";
import { IGetAllToDosParams } from "../interface/todo.interface";

function todoController() {
  const {
    createTodoService,
    getAllTodoService,
    updateTodoServices,
    deleteTodoService,
  } = todoService();

  async function createTodo(req: Request, res: Response) {
    try {
      const todo = req.body;

      const createdTodo = await createTodoService(todo);

      res
        .status(200)
        .json({ data: createdTodo, message: "created Todo successfully" });
    } catch (err) {
      console.log("err in create TODO ===========>", err);
    }
  }

  async function getAllTodo(req: Request, res: Response) {
    try {
      const params: IGetAllToDosParams = req.body;
      const allTodos = await getAllTodoService(params);

      res
        .status(200)
        .json({ data: allTodos, message: "fetched all todos successfully" });
    } catch (err) {
      console.log("err in getAllTodo TODO ===========>", err);
    }
  }

  async function updateTodo(req: Request, res: Response) {
    try {
      const todo = req.body;
      const updatedTodo = await updateTodoServices(todo);

      res
        .status(200)
        .json({ data: updatedTodo, message: "fetched todo successfully" });
    } catch (err) {
      console.log("err in getSingleTodo TODO ===========>", err);
    }
  }

  async function deleteTodo(req: Request, res: Response) {
    try {
      const { _id } = req.params;
      const deletedTodo = await deleteTodoService(_id);

      res
        .status(200)
        .json({ data: deletedTodo, message: "fetched todo successfully" });
    } catch (err) {
      console.log("err in getSingleTodo TODO ===========>", err);
    }
  }

  return { createTodo, getAllTodo, updateTodo, deleteTodo };
}

export default todoController;
