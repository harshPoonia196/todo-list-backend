import express from "express";
import todoController from "../controllers/todo.controller";

const router = express.Router();
const { createTodo, getAllTodo, updateTodo, deleteTodo } = todoController();

//Create Todo
router.post("/create-todo", createTodo);

//Get all todos
router.post("/get-all-todos", getAllTodo);

//Update by ID Method
router.post("/update-todo", updateTodo);

//Delete by ID Method
router.delete("/delete-todo/:_id", deleteTodo);

export default router;
