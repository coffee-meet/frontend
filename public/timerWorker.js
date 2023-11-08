const timerState = {
  intervalId: null,
  startTime: null,
}

const sendTick = () => {
  const elapsedTime = Date.now() - timerState.startTime
  postMessage({ type: 'TICK', time: elapsedTime })
}

onmessage = (event) => {
  const { type, startTime: receivedStartTime } = event.data
  switch (type) {
    case 'START':
      if (timerState.intervalId === null) {
        timerState.startTime = receivedStartTime
        timerState.intervalId = setInterval(sendTick, 1000)
      }
      break
    case 'RESET':
      clearInterval(timerState.intervalId)
      timerState.intervalId = null
      timerState.startTime = null
      break
    default:
      console.error('Unknown message type:', type)
  }
}
