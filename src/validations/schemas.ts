import Joi from 'joi';

const userStoreSchema = Joi.object({
  name: Joi.string().required(),
  class: Joi.string().required(),
});

const questionStoreSchema = Joi.object({
    question: Joi.string().required(),
	student: Joi.string().required(),
	class: Joi.string().required(),
	tags: Joi.string().required(),
})

export { userStoreSchema, questionStoreSchema };
