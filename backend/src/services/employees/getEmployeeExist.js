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
        title: true
      }
    });

    if(result) {
      if(result.username === username) return `Maaf, username ${username} sudah terdaftar ! \n Silahkan gunakan username lain.`;
      if(result.email === email) return `Maaf, email ${email} sudah terdaftar ! \n Periksa kembali inputan Anda.`;
    } else {
      return result;
    }
    return result
  } catch (error) {
    return error.message;
  }
}

export default getEmployeeExist;