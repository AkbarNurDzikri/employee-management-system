import tokenVerificator from "../../services/tokens/tokenVerificator.js";
import getEmployeeExist from "../../services/employees/getEmployeeExist.js";
import updateToken from "../../services/auth/updateAuth.js";

const verifyEmailController = async (req, res) => {
  const token = req.query.token;
  const decodedToken = tokenVerificator(token);
  if(decodedToken === 'jwt expired') return res.status(403).json({errors: 'Token Kadaluwarsa. \n Silahkan lakukan permintaan verifikasi ulang'});

  const {username, email} = decodedToken;
  const validUser = await getEmployeeExist(username, email);
  if(validUser) {
    if(token !== validUser.token) return res.status(401).json({errors: 'Token tidak valid !'});
    
    await updateToken(username);
    return res.status(200).json({message: 'Verifikasi akun berhasil'});
  }

}

export default verifyEmailController;