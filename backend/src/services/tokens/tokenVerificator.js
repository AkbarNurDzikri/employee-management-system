import jwt from 'jsonwebtoken';

const tokenVerificator = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return decoded;
  } catch (error) {
    return error;
  }
}

export default tokenVerificator;