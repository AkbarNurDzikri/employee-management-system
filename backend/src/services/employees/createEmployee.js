import myPrisma from "../../config/db.js";
import {v4 as uuid} from 'uuid';
import bcrypt from 'bcrypt';

const createEmployee = async (data, token) => {
  const {username, email, fullname, password} = data;
  try {
    return await myPrisma.employee.create({
      data: {
        id: uuid(),
        username,
        email,
        fullname,
        password: await bcrypt.hash(password, 10),
        token
      },
      select: {
        token: true
      }
    })
  } catch (error) {
    throw new Error(error.message);
  }
}

export default createEmployee;