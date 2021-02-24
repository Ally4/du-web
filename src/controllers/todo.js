import Model from '../database/models';

const { Todo } = Model;

class todoList {
  static async createTodo(req, res) {
    try {
      const todo = {
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
      };
      await Todo.create(todo);
      return res.status(201).json({
        status: 201,
        message: 'The todo have been well created',
        todo,
      });
    } catch (e) {
      return res.status(500).json({
        status: 500,
        message: e.message,
      });
    }
  }

  static async getAllTodo(req, res) {
    try {
      const todos = await Todo.findAll();
      if (!todos) {
        return res.status(404).json({
          status: 404,
          message: 'Your todo list is empty',
        });
      }
      return res.status(200).json({
        status: 200,
        message: 'Here are your todos',
      });
    } catch (e) {
      return res.status(500).json({
        status: 500,
        message: e.message,
      });
    }
  }

  static async getOneTodo(req, res) {
    try {
      const aTodo = await Todo.findOne({
        where: { id: req.body.id },
      });
      if (!aTodo) {
        return res.status(404).json({
          status: 404,
          message: 'Your todo list is empty',
        });
      }
      return res.status(200).json({
        status: 200,
        message: 'Here is your todos',
        aTodo,
      });
    } catch (e) {
      return res.status(500).json({
        status: 500,
        message: e.message,
      });
    }
  }

  static async updateTodo(req, res) {
    try {
      const aTodo = await Todo.findOne({
        where: { id: req.body.id },
      });
      if (!aTodo) {
        return res.status(404).json({
          status: 404,
          message: 'Your todo list is empty',
        });
      }

      const updatedTodo = {
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
      };
      await Todo.update(updatedTodo, {
        where: { id: req.body.id },
        returning: true,
      });
      return res.status(200).json({
        status: 200,
        message: 'Here is the updated todo',
        updatedTodo,
      });
    } catch (e) {
      return res.status(500).json({
        status: 500,
        message: e.message,
      });
    }
  }

  static async deleteTodo(req, res) {
    try {
      const aTodo = await Todo.findOne({
        where: { id: req.body.id },
      });
      if (!aTodo) {
        return res.status(404).json({
          status: 404,
          message: 'Your todo list is empty',
        });
      }
      await aTodo.destroy();

      return res.status(200).json({
        status: 200,
        message: 'Your todo have been deleted',
      });
    } catch (e) {
      return res.status(500).json({
        status: 500,
        message: e.message,
      });
    }
  }
}

export default todoList;
