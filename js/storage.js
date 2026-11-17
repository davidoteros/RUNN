// ==================== Local Storage ====================

const KEY = 'runn:points'
const TTL_MS = 24 * 60 * 60 * 1000

export function savePointsLS(points) {
    try {
        localStorage.setItem(KEY, JSON.stringify({ savedAt: Date.now(), points }))
    } catch (err) {
        console.error('No se pudo guardar la ruta:', err)
    }
}

export function loadPointsLS() {
    try {
        let item = localStorage.getItem(KEY)
        if (!item) return []

        let data = JSON.parse(item)

        if (Array.isArray(data)) {
            savePointsLS(data)
            return data
        }

        if (!data || !Array.isArray(data.points)) return []

        if (Date.now() - data.savedAt > TTL_MS) {
            clearPointsLS()
            return []
        }
        return data.points
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
