export function startTimerAction(intervalID) {
  return { type: 'START_TIMER', intervalID };
}

export function stopTimerAction() {
  return { type: 'STOP_TIMER' };
}

export function updateTimerAction() {
  return { type: 'UPDATE_TIMER' };
}

export function resetTimerAction() {
  return { type: 'RESET_TIMER' };
}
