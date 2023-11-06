import tokenVerificator from "../../services/tokens/tokenVerificator.js";
import getEmployeeExist from "../../services/employees/getEmployeeExist.js";
import updateAuth from "../../services/auth/updateAuth.js";

const verifyEmailController = async (req, res) => {
  const token = req.query.token;
  const decodedToken = tokenVerificator(token);
  if(decodedToken instanceof Error) return res.status(403).json({errors: decodedToken});

  const {username, email} = decodedToken;
  const validUser = await getEmployeeExist(username, email);
  if(token !== validUser.token) return res.status(401).json({errors: 'Token tidak valid !'});

  const result = await updateAuth(username);
  return res.status(200).json({message: 'Verifikasi akun berhasil'});
}

export default verifyEmailController;