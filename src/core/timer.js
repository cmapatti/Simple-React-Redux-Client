function tick(state) {
  return Object.assign({}, state, {
    secondsElapsed: state.secondsElapsed + 1,
  });
}

export { tick };
