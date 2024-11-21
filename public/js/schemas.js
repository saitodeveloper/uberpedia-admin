$(document).ready(() => {
    if (!window.schemas) window.schemas = {}

    window.schemas.BaseSchema = {
        createdAt: joi.date(),
        id: joi.number(),
        updatedAt: joi.date()
    }

    window.schemas.UserSchema = {
        email: joi
            .string()
            .email({ tlds: { allow: false } })
            .min(5)
            .max(255),
        password: joi.string().min(6).max(255),
        ...window.schemas.BaseSchema
    }
})
