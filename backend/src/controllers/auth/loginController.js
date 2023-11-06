import getEmployeeExist from "../../services/employees/getEmployeeExist.js";
import verifyPassword from "../../services/auth/verifyPasswLogin.js";
import generatedToken from "../../services/tokens/generatedToken.js";

const login = async (req, res) => {
  const {username, password} = req.body;
  const user = await getEmployeeExist(username);
  if(user === null) return res.status(401).json({errors: 'Username atau password salah !'});
  
  const checkPassword = await verifyPassword(password, user.password);
  if(checkPassword === false) return res.status(401).json({errors: 'Username atau password salah !'});
  
  const fullname = user.fullname;
  const token = generatedToken({fullname});
  
  return res.status(200).json({token: token});
}

export default login;