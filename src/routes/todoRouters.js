import express from 'express';

import todoController from '../controllers/todo';
import { createValidationError } from '../validators/createTodo';
import { getValidationError } from '../validators/getTodo';
import { updateValidationError } from '../validators/update';
import { deleteValidationError } from '../validators/deleteTodo';

const router = express();

router.post('/create-todo', createValidationError, todoController.createTodo);

router.get('/get-todos', todoController.getAllTodo);

router.get('/get-todo', getValidationError, todoController.getOneTodo);

router.put('/Update-todo', updateValidationError, todoController.updateTodo);

router.delete('/delete-todo', deleteValidationError, todoController.deleteTodo);

export default router;
