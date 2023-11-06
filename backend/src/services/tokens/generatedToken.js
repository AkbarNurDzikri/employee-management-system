import jwt from 'jsonwebtoken';

const generatedToken = (payload) => {
  return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: 5*60});
}

export default generatedToken;