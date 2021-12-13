import Joi from 'joi';

const userStoreSchema = Joi.object({
  name: Joi.string().required(),
  class: Joi.string().required()
});

export { userStoreSchema };
