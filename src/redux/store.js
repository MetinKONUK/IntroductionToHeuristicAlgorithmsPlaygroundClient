import { configureStore } from '@reduxjs/toolkit'
import { loadState, saveState } from '../utils/localStorage'
import algorithmSelectionReducer from './features/algorithmSelectionSlice'
import executionResultsReducer from './features/executionResultsSlice'

const persistedState = loadState()

export const store = configureStore({
    reducer: {
        algorithmSelection: algorithmSelectionReducer,
        executionResults: executionResultsReducer,
    },
    preloadedState: {
        algorithmSelection: {
            algorithmsToExecute: persistedState || [],
        },
    },
})

store.subscribe(() => {
    saveState(store.getState().algorithmSelection.algorithmsToExecute)
})
