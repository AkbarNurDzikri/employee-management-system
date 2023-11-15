import Joi from 'joi';

const schema = Joi.object({
  tglMulai: Joi.date().required().messages({
    'string.empty': 'Tanggal Mulai wajib diisi !',
    'date.base': 'Format tanggal mulai tidak valid !'
  }),
  tglSelesai: Joi.date().required().messages({
    'string.empty': 'Tanggal Selesai wajib diisi !',
    'date.base': 'Format tanggal selesai tidak valid !'
  }),
  setengahHari: Joi.boolean().optional().messages({
    'boolean.base': 'Nilai setengah hari harus berupa boolean !',
  }),
  hariLibur: Joi.boolean().optional().messages({
    'boolean.base': 'Nilai hari libur harus berupa boolean !',
  }),
  jumlahHariLibur: Joi.number().optional().messages({
    'number.base': 'Nilai jumlah hari libur harus berupa number !',
  }),
  keteranganCuti: Joi.string().required().messages({
    'string.empty': 'Keterangan tidak boleh kosong !'
  }),
  hariCuti: Joi.number().required().messages({
    'number.base': 'Format hari cuti harus number !',
    'number.empty': 'Hari cuti wajib diisi !'
  })
});

const permohonanCutiValidation = (formData) => {
  const validation = schema.validate(formData);

  if(validation.error) {
    return validation.error.details[0].message;
  } else {
    return validation.value;
  }
}

export default permohonanCutiValidation;