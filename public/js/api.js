const authPages = {
    '/index.html': true,
    '/': true
}

$(document).ready(() => {
    const isAuthPage = authPages[window.location.pathname]

    if (isAuthPage && !localStorage.getItem('authToken'))
        window.location.href = '/login.html'

    if (!window.api) window.api = {}

    window.api.postAuthUser = async body => {
        const result = window.models.PostAuthUser.validate(body)
        if (result.error) return result.error
        return await window.request.post('/v1/user/login', body, false)
    }

    window.api.getMe = async body => {
        return await window.request.get('/v1/user/me', body)
    }
})
