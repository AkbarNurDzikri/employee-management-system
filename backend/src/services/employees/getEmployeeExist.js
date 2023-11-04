import myPrisma from "../../config/db.js";

const getEmployeeExist = async (empUsername, empEmail) => {
  try {
    const result = await myPrisma.employee.findFirst({
      where: {
        OR: [
          empUsername ? {username: empUsername.toLowerCase()} : null,
          empEmail ? {email: empEmail.toLowerCase()} : null
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
      if(result.username === empUsername) return `Maaf, username ${empUsername} sudah terdaftar ! \n Silahkan gunakan username lain.`;
      if(result.email === empEmail) return `Maaf, email ${empEmail} sudah terdaftar ! \n Periksa kembali inputan Anda.`;
    }
  } catch (error) {
    return error.message;
  }
}

export default getEmployeeExist;