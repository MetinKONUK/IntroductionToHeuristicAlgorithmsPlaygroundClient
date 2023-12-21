import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'

export const algorithmSelectionSlice = createSlice({
    name: 'algorithm-selection-slice',
    initialState: {
        algorithmsToExecute: [],
    },
    reducers: {
        addAlgorithm: (state, action) => {
            const algorithm = action.payload
            algorithm.executionId = uuidv4()
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
            toast.success('Insertion to execution list succeed!')
        },
        removeAlgorithm: (state, action) => {
            state.algorithmsToExecute.splice(action.payload, 1)
            toast.success('Removal from execution list succeed!')
        },
        updateAlgorithm: (state, action) => {
            const { index, parameters } = action.payload
            if (parameters.customFile) {
                // Store only file metadata in Redux
                parameters.customFile = {
                    name: parameters.customFile.name,
                    size: parameters.customFile.size,
                    type: parameters.customFile.type,
                    lastModified: parameters.customFile.lastModified,
                }
            }
            state.algorithmsToExecute[index] = parameters
            toast.success('Parameters update succeed!')
        },
    },
})

export const { addAlgorithm, removeAlgorithm, updateAlgorithm } =
    algorithmSelectionSlice.actions
export default algorithmSelectionSlice.reducer
