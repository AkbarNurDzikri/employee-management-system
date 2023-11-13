import myPrisma from '../../config/db.js';

const updateProfile = async (formData, id) => {
  try {
    const result = myPrisma.employee.update({
      where: {
        id
      },
      data: formData,
      select: {
        fullname: true,
      }
    });

    return result;
  } catch (error) {
    return error.message;
  }
}

export default updateProfile;