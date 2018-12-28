const initialState = {
  authenticated: '',
  errorMessage: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'AUTH_USER':
      return { ...state, authenticated: action.token }
    case 'AUTH_ERROR':
      return { ...state, errorMessage: action.error }
    default:
      return state;
  }
}
