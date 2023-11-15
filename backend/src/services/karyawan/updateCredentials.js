import myPrisma from '../../config/db.js';

const updateCredentials = async (formData, id) => {
  const {username, email, password} = formData;
  try {
    const result = await myPrisma.karyawan.update({
      where: {
        id
      },
      data: {
        username,
        email,
        password
      },
      select: {
        nama_lengkap: true,
      }
    });

    return result;
  } catch (error) {
    return error.message;
  }
}

export default updateCredentials;