import myPrisma from "../../config/db.js";

const getEmployeeExist = async (username, email) => {
  try {
    const result = await myPrisma.employee.findFirst({
      where: {
        OR: [
          username ? {username: username} : null,
          email ? {email: email} : null
        ].filter(Boolean)
      },
      select: {
        username: true,
        email: true,
        dept: true,
        title: true,
        token: true
      }
    });
    return result
  } catch (error) {
    return error.message;
  }
}

export default getEmployeeExist;