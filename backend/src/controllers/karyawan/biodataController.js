import updateBiodata from "../../services/karyawan/updateBiodata.js";
import biodataValidation from "../../validations/karyawan/biodataValidation.js";

const biodataController = async (req, res) => {
  const validationResult = biodataValidation(req.body);
  const id = req.params.id
  if(typeof validationResult !== 'object') {
    return res.status(400).json({errors: validationResult});
  } else {
    const result = await updateBiodata(validationResult, id);
    console.log(result);
  }
}

export default biodataController;