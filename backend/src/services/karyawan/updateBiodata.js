import myPrisma from '../../config/db.js';

const updateBiodata = async (formData, id) => {
  try {
    const result = await myPrisma.karyawan.update({
      where: {
        id
      },
      data: formData,
      select: {
        nama_lengkap: true,
      }
    });

    return result;
  } catch (error) {
    return error.message;
  }
}

export default updateBiodata;