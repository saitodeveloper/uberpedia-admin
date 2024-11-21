const defaultOptions = {
    'Content-type': 'application/json'
}

const url = 'http://localhost:3000'

const onHandlerRequest = async response => {
    const { status } = response
    const body = status === 204 ? {} : await response.json()

    return { body, status }
}

const request = async (path, init) => {
    const response = await fetch(`${url}${path}`, init)
    return await onHandlerRequest(response)
}

const get = async (
    path,
    query,
    isAuthRequest = true,
    headers = { ...defaultOptions }
) => {
    if (isAuthRequest) {
        const token = localStorage.getItem('authToken')
        headers['Authorization'] = `Bearer ${token}`
    }

    const queryString = query ? `?${new URLSearchParams(query).toString()}` : ''
    const options = {
        method: 'GET',
        headers
    }

    return await request(`${path}${queryString}`, options)
}

const post = async (
    path,
    body,
    isAuthRequest = true,
    headers = { ...defaultOptions }
) => {
    if (isAuthRequest) {
        const token = localStorage.getItem('authToken')
        headers['Authorization'] = `Bearer ${token}`
    }
    const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    }

    return await request(path, options)
}

$(document).ready(() => {
    if (!window.request) window.request = {}
    window.request = { get, post }
})
