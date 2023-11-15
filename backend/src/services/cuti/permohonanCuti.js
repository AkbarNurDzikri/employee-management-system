import myPrisma from '../../config/db.js';
import {v4 as uuid} from 'uuid';

const permohonanCutiService = async (formData) => {
  return await myPrisma.cuti.create({
    data: {
      id: uuid(),
      employee_id: 'c39d69ac-1f4b-47f7-8792-4c05be331ce8',
      tgl_mulai: formData.tglMulai,
      tgl_selesai: formData.tglSelesai,
      setengah_hari: formData.setengahHari,
      hari_libur: formData.hariLibur,
      jumlah_hari_libur: formData.jumlahHariLibur,
      keterangan_cuti: formData.keteranganCuti,
      hari_cuti: formData.hariCuti
    }
  })
}

export default permohonanCutiService;