import dotenv from 'dotenv';

dotenv.config();

const authentication = (req, res, next) => {
  try {
    const token = req.header('x-access-token');
    if (!token) return res.status(401).json({ status: 401, message: ('Please login') });
    next();
  } catch (error) {
    return res.status(401).json({ status: 401, message: ('Invalid token') });
  }
};

export default authentication;
