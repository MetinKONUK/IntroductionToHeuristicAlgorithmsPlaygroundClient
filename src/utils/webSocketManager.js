import {
    connectWebSocket,
    disconnectWebSocket,
    receiveData,
    resetExecutionResults,
} from '../redux/features/executionResultsSlice'

let socket

export const initializeWebSocket = (dispatch, algorithmsToExecute) => {
    socket = new WebSocket('ws://localhost:5000') // Websocket name here
    socket.onopen = () => {
        dispatch(connectWebSocket())
        dispatch(resetExecutionResults())
        socket.send(JSON.stringify(algorithmsToExecute))
    }
    socket.onmessage = event => {
        const message = JSON.parse(event.data)
        console.log(message)
        dispatch(receiveData(message))
    }

    socket.onclose = () => {
        dispatch(disconnectWebSocket())
    }

    socket.onerror = error => {
        console.error('WebSocket error:', error)
        dispatch(disconnectWebSocket())
    }
}

export const closeWebSocket = () => {
    if (socket) {
        socket.close()
    }
}
