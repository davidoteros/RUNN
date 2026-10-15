// ==================== Local Storage ====================

const KEY = 'runn:points'

export function savePointsLS(points) {
    try {
        localStorage.setItem(KEY, JSON.stringify(points))
    } catch (err) {
        console.error('No se pudo guardar la ruta:', err)
    }
}

export function loadPointsLS() {
    try {
        let item = localStorage.getItem(KEY)
        if (!item) return []

        let points = JSON.parse(item)
        return Array.isArray(points) ? points : []
    } catch (err) {
        console.error('No se pudo cargar la ruta:', err)
        return []
    }
}

export function clearPointsLS() {
    try {
        localStorage.removeItem(KEY)
    } catch (err) {
        console.error('No se pudo borrar la info de la ruta:', err)
    }
}