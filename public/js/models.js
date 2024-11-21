$(document).ready(() => {
    if (!window.models) window.models = {}

    window.models.PostAuthUser = joi.object({
        email: window.schemas.UserSchema.email.required(),
        password: joi.string().min(6).max(20).required()
    })
})
