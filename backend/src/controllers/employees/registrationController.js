import registerValidation from "../../validations/employees/registerValidation.js";
import getEmployeeExist from "../../services/employees/getEmployeeExist.js";
import createEmployee from "../../services/employees/createEmployee.js";
import emailVerifySender from "../../services/emails/emailVerifySender.js";
import generatedToken from "../../services/tokens/generatedToken.js";

const employeeRegistration = async (req, res) => {
  const validationResult = registerValidation(req.body);
  if(typeof validationResult !== 'object') { // jika type-nya bukan object / string, artinya ada pesan error dari hasil validasi joi
    return res.status(400).json({errors: validationResult});
  } else {
    const {username, email, fullname} = validationResult;
    const isExist = await getEmployeeExist(username, email);
    if(isExist) return res.status(403).json({errors: isExist});
  
    const token = generatedToken({username, email});
    const addEmployee = await createEmployee(validationResult, token);
    if(addEmployee instanceof Error) return res.status(500).json({errors: addEmployee});
  
    const sendEmail = await emailVerifySender(email, fullname);
    if(typeof sendEmail === 'object') return res.status(201).json({message: 'Berhasil mendaftarkan akun. \n Kami telah mengirim email verifikasi, lakukan verifikasi email untuk melanjutkan'});
  }
}

export default employeeRegistration;