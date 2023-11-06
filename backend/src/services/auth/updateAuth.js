import myPrisma from "../../config/db.js";

const updateToken = async (username) => {
  try {
    return await myPrisma.employee.update({
      where: {
        username
      },
      data: {
        isVerified: true,
        token: null
      },
      select: {
        username: true,
        email: true,
        token: true
      }
    })
  } catch (error) {
    return error.message;
  }
}

export default updateToken;