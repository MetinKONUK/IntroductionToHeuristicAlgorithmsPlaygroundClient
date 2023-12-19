import { createSlice } from '@reduxjs/toolkit'

export const algorithmSelectionSlice = createSlice({
    name: 'algorithm-selection-slice',
    initialState: {
        algorithmsToExecute: [],
    },
    reducers: {
        addAlgorithm: (state, action) => {
            const algorithm = action.payload
            if (algorithm.customFile) {
                // Store only file metadata in Redux
                algorithm.customFile = {
                    name: algorithm.customFile.name,
                    size: algorithm.customFile.size,
                    type: algorithm.customFile.type,
                    lastModified: algorithm.customFile.lastModified,
                }
            }
            state.algorithmsToExecute.push(algorithm)
        },
        removeAlgorithm: (state, action) => {
            state.algorithmsToExecute.splice(action.payload, 1)
        },
    },
})

export const { addAlgorithm, removeAlgorithm } = algorithmSelectionSlice.actions
export default algorithmSelectionSlice.reducer
