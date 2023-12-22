import { createSlice } from '@reduxjs/toolkit'
export const executionResultsSlice = createSlice({
    name: 'executionResults',
    initialState: {
        executionResults: [],
        isConnected: false,
    },
    reducers: {
        connectWebSocket: state => {
            state.isConnected = true
        },
        disconnectWebSocket: state => {
            state.isConnected = false
        },
        receiveData: (state, action) => {
            const { executionId, iterationNumber, iterationFitnessScore } =
                action.payload

            // Find the execution result by ID
            let executionResult = state.executionResults.find(
                er => er.executionId === executionId
            )

            // If not found, create a new execution result entry
            if (!executionResult) {
                executionResult = {
                    executionId: executionId,
                    algorithmData: {}, // Fill in algorithmData as required
                    results: [],
                }
                state.executionResults.push(executionResult)
            }

            // Add the new iteration result
            executionResult.results.push({
                iterationNumber,
                iterationFitnessScore,
            })
        },
    },
})

export const { connectWebSocket, disconnectWebSocket, receiveData } =
    executionResultsSlice.actions
export default executionResultsSlice.reducer
