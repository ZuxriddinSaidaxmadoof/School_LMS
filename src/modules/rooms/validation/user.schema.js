// joi
import Joi from "joi";

export const brandSchema = Joi.object({
  number: Joi.number(),
  name: Joi.string().required(),
  floor: Joi.number(),
  capacity: Joi.number(),
  schoolId: Joi.number().required()
});

