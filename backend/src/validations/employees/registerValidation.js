import Joi from 'joi';

const schema = Joi.object({
  username: Joi.string().required().messages({
    'string.empty': 'Username wajib diisi !'
  }),
  email: Joi.string().required().email().messages({
    'string.empty': 'Email wajib diisi !',
    'string.email': 'Format email salah !'
  }),
  fullname: Joi.string().required().messages({
    'string.empty': 'Nama lengkap wajib diisi !',
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Password wajib diisi !',
    'string.min': 'Password minimal 6 karakter !'
  }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
    'any.only': 'Konfirmasi password tidak sesuai !'
  })
});

const registerValidation = (formData) => {
  const validation = schema.validate(formData);

  if(validation.error) return validation.error.message;
}

export default registerValidation;