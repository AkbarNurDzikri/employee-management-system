import Joi from 'joi';

const schema = Joi.object({
  nama_lengkap: Joi.string().optional(),
  dept: Joi.string().optional(),
  jabatan: Joi.string().optional(),
  tgl_masuk: Joi.date().optional().messages({
    'date.base': 'Format tanggal masuk tidak valid !'
  }),
  pendidikan_terakhir: Joi.string().optional(),
  jurusan_pendidikan: Joi.string().optional(),
  nik_ktp: Joi.string().min(16).max(16).optional().messages({
    'string.min': 'NIK KTP harus 16 digit !',
    'string.max': 'NIK KTP harus 16 digit !',
  }),
  tempat_lahir: Joi.string().optional(),
  tgl_lahir: Joi.date().optional().messages({
    'date.base': 'Format tanggal lahir tidak valid !'
  }),
  alamat_rumah: Joi.string().optional(),
  agama: Joi.string().optional(),
  kontak: Joi.string().optional(),
  status_pernikahan: Joi.string().optional()
})

const biodataValidation = (formData) => {
  const validation = schema.validate(formData);
  
  if(validation.error) {
    return validation.error.details[0].message;
  } else {
    return validation.value;
  }
}

export default biodataValidation;