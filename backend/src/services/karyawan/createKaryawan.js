import myPrisma from "../../config/db.js";
import {v4 as uuid} from 'uuid';
import bcrypt from 'bcrypt';

const createKaryawan = async (data, token) => {
  const {username, email, nama_lengkap, password} = data;
  try {
    return await myPrisma.karyawan.create({
      data: {
        id: uuid(),
        username,
        email,
        nama_lengkap,
        password: await bcrypt.hash(password, 10),
      },
      select: {
        username: true
      }
    })
  } catch (error) {
    if(error.code === 'P2002') {
      if(error.meta?.target?.includes('karyawan_username_key')) {
        return 'Maaf, username telah terdaftar !';
      }

      if(error.meta?.target?.includes('karyawan_email_key')) {
        return 'Maaf, email telah terdaftar !';
      }
    } else {
      return error.message;
    }
  }
}

export default createKaryawan;