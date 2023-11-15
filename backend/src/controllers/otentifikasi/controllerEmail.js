import tokenVerificator from "../../services/tokens/tokenVerificator.js";
import getKaryawanEksis from "../../services/karyawan/getKaryawanEksis.js";
import verifikasiUser from "../../services/otentifikasi/verifikasiUser.js";

const verifikasiEmail = async (req, res) => {
  const token = req.query.token;
  const decodedToken = tokenVerificator(token);
  if(decodedToken === 'jwt expired') return res.status(403).json({errors: 'Token Kadaluwarsa !<br /> Lakukan permintaan verifikasi ulang'});

  const {username, email} = decodedToken;
  const validUser = await getKaryawanEksis(username, email);
  if(!validUser) return res.status(404).json({errors: 'Maaf, data pengguna tidak ditemukan !'});
  if(validUser.isVerified) return res.status(403).json({errors: 'Akun Anda sudah terverifikasi<br /> Silahkan login'})

  const result = await verifikasiUser(username);
  if(typeof result !== 'object') return res.status(400).json({errors: result});
  res.status(200).json({message: 'Verifikasi akun berhasil'});
}

export default verifikasiEmail;