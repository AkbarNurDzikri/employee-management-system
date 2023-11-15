import myPrisma from "../../config/db.js";

const getKaryawanEksis = async (username, email) => {
  try {
    const result = await myPrisma.karyawan.findFirst({
      where: {
        OR: [
          username ? {username: username} : null,
          email ? {email: email} : null
        ].filter(Boolean)
      },
      select: {
        username: true,
        nama_lengkap: true,
        email: true,
        dept: true,
        jabatan: true,
        password: true,
        isVerified: true
      }
    });
    return result
  } catch (error) {
    return error.message;
  }
}

export default getKaryawanEksis;