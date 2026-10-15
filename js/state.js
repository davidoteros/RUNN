// ==================== Estado compartido ====================

import { COLOR, WEIGHT } from './config.js'

//Object.seal impide crear propiedades nuevas por error (typos), pero permite seguir reasignando los valores existentes
export const state = Object.seal({
    map: null,
    routeGeometry: [],
    elevationProfile: [],
})

//Nunca se reasigna, solo se le llaman métodos (setLatLngs, addTo...) → const, fuera de state
export const routeLine = L.polyline([], { color: COLOR, weight: WEIGHT })
