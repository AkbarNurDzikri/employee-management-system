import emailVerifySender from "../../services/emails/emailVerificator.js";
import getEmployeeExist from "../../services/karyawan/getKaryawanEksis.js";
import updateCredentials from "../../services/karyawan/updateCredentials.js";
import tokenGenerator from "../../services/tokens/tokenGenerator.js";
import credentialsValidation from "../../validations/karyawan/credentialsValidation.js";

const credentialsController = async (req, res) => {
  const validationResult = credentialsValidation(req.body);
  const id = req.params.id;

  if(typeof validationResult !== 'object') {
    return res.status(400).json({errors: validationResult});
  } else {
    const {username, email} = validationResult;
    const sameEmail = await getEmployeeExist('', email);
    if(sameEmail !== null) {
      const token = tokenGenerator({username, email});
      await emailVerifySender(email, username, token);
    }

    const result = await updateCredentials(validationResult, id);
    if(typeof result !== 'object') return res.status(400).json({errors: result});
    res.status(200).json({message: 'Berhasil merubah credentials'});
  }
}

export default credentialsController;