import bcrypt from 'bcrypt';

const verifyPassword = async (textPassword, hashedPassword) => {
  return await bcrypt.compare(textPassword, hashedPassword);
}

export default verifyPassword;