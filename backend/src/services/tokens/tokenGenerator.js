import jwt from 'jsonwebtoken';

const tokenGenerator = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: 5*60});
}

export default tokenGenerator;