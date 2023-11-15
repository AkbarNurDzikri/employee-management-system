import permohonanCutiValidation from "../../validations/cuti/permohonanCuti.js";
import permohonanCutiService from "../../services/cuti/permohonanCuti.js";

const permohonanCutiController = async (req, res) => {
  const validation = permohonanCutiValidation(req.body);
  
  if(typeof validation !== 'object') {
    return res.status(400).json({errors: validation});
  } else {
    const result = await permohonanCutiService(validation);
    console.log(result);
  }
}

export default permohonanCutiController;