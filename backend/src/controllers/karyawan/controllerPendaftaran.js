import validasiPendaftaran from "../../validations/karyawan/validasiPendaftaran.js";
import getKaryawanEksis from "../../services/karyawan/getKaryawanEksis.js";
import createKaryawan from "../../services/karyawan/createKaryawan.js";
import emailVerificator from "../../services/emails/emailVerificator.js";
import tokenGenerator from "../../services/tokens/tokenGenerator.js";

const pendaftaranKaryawan = async (req, res) => {
  const validationResult = validasiPendaftaran(req.body);
  if(typeof validationResult !== 'object') { // jika type-nya bukan object / string, artinya ada pesan error dari hasil validasi joi
    return res.status(400).json({errors: validationResult});
  } else {
    const {username, email, nama_lengkap} = validationResult;
    const isExist = await getKaryawanEksis(username, email);
    if(isExist !== null) {
      if(isExist.username === username) return res.status(400).json({errors: `Maaf, username ${username} sudah terdaftar ! <br /> Silahkan gunakan username lain.`});
      if(isExist.email === email) return res.status(400).json({errors: `Maaf, email ${email} sudah terdaftar ! <br /> Periksa kembali inputan Anda.`});
    }

    const token = tokenGenerator({username, email});
    const addEmployee = await createKaryawan(validationResult, token);
    if(typeof addEmployee !== 'object') return res.status(400).json({errors: addEmployee});
  
    const sendEmail = await emailVerificator(email, nama_lengkap, token);
    if(typeof sendEmail === 'object') return res.status(201).json({
      message: 'Berhasil mendaftarkan akun. <br /> Kami telah mengirim email verifikasi, lakukan verifikasi email untuk melanjutkan',
      token: token
    });
  }
}

export default pendaftaranKaryawan;