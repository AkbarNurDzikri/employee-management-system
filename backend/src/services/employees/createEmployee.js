import myPrisma from "../../config/db.js";
import {v4 as uuid} from 'uuid';
import bcrypt from 'bcrypt';

const createEmployee = async (formData) => {
  const {username, email, fullname, password} = formData;
  try {
    return await myPrisma.employee.create({
      data: {
        id: uuid(),
        username,
        email,
        fullname,
        password: await bcrypt.hash(password, 10)
      }
    })
  } catch (error) {
    return error.message;
  }
}

export default createEmployee;