import registerValidation from "../../validations/employees/registerValidation.js";
import getEmployeeExist from "../../services/employees/getEmployeeExist.js";
import createEmployee from "../../services/employees/createEmployee.js";

const employeeRegistration = async (req, res) => {
  const validationError = registerValidation(req.body);
  if(validationError) return res.status(401).json({errors: validationError});

  const checkDuplicate = await getEmployeeExist(req.body.username, req.body.email);
  if(checkDuplicate) return res.status(403).json({errors: checkDuplicate});

  const addEmployee = await createEmployee(req.body);
  if(addEmployee instanceof Error) return res.status(500).json({errors: addEmployee});

  // setelah ini kirim email verifikasi ke email karyawan
}

export default employeeRegistration;