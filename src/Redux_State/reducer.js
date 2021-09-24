const init = {
  username: 'Juhan',
}

export const Reducer = (state = init, action = {}) => {
  switch (action.type) {
    case 'CHANGE_USERNAME':
      return {
        ...state,
        username: action.payload
      }

    default:
      return state;
  }
}