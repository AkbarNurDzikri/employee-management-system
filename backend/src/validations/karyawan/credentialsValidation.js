import Joi from 'joi';

const schema = Joi.object({
  username: Joi.string().optional().custom((value, helpers) => {
    if(value.includes(' ')) {
      return helpers.error('string.noSpaces');
    } else {
      return value.toLowerCase();
    }
  }).messages({
    'string.empty': 'Username wajib diisi !',
    'string.noSpaces': 'Username tidak boleh mengandung spasi !'
  }),
  email: Joi.string().optional().lowercase().email().messages({
    'string.empty': 'Email wajib diisi !',
    'string.email': 'Format email salah !'
  }),
  password: Joi.string().min(6).optional().messages({
    'string.empty': 'Password wajib diisi !',
    'string.min': 'Password minimal 6 karakter !'
  }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).optional().messages({
    'any.only': 'Konfirmasi password tidak sesuai !'
  })
});

const credentialsValidation = (formData) => {
  const validation = schema.validate(formData);
  
  if(validation.error) {
    return validation.error.details[0].message;
  } else {
    return validation.value;
  }
}

export default credentialsValidation;