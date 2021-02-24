import express from 'express';

import todoController from '../controllers/todo';
import { createValidationError } from '../validators/createTodo';
import { getValidationError } from '../validators/getTodo';
import { updateValidationError } from '../validators/update';
import { deleteValidationError } from '../validators/deleteTodo';
import isLogin from '../middleware/checkUser';

const router = express();

router.post('/create-todo', isLogin, createValidationError, todoController.createTodo);

router.get('/get-todos', isLogin, todoController.getAllTodo);

router.get('/get-todo', isLogin, getValidationError, todoController.getOneTodo);

router.put('/update-todo', isLogin, updateValidationError, todoController.updateTodo);

router.delete('/delete-todo', isLogin, deleteValidationError, todoController.deleteTodo);

export default router;
