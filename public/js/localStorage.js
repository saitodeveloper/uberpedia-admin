$(document).ready(() => {
    if (!window.storage) window.storage = {}

    window.storage.get = (key, def) => {
        const item = localStorage.getItem(key)

        if (!item) return def

        return JSON.parse(item)
    }

    window.storage.set = (key, obj) => {
        localStorage.setItem(key, JSON.stringify(obj))
    }
})
