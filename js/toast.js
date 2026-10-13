// ==================== Toasts ====================

const TOAST_DURATION_MS = 4000
const MAX_TOASTS = 4

let container = null

function getContainer() {
    if (!container) {
        container = document.getElementById('toast-container')
    }
    return container
}

export function showToast(message) {
    let host = getContainer()
    if (!host) return

    //Si ya hay uno igual en pantalla no lo repetimos
    let isDuplicate = Array.from(host.children).some(
        (el) => el.dataset.message === message,
    )
    if (isDuplicate) return

    //Si hay demasiados, quitamos el más antiguo
    while (host.children.length >= MAX_TOASTS) {
        host.firstElementChild.remove()
    }

    let toast = document.createElement('div')
    toast.className = 'toast'
    toast.dataset.message = message
    //Todos los toasts son errores
    toast.setAttribute('role', 'alert')

    let text = document.createElement('span')
    text.className = 'toast-text'
    text.textContent = message

    let close = document.createElement('button')
    close.type = 'button'
    close.className = 'toast-close'
    close.setAttribute('aria-label', 'Cerrar notificación')
    close.innerHTML = '<span class="icon-svg icon-svg-x"></span>'
    close.addEventListener('click', () => toast.remove())

    //Tocar el toast lo cierra: en móvil puede estar tapando el botón de deshacer
    toast.addEventListener('click', () => toast.remove())

    toast.append(text, close)
    host.append(toast)

    setTimeout(() => toast.remove(), TOAST_DURATION_MS)
}
