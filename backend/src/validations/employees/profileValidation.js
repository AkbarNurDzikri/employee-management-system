import Joi from 'joi';

const schema = Joi.object({
  birth_place: Joi.string().required().messages({
    'string.empty': 'Tempat lahir wajib diisi !'
  }),
  birth_date: Joi.date().required().messages({
    'any.required': 'Tanggal lahir wajib diisi !',
    'date.base': 'Format tanggal lahir tidak valid !'
  }),
  home_address: Joi.string().required().messages({
    'string.empty': 'Alamat tinggal wajib diisi !'
  }),
  contact: Joi.string().required().messages({
    'string.empty': 'Kontak wajib diisi !'
  }),
  dept: Joi.string().required().messages({
    'string.empty': 'Departemen wajib diisi !'
  }),
  title: Joi.string().required().messages({
    'string.empty': 'Jabatan wajib diisi !'
  }),
  join_date: Joi.date().optional().messages({
    'date.base': 'Format tanggal masuk tidak valid !'
  }),
  nik_ktp: Joi.string().min(16).max(16).required().messages({
    'string.empty': 'NIK KTP wajib diisi !',
    'string.min': 'NIK KTP harus 16 digit !',
    'string.max': 'NIK KTP harus 16 digit !',
  }),
  religion: Joi.string().required().messages({
    'string.empty': 'Agama wajib diisi !'
  })
})

const profileValidation = (formData) => {
  const validation = schema.validate(formData);
  
  if(validation.error) {
    return validation.error.details[0].message;
  } else {
    return validation.value;
  }
}

export default profileValidation;