export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('algorithmsToExecute')
        if (serializedState === null) {
            return undefined // No state in local storage
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

export const saveState = state => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('algorithmsToExecute', serializedState)
    } catch (err) {
        // Handle write errors or log them
    }
}
