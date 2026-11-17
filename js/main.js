// ==================== Arranque ====================

import { initMap } from './map.js'
import { initPointsEvents, restoreSavedPoints } from './points.js'
import { initRouteEvents } from './route.js'
import { initChartEvents } from './elevationChart.js'
import { initSearchEvents } from './search.js'
import { initSheetEvents } from './sheet.js'
import { initHelpEvents } from './help.js'

initMap()
initPointsEvents()
restoreSavedPoints()
initRouteEvents()
initChartEvents()
initSearchEvents()
initSheetEvents()
initHelpEvents()
