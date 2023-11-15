import getKaryawanEksis from "../../services/karyawan/getKaryawanEksis.js";
import verifyPassword from "../../services/otentifikasi/verifyPasswLogin.js";
import tokenGenerator from "../../services/tokens/tokenGenerator.js";

const login = async (req, res) => {
  const {username, password} = req.body;
  const user = await getKaryawanEksis(username);
  if(user === null) {
    return res.status(401).json({errors: 'Username atau password salah !'});
  } else {
    if(user.isVerified === false) return res.status(401).json({errors: 'Maaf, Anda belum verifikasi email. \n Silahkan lakukan verifikasi email terlebih dahulu sebelum melanjutkan.'});

    const checkPassword = await verifyPassword(password, user.password);
    if(checkPassword === false) return res.status(401).json({errors: 'Username atau password salah !'});
    
    const fullname = user.fullname;
    const token = tokenGenerator({fullname});
    
    return res.status(200).json({token: token});
  }
  
}

export default login;