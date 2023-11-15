import myPrisma from "../../config/db.js";

const verifikasiUser = async (username) => {
  try {
    return await myPrisma.karyawan.update({
      where: {
        username
      },
      data: {
        isVerified: true
      },
      select: {
        username: true,
        email: true,
      }
    })
  } catch (error) {
    return error.message;
  }
}

export default verifikasiUser;