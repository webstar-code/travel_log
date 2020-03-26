const Joi = require('@hapi/joi');


const registervalidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    
    const validation = schema.validate(data);
    return validation;
    
    
}

const loginvalidation = (data) => {
    const loginschema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    });
    
    const validation = loginschema.validate(data);
    return validation;
    
    
}
module.exports.registervalidations = registervalidation;
module.exports.loginvalidation = loginvalidation;





