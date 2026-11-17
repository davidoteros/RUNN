// ==================== Ayuda ====================

let helpDialog = document.getElementById('help-dialog')

export function initHelpEvents() {
    document.querySelectorAll('[data-open-help]').forEach((btn) => {
        btn.addEventListener('click', () => helpDialog.showModal())
    })

    helpDialog.addEventListener('click', (e) => {
        if (e.target === helpDialog) helpDialog.close()
    })
}
