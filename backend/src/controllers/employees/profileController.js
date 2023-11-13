import updateProfile from "../../services/employees/updateProfile.js";
import profileValidation from "../../validations/employees/profileValidation.js";

const profileController = async (req, res) => {
  const validationResult = profileValidation(req.body);
  const id = req.params.id
  if(typeof validationResult !== 'object') {
    return res.status(400).json({errors: validationResult});
  } else {
    const result = await updateProfile(validationResult, id);
    console.log(result);
  }
}

export default profileController;