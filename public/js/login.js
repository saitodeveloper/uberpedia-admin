const views = {}

async function onLogin() {
    const email = views.inputEmail.val()
    const password = views.inputPassword.val()

    const resultLogin = await window.api.postAuthUser({ email, password })

    localStorage.setItem('authToken', resultLogin.body.authToken)
    localStorage.setItem('refreshToken', resultLogin.body.refreshToken)

    const resultMe = await window.api.getMe()

    if (resultMe.status === 200) {
        window.storage.set('user', resultMe.body)
        window.location.href = '/'
    }
}

function initViews() {
    views.buttonLogin = $('#_button_login')
    views.inputEmail = $('#_input_email')
    views.inputPassword = $('#_input_password')
}

function initListeners() {
    views.buttonLogin.click(onLogin)
}

$(document).ready(() => {
    initViews()
    initListeners()
})
