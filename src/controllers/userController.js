import bcrypt from 'bcryptjs';
import bcrypts from 'bcrypt';

import Model from '../database/models';
import { cryptionToken } from '../utils/jsonwebtoken';

const { User } = Model;

class userController {
  static async register(req, res) {
    try {
      const hashed = await bcrypts.hash(req.body.password, 12);
      const theUser = {
        username: req.body.username,
        email: req.body.email,
        password: hashed,
      };

      const { email } = req.body;
      const doesExist = await User.findOne({
        where: { email },
      });
      if (doesExist) {
        res.status(409).json({
          status: 409,
          message: 'User with the provided email is already registered.',
        });
        return false;
      }
      const user = await User.create(theUser);
      const newUser = {
        username: user.lastname,
        email: user.email,
      };
      return res.status(201).json({
        status: 201,
        message: 'User inserted in the system successfully',
        newUser,
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error.message,
      });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).send({
        status: 401,
        message: 'Your email or must password must be wrong',
      });
    }
    const token = cryptionToken({ email: user.email });

    await User.update(
      { isLoggedIn: true },
      { where: { email: req.body.email } },
    );

    user.password = undefined;
    return res.status(200).json({
      status: 200,
      message: 'Logged in successfully',
      Token: token,
    });
  }
}

export default userController;
